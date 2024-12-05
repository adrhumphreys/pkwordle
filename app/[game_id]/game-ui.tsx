"use client";

// import JsonView from "@uiw/react-json-view";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { useWordle } from "@/lib/use-wordle";
import { GameState } from "../types";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 items-center">
        <p>Admin tools</p>
        <Button onClick={start}>Start</Button>
        <Button onClick={startNextRound}>Start next round</Button>
      </div>

      {playerState ? (
        <div>
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

      <div className="max-w-sm flex flex-col gap-2">
        <Label htmlFor="guess">Your guess</Label>
        <Input
          id="guess"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <Button
          onClick={() => {
            submitGuess(currentGuess);
            setCurrentGuess("");
          }}
        >
          Enter
        </Button>
      </div>

      <div>
        <p>Game state:</p>
        <JsonView
          src={currentState}
          collapsed={(params) => {
            if (params.depth === 5) return true;
            return false;
          }}
        />
      </div>
    </div>
  );
}
