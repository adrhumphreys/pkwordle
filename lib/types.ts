export type WordleGuessCharacter = {
  /** The individual character */
  value: string;
  /** The status of the guess */
  status: "absent" | "present" | "correct";
};

export type WordlePlayerState = {
  id: string;
  username: string;
  guesses: WordleGuessCharacter[][];
  completedAt?: number;
  score: number;
};

export type WordleGameState = {
  id: string;
  word: string;
  canGuess: boolean;
  players: WordlePlayerState[];
  startedAt?: number;
};

export type ConnectionsPlayerState = {
  id: string;
  username: string;
  guesses: string[][];
  completedAt?: number;
  score: number;
};

export type ConnectionsGameState = {
  id: string;
  canGuess: boolean;
  startedAt?: number;
  players: ConnectionsPlayerState[];
};
