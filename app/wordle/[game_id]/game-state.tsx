import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { WordleGameState } from "@/lib/types";
import { Guess } from "./guess";

export function GameState({
  state,
  playerId,
  isCompleted,
}: {
  state: WordleGameState;
  playerId: string;
  isCompleted: boolean;
}) {
  const { players } = state;

  return (
    <div className="space-y-2">
      <p className="text-lg font-semibold">Players</p>
      <div className="grid grid-cols-3 gap-4">
        {players.map((player) => {
          return (
            <div
              className="border p-2 rounded-md flex flex-col gap-2 w-fit"
              key={player.id}
            >
              <div className="flex flex-col gap-2 justify-center">
                {player.guesses.map((guess, idx) => (
                  <Guess
                    guess={guess}
                    isHidden={!isCompleted}
                    key={`${JSON.stringify(guess)}-${idx}`}
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-center">
                {player.username} {playerId === player.id && "(You)"}
              </p>
            </div>
          );
        })}
      </div>

      <p>Game state:</p>
      <JsonView
        src={{ ...state, word: "mango" }}
        collapsed={(params) => {
          if (params.indexOrName === "guesses") return true;
          return false;
        }}
      />
    </div>
  );
}
