import { expect, describe, it, afterEach, vi } from "vitest";
import { screen } from "@testing-library/react";
import { JoinRoomForm } from "../join-room-form";
import { setup } from "@/tests/render";

const mocks = vi.hoisted(() => {
  return {
    joinRoom: vi.fn(),
  };
});

vi.mock("@/lib/join-room", () => ({
  joinRoom: mocks.joinRoom,
}));

describe("JoinRoomForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should support entering the form", async () => {
    const { user } = setup(<JoinRoomForm />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Join an existing room" })
    ).toBeDefined();

    // Tab to first input
    await user.tab();
    expect(screen.getByRole("textbox", { name: "Username" })).toBeDefined();
    await user.keyboard("Biome");

    await user.tab();
    expect(screen.getByRole("textbox", { name: "Room ID" })).toBeDefined();
    await user.keyboard("room_id");

    await user.keyboard("{Enter}");

    expect(mocks.joinRoom).toHaveBeenLastCalledWith("room_id", "Biome");
  });
});
