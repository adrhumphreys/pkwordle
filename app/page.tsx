"use client";

import { CreateRoomForm } from "@/components/create-room-form";
import { JoinRoomForm } from "@/components/join-room-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 p-8">
      <div className="">
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome to Wordle with friends!
        </h2>
        <p className="text-muted-foreground">Totally Adrians own idea</p>
      </div>
      <div className="flex items-center space-x-2"></div>

      <div className="flex space-x-8">
        <CreateRoomForm />
        <JoinRoomForm />
      </div>
    </main>
  );
}
