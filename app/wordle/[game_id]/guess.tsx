import { WordleGuessCharacter } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Guess({
  guess,
  isHidden,
}: {
  guess: WordleGuessCharacter[];
  isHidden: boolean;
}) {
  return (
    <div className="flex gap-2">
      {guess.map((char, idx) => (
        <div
          key={`${char}-${idx}`}
          className={cn(
            "uppercase font-bold grid place-items-center w-8 h-10 text-gray-900",
            char.status === "absent" && "bg-gray-300",
            char.status === "correct" && "bg-green-200",
            char.status === "present" && "bg-orange-200"
          )}
        >
          {isHidden ? "" : char.value}
        </div>
      ))}
    </div>
  );
}
