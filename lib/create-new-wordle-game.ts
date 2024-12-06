"use server";

import { redirect } from "next/navigation";
import { PARTYKIT_URL } from "./env";
import { generateId } from "./id";

export const createNewWordleGame = async (username: string) => {
  const id = generateId();
  const playerId = generateId();

  await fetch(`${PARTYKIT_URL}/party/${id}`, {
    method: "POST",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  redirect(`/wordle/${id}?playerId=${playerId}&username=${username}`);
};
