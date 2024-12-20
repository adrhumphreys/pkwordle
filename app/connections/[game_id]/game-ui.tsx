"use client";

import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { ConnectionsGameState } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useConnections } from "@/lib/use-connections";

export function GameUI({
  initialState,
}: {
  initialState: ConnectionsGameState;
}) {
  const params = useSearchParams();
  const playerId = params.get("playerId");
  const username = params.get("username");

  if (!playerId || !username) {
    throw new Error("Missing user");
  }

  const { currentState, submitGuess, start, startNextRound } = useConnections({
    playerId,
    username,
    initialState,
  });

  const [board, setBoard] = useState(() =>
    initialState.game.startingBoard.flatMap((x) => x)
  );
  const [gameId, setGameId] = useState(initialState.game.id);
  useEffect(() => {
    if (gameId !== currentState.game.id) {
      setBoard(currentState.game.startingBoard.flatMap((x) => x));
      setGameId(currentState.game.id);
    }
  }, [currentState.game, gameId]);

  const playerState = currentState.players.find((p) => p.id === playerId);

  const handleSubmit = () => {
    submitGuess(["", "", "", ""]);
    console.log(playerState);
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

        <div className="grid grid-cols-4 gap-4">
          {board.map((word, idx) => (
            <button key={`${word}-${idx}`}>{word}</button>
          ))}
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
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
