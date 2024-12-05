"use server";

import { redirect } from "next/navigation";
import { generateId } from "@/lib/id";

// The page itself handles joining the session
export async function joinRoom(roomId: string, username: string) {
  redirect(`/${roomId}?playerId=${generateId()}&username=${username}`);
}
