"use client";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { useWordle } from "@/lib/use-wordle";
import { GameState } from "../types";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function GameUI({ initialState }: { initialState: GameState }) {
  const params = useSearchParams();
  const playerId = params.get("playerId");
  const username = params.get("username");

  if (!playerId || !username) {
    throw new Error("Missing user");
  }

  const { currentState, submitGuess, start, startNextRound } = useWordle({
    playerId,
    username,
    initialState,
  });

  const [currentGuess, setCurrentGuess] = useState("");

  const playerState = currentState.players.find((p) => p.id === playerId);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitGuess(currentGuess);
    setCurrentGuess("");
  };

  // First player is admin
  const isAdmin = currentState.players[0]?.id === playerId;

  const finishedPlayers = currentState.players
    .filter((player) => player.completedAt)
    .sort((a, b) => a.completedAt! - b.completedAt!);

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8">
        {isAdmin && (
          <div className="flex gap-2 items-center">
            {!currentState.canGuess && (
              <Button variant="secondary" onClick={start}>
                Start
              </Button>
            )}
            {currentState.canGuess && (
              <Button variant="secondary" onClick={startNextRound}>
                Start next round
              </Button>
            )}
          </div>
        )}

        {playerState ? (
          <div data-testid="previous-guesses">
            <p>Previous guesses</p>
            <div className="flex flex-col gap-2">
              {playerState.guesses.map((guess, idx) => (
                <div
                  className="flex gap-2"
                  key={`${JSON.stringify(guess)}-${idx}`}
                >
                  {guess.map((char, idx) => (
                    <div
                      key={`${char}-${idx}`}
                      className={cn(
                        "uppercase font-bold grid place-items-center w-8 h-10",
                        char.status === "absent" && "bg-red-300",
                        char.status === "correct" && "bg-green-300",
                        char.status === "present" && "bg-orange-300"
                      )}
                    >
                      {char.value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="max-w-sm flex flex-col gap-2">
            <Label htmlFor="guess">Your guess</Label>
            <Input
              id="guess"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
            />
            <Button disabled={!currentState.canGuess}>Enter</Button>
          </div>
        </form>
      </div>
      <div className="flex flex-col gap-1 max-w-sm w-full">
        <p>Scores:</p>
        <ul>
          {currentState.players.map((player) => (
            <li key={player.id}>
              {player.username}: {player.score}
              {finishedPlayers[0].id !== player.id && player.completedAt && (
                <span className="text-red-600">
                  {" "}
                  (+{player.completedAt - finishedPlayers[0].completedAt!}ms)
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <p>Player state:</p>
        <JsonView
          src={{ ...currentState, word: "mango" }}
          collapsed={(params) => {
            if (params.indexOrName === "guesses") return true;
            return false;
          }}
        />
      </div>
    </div>
  );
}
