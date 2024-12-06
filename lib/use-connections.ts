import usePartySocket from "partysocket/react";
import { PARTYKIT_HOST } from "./env";
import { ConnectionsGameState } from "@/lib/types";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export const useConnections = ({
  playerId,
  username,
  initialState,
}: {
  playerId: string;
  username: string;
  initialState: ConnectionsGameState;
}) => {
  const [currentState, setCurrentState] =
    useState<ConnectionsGameState>(initialState);

  const socket = usePartySocket({
    host: PARTYKIT_HOST,
    room: currentState.id,
    party: "connections_game",
    onMessage(event: { data: string }) {
      const message = JSON.parse(event.data) as ConnectionsGameState;
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
    (guess: string[]) => {
      if (guess.length !== 4) {
        toast.error("Please select 4 items...");
        return;
      }

      socket.send(JSON.stringify({ type: "guess", guess, playerId }));

      const wasClose = Object.values(currentState.game.board).some(
        (category) => {
          return (
            category.members.filter((word) => guess.includes(word)).length === 3
          );
        }
      );

      if (wasClose) toast.info("Off by one");
    },
    [playerId, socket, currentState.game.board]
  );

  return {
    currentState,
    submitGuess,
    start,
    startNextRound,
  };
};
