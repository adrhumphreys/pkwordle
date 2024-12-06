"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { joinRoom } from "@/lib/join-room";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  roomId: z.string(),
});

export function JoinRoomForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      roomId: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    joinRoom(values.roomId, values.username);
  }

  return (
    <div className="rounded-md border py-4 px-8">
      <h2 className="text-lg font-bold">Join an existing room</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Mr Kenough" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roomId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>The ID of the room</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Join room</Button>
        </form>
      </Form>
    </div>
  );
}
