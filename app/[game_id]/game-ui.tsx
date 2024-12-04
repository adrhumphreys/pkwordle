import { useWordle } from "@/lib/use-wordle";
import { GameState } from "../types";

export function GameUI({ initialState }: { initialState: GameState }) {
  const { currentState } = useWordle({ userId: "", initialState });
  return (
    <div>
      <p>hey wordlers</p>
      <pre>{JSON.stringify(currentState, null, 2)}</pre>
    </div>
  );
}
