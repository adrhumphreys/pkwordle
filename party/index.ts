import type * as Party from "partykit/server";
import { produce } from "immer";

import type { WordleGameState, WordleGuessCharacter } from "@/lib/types";
import { words } from "@/lib/words";

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  gameState: WordleGameState | undefined;

  /**
   * A POST request is handled here to create a new room
   */
  async onRequest(req: Party.Request) {
    if (req.method === "POST") {
      const datum = (await req.json()) as {
        id: string;
        username: string;
      };
      this.gameState = {
        id: datum.id,
        canGuess: false,
        word: "mango",
        players: [],
      };
    }

    if (this.gameState) {
      return new Response(JSON.stringify(this.gameState), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Not found", { status: 404 });
  }

  /**
   * When a user joins a room, they will go through here and we will take there username
   */
  async onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
    const params = new URLSearchParams(ctx.request.url.split("?")[1]);
    const username = params.get("username") ?? "Biome";
    const playerId = params.get("playerId");

    if (!playerId) throw new Error("Missing player id");

    if (!this.gameState) throw new Error("No game state");

    if (this.gameState.players.find((p) => p.id === playerId)) {
      // The player exists, we're ok
      return;
    }

    this.gameState = produce(this.gameState, (draft) => {
      draft.players.push({
        id: playerId,
        username,
        guesses: [],
        score: 0,
      });
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  // Handle messages
  async onMessage(message: string) {
    if (!this.gameState) return;

    const event = JSON.parse(message) as {
      type: "start" | "guess" | "next" | "mode";
    };

    if (event.type === "guess") {
      const { playerId, guess } = JSON.parse(message) as {
        playerId: string;
        guess: string;
      };

      await this.handleGuess(guess, playerId);
    }

    if (event.type === "start") await this.handleStartGame();

    if (event.type === "next") await this.handleNextRound();

    if (event.type === "mode") await this.handleMode();
  }

  async handleStartGame() {
    if (!this.gameState) throw new Error("Missing game state");
    this.gameState = produce(this.gameState, (draft) => {
      draft.canGuess = true;
      draft.startedAt = Date.now();
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  /**
   * Handles a user making a guess
   */
  async handleGuess(guess: string, playerId: string) {
    if (!this.gameState) throw new Error("Missing game state");
    if (!this.gameState.canGuess) return;
    this.gameState = produce(this.gameState, (draft) => {
      const player = draft.players.find((player) => player.id === playerId);
      if (!player) throw new Error("Missing player");

      if (player.guesses.length > 6) {
        return;
      }

      if (player.completedAt) {
        // They have already won
        return;
      }

      if (
        player.guesses.some((g) => g.map((g) => g.value).join("") === guess)
      ) {
        return;
      }

      const word = draft.word;
      // make guess and tell if its right or not
      const result = guess.split("").map((value, idx): WordleGuessCharacter => {
        if (word[idx] === value) {
          return {
            value,
            status: "correct",
          };
        }

        if (word.split("").includes(value)) {
          return {
            value,
            status: "present",
          };
        }

        return {
          value,
          status: "absent",
        };
      });

      player.guesses.push(result);

      if (guess === word) {
        const winners = draft.players.filter(
          (p) => p.completedAt !== undefined
        ).length;
        // First 3 players get points
        player.score += Math.max(3 - winners, 0);
        player.completedAt = Date.now();
      }
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  /**
   * Handles a user starting the next round
   */
  async handleNextRound() {
    if (!this.gameState) throw new Error("Missing game state");
    // Get a random word to use next
    const word = words[Math.floor(Math.random() * words.length)];
    this.gameState = produce(this.gameState, (draft) => {
      draft.word = word;
      draft.startedAt = Date.now();
      draft.players.forEach((player) => {
        player.guesses = [];
        player.completedAt = undefined;
      });
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  async handleMode() {
    if (!this.gameState) throw new Error("Missing game state");
    this.gameState = produce(this.gameState, (draft) => {
      draft.isHardMode = !draft.isHardMode;
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  async saveGameState() {
    if (this.gameState) {
      await this.room.storage.put<WordleGameState>("gameState", this.gameState);
    }
  }

  async onStart() {
    this.gameState = await this.room.storage.get<WordleGameState>("gameState");
  }
}

Server satisfies Party.Worker;
