import type * as Party from "partykit/server";
import { produce } from "immer";

import type { ConnectionsGameState, ConnectionGame } from "@/lib/types";
import { connections } from "@/lib/conections";

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  gameState: ConnectionsGameState | undefined;

  getNewGame() {
    const game = connections[Math.floor(Math.random() * connections.length)];
    return {
      ...game,
      startingBoard: game.startingBoard.flatMap((x) => x),
    } as ConnectionGame;
  }

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
        players: [],
        game: this.getNewGame(),
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
        remainingLives: 4,
      });
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  // Handle messages
  async onMessage(message: string) {
    if (!this.gameState) return;

    const event = JSON.parse(message) as { type: "start" | "guess" | "next" };

    if (event.type === "guess") {
      const { playerId, guess } = JSON.parse(message) as {
        playerId: string;
        guess: string[];
      };

      this.handleGuess(guess, playerId);
    }

    if (event.type === "start") {
      this.handleStartGame();
    }

    if (event.type === "next") {
      this.handleNextRound();
    }
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
  async handleGuess(guess: string[], playerId: string) {
    if (!this.gameState) throw new Error("Missing game state");
    if (!this.gameState.canGuess) return;
    const game = this.gameState.game;
    this.gameState = produce(this.gameState, (draft) => {
      const player = draft.players.find((player) => player.id === playerId);
      if (!player) throw new Error("Missing player");

      if (player.remainingLives === 0) {
        // You can't keep playing if you're out of lives
        return;
      }

      if (player.completedAt) {
        // They have already finished
        return;
      }

      if (
        player.guesses.some((oldGuess) =>
          oldGuess.every((card) => guess.includes(card))
        )
      ) {
        // They have already made this guess
        return;
      }

      // make guess and tell if its right or not
      const correct = Object.values(game.board).find((category) =>
        category.members.every((word) => guess.includes(word))
      );

      if (correct) {
        // Levels start at 0 to we inc by 1
        player.score += correct.level + 1;
      } else {
        player.remainingLives -= 1;
      }

      player.guesses.push(guess);

      const allCorrect = Object.values(game.board).every((category) =>
        player.guesses.some((guess) =>
          category.members.every((word) => guess.includes(word))
        )
      );

      if (allCorrect) {
        const winners = draft.players.filter(
          (p) => p.completedAt !== undefined
        ).length;
        // First 3 players get bonus points
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
    this.gameState = produce(this.gameState, (draft) => {
      draft.game = this.getNewGame();
      draft.startedAt = Date.now();
      draft.players.forEach((player) => {
        player.guesses = [];
        player.completedAt = undefined;
        player.remainingLives = 4;
      });
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  async saveGameState() {
    if (this.gameState) {
      await this.room.storage.put<ConnectionsGameState>(
        "gameState",
        this.gameState
      );
    }
  }

  async onStart() {
    this.gameState = await this.room.storage.get<ConnectionsGameState>(
      "gameState"
    );
  }
}

Server satisfies Party.Worker;
