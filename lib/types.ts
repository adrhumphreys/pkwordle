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
  isHardMode?: boolean;
};

export type ImportedConnectionGame = {
  id: string;
  name: string;
  createdAt: string;
  board: Record<
    string,
    {
      level: 0 | 1 | 2 | 3;
      members: string[];
    }
  >;
  startingBoard: string[][];
};

export type ConnectionGame = {
  id: string;
  name: string;
  createdAt: string;
  board: Record<
    string,
    {
      level: 0 | 1 | 2 | 3;
      members: string[];
    }
  >;
  startingBoard: string[];
};

export type ConnectionsPlayerState = {
  id: string;
  username: string;
  guesses: string[][];
  completedAt?: number;
  score: number;
  remainingLives: number;
};

export type ConnectionsGameState = {
  id: string;
  canGuess: boolean;
  startedAt?: number;
  game: ConnectionGame;
  players: ConnectionsPlayerState[];
};
