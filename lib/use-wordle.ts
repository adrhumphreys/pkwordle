import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "./env";
import { WordleGameState } from "@/lib/types";
import { useCallback, useState } from "react";
import { validWords } from "./words";

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
  });

  const start = useCallback(() => {
    socket.send(JSON.stringify({ type: "start" }));
  }, [socket]);

  const startNextRound = useCallback(() => {
    socket.send(JSON.stringify({ type: "next" }));
  }, [socket]);

  const submitGuess = useCallback(
    (roughGuess: string) => {
      const guess = roughGuess.toLocaleLowerCase().replaceAll(" ", "");
      if (!validWords.includes(guess)) {
        throw new Error("Guess was not a valid word");
      }

      socket.send(JSON.stringify({ type: "guess", guess, playerId }));
    },
    [playerId, socket]
  );

  return {
    currentState,
    submitGuess,
    start,
    startNextRound,
  };
};
