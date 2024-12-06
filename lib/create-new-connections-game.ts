"use server";

import { redirect } from "next/navigation";
import { PARTYKIT_URL } from "./env";
import { generateId } from "./id";

export const createNewConnectionsGame = async (username: string) => {
  const id = generateId();
  const playerId = generateId();

  await fetch(`${PARTYKIT_URL}/parties/connections_game/${id}`, {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  redirect(`/connections/${id}?playerId=${playerId}&username=${username}`);
};
