export type PlayerState = {
  id: string;
  username: string;
  guesses: {
    /** The individual character */
    value: string;
    /** The status of the guess */
    status: "absent" | "present" | "correct";
  }[][];
  completedAt?: number;
};

export type GameState = {
  id: string;
  word: string;
  players: PlayerState[];
};
