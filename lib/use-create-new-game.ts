"use server";

import { redirect } from "next/navigation";
import { PARTYKIT_URL } from "./env";

const randomId = () => Math.random().toString(36).substring(2, 10);

export const createNewGame = async (username: string) => {
  const id = randomId();

  await fetch(`${PARTYKIT_URL}/party/${id}`, {
    method: "POST",
    body: JSON.stringify({ id, username }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  redirect(`/${id}`);
};
