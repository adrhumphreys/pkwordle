import { notFound } from "next/navigation";
import { PARTYKIT_URL } from "@/lib/env";
import { GameState } from "../types";
import { GameUI } from "./game-ui";

export default async function GamePage({
  params,
}: {
  params: { game_id: string };
}) {
  await params;
  const { game_id } = await params;

  const req = await fetch(`${PARTYKIT_URL}/party/${game_id}`, {
    method: "GET",
  });

  if (!req.ok) {
    if (req.status === 404) {
      notFound();
    } else {
      throw new Error("Something went wrong.");
    }
  }

  const initialState = (await req.json()) as GameState;

  return (
    <div className="flex flex-col space-y-4 p-8">
      <h1 className="text-2xl font-bold">Room: {initialState.id}</h1>
      <GameUI initialState={initialState} />
    </div>
  );
}
