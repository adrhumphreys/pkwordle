import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "./env";
import { GameState } from "@/app/types";
import { useCallback, useState } from "react";

export const useWordle = ({
  userId,
  initialState,
}: {
  userId: string;
  initialState: GameState;
}) => {
  const [currentState, setCurrentState] = useState<GameState>(initialState);

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: currentState.id,
    onMessage(event: { data: string }) {
      const message = JSON.parse(event.data) as GameState;
      setCurrentState(message);
    },
  });

  const [currentGuess, setCurrentGuess] = useState<string[]>([]);

  const handleChangeCharacter = useCallback((char: string, idx: number) => {
    setCurrentGuess((current) => {
      current[idx] = char;
      return current;
    });
  }, []);

  const handleSubmitGuess = useCallback(() => {
    if (currentGuess.length !== 5) {
      throw new Error("Guess was not 5 characters");
    }

    socket.send(JSON.stringify({ guess: currentGuess, userId }));
  }, [currentGuess, userId, socket]);

  return {
    currentState,
    handleChangeCharacter,
    handleSubmitGuess,
  };
};
