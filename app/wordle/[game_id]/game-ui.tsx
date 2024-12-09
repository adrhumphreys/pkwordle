"use client";

import { useWordle } from "@/lib/use-wordle";
import { WordleGameState } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GameState } from "./game-state";
import { Guess } from "./guess";

export function GameUI({ initialState }: { initialState: WordleGameState }) {
  const params = useSearchParams();
  const playerId = params.get("playerId");
  const username = params.get("username");

  if (!playerId || !username) {
    throw new Error("Missing user");
  }

  const { currentState, submitGuess, start, startNextRound, toggleHardMode } =
    useWordle({
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

  const hasFinished = useMemo(
    () =>
      currentState.players.every(
        (p) =>
          p.completedAt !== undefined || (p.guesses && p.guesses.length >= 6)
      ),
    []
  );

  return (
    <div className="flex gap-8">
      <div className="flex flex-col gap-8">
        {isAdmin && (
          <div>
            <div className="flex gap-2 items-center">
              {!currentState.canGuess && (
                <Button variant="secondary" onClick={start}>
                  Start
                </Button>
              )}
              {currentState.canGuess && (
                <Button
                  variant={hasFinished ? "default" : "secondary"}
                  onClick={startNextRound}
                >
                  Start next round
                </Button>
              )}

              <Button onClick={toggleHardMode} variant="secondary">
                {currentState.isHardMode
                  ? "Turn off hard mode"
                  : "Turn on hard mode"}
              </Button>
            </div>
            {hasFinished && (
              <p>All players are finished, start the next round</p>
            )}
          </div>
        )}

        {playerState?.guesses && playerState.guesses.length > 0 ? (
          <div data-testid="previous-guesses" className="space-y-2">
            <p className="text-lg font-semibold">Previous guesses</p>
            <div className="flex flex-col gap-2">
              {playerState.guesses.map((guess, idx) => (
                <Guess
                  key={`${JSON.stringify(guess)}-${idx}`}
                  guess={guess}
                  isHidden={false}
                />
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

        {!playerState?.completedAt &&
          playerState?.guesses.length &&
          playerState?.guesses.length >= 6 && (
            <p>
              The word was{" "}
              <span className="font-semibold">{currentState.word}</span>
            </p>
          )}
      </div>
      <div className="flex flex-col gap-1 max-w-sm w-full">
        <p>Scores:</p>
        <ul>
          {currentState.players.map((player) => (
            <li key={player.id}>
              {player.username}: {player.score}
              {finishedPlayers?.[0]?.id !== player.id && player.completedAt && (
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
        <GameState
          state={currentState}
          playerId={playerId}
          isCompleted={playerState?.completedAt !== undefined}
        />
      </div>
    </div>
  );
}
