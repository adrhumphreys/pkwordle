import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "./env";
import { WordleGameState } from "@/lib/types";
import { useCallback, useState } from "react";
import { validWords } from "./words";
import { toast } from "sonner";

export const useWordle = ({
  playerId,
  username,
  initialState,
}: {
  playerId: string;
  username: string;
  initialState: WordleGameState;
}) => {
  const [currentState, setCurrentState] =
    useState<WordleGameState>(initialState);

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: currentState.id,
    onMessage(event: { data: string }) {
      const message = JSON.parse(event.data) as WordleGameState;
      setCurrentState(message);
    },
    query: async () => ({
      username,
      playerId,
    }),
    onError(e) {
      console.log("error", e);
    },
  });

  const start = useCallback(() => {
    socket.send(JSON.stringify({ type: "start" }));
  }, [socket]);

  const startNextRound = useCallback(() => {
    socket.send(JSON.stringify({ type: "next" }));
  }, [socket]);

  const toggleHardMode = useCallback(() => {
    socket.send(JSON.stringify({ type: "mode" }));
  }, [socket]);

  const submitGuess = useCallback(
    (roughGuess: string) => {
      const guess = roughGuess.toLocaleLowerCase().replaceAll(" ", "");
      if (!validWords.includes(guess)) {
        toast.error("Guess was not a valid word");
        return;
      }

      const lastGuesses = currentState.players.find(
        (p) => p.id === playerId
      )?.guesses;

      if (lastGuesses && lastGuesses.length > 6) {
        toast.error("Only allowed 6 guesses");
        return;
      }

      if (lastGuesses && lastGuesses.length > 0) {
        const lastGuess = lastGuesses[lastGuesses?.length - 1];
        const usedSameCharacters = lastGuess.every((l, idx) => {
          // It wasn't there before so its fine
          if (l.status === "absent") return true;
          // Present so the new guess just needs to include it
          if (l.status === "present") return guess.split("").includes(l.value);
          // Must be correct so same place and value
          return guess[idx] === l.value;
        });

        if (!usedSameCharacters) {
          toast.error(
            "Hard mode is on, so your guess must use the known characters and locations"
          );
          return;
        }
      }

      if (lastGuesses?.some((g) => g.map((g) => g.value).join("") === guess)) {
        toast.error("Can't guess the same word again");
        return;
      }

      socket.send(JSON.stringify({ type: "guess", guess, playerId }));
    },
    [playerId, socket, currentState]
  );

  return {
    currentState,
    submitGuess,
    start,
    startNextRound,
    toggleHardMode,
  };
};
