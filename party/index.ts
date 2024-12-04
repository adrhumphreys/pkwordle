import type * as Party from "partykit/server";
import { produce } from "immer";

import type { GameState } from "@/app/types";
import { words } from "@/lib/words";

const randomId = () => Math.random().toString(36).substring(2, 10);

export default class Server implements Party.Server {
  constructor(readonly room: Party.Room) {}

  gameState: GameState | undefined;

  /**
   * A GET request is handled here to create a new room
   */
  async onRequest(req: Party.Request) {
    if (req.method === "POST") {
      const datum = (await req.json()) as {
        id: string;
        username: string;
      };
      this.gameState = {
        id: datum.id,
        word: "",
        players: [
          { id: randomId(), username: datum.username, state: { guesses: [] } },
        ],
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
    const user = {
      name: params.get("name") ?? undefined,
    };

    let gameState = (await this.room.storage.get("gameState")) as GameState;
  }

  // Handle messages
  async onMessage(message: string) {
    if (!this.gameState) return;

    const event = JSON.parse(message) as { type: "guess" | "next" };

    if (event.type === "guess") {
      const { playerId, guess } = JSON.parse(message) as {
        playerId: string;
        guess: string;
      };

      this.handleGuess(guess, playerId);
    }

    if (event.type === "next") {
      this.handleNextRound();
    }
  }

  /**
   * Handles a user making a guess
   */
  async handleGuess(guess: string, playerId: string) {
    if (!this.gameState) throw new Error("Missing game state");
    this.gameState = produce(this.gameState, (draft) => {
      const player = draft.players.find((player) => player.id === playerId);
      if (!player) throw new Error("Missing player");
      const word = draft.word;
      // make guess and tell if its right or not
      player.guesses.push([
        { value: "a", status: "absent" },
        { value: "p", status: "absent" },
        { value: "p", status: "absent" },
        { value: "l", status: "absent" },
        { value: "e", status: "absent" },
      ]);
      if (guess === word) {
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
    let word = words[Math.floor(Math.random() * words.length)];
    this.gameState = produce(this.gameState, (draft) => {
      draft.word = word;
      draft.players.forEach((player) => {
        player.guesses = [];
        player.completedAt = undefined;
      });
    });
    this.saveGameState();
    this.room.broadcast(JSON.stringify(this.gameState));
  }

  async saveGameState() {
    if (this.gameState) {
      await this.room.storage.put<GameState>("gameState", this.gameState);
    }
  }

  async onStart() {
    this.gameState = await this.room.storage.get<GameState>("gameState");
  }
}

Server satisfies Party.Worker;
