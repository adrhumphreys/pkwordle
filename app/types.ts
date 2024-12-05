export type GuessCharacter = {
  /** The individual character */
  value: string;
  /** The status of the guess */
  status: "absent" | "present" | "correct";
};

export type PlayerState = {
  id: string;
  username: string;
  guesses: GuessCharacter[][];
  completedAt?: number;
  /** The players score */
  score: number;
};

export type GameState = {
  id: string;
  word: string;
  canGuess: boolean;
  players: PlayerState[];
};
