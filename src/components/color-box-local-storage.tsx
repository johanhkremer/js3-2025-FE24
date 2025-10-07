import { usePersitedState } from "@/hooks/usePersitedState";
import { getItem } from "@/utils/localStorage";
import { useEffect, useState } from "react";

const COLORS = ["red", "green", "blue", "purple"];

export default function ColorBoxLocalStorage() {
    const [color, setColor] = usePersitedState("color", "red")
    const [stored, setStored] = useState<string | null>(null)

    useEffect(() => {
        setStored(getItem("color"))
    }, [color])

    return (
        <div className="p-4 space-y-3">
            <h2>useSearchParams</h2>
            {/* Färgruta */}
            <div
                className="w-40 h-40 rounded-lg border"
                style={{ backgroundColor: color ?? undefined }}
                aria-label={`Färgruta: ${color}`}
            />

            {/* Knappar */}
            <div className="flex gap-2">
                {COLORS.map((color) => (
                    <button
                        key={color}
                        onClick={() => setColor(color)}
                        aria-pressed={color === color}
                        className={`px-3 py-1 rounded border ${color === color ? "opacity-70" : ""
                            }`}
                        title={`Byt till ${color}`}
                    >
                        {color}
                    </button>
                ))}
            </div>

            {/* Visa aktuell färg och färg sparad i local storage) */}
            <p>Aktuell färg: <strong>{color}</strong></p>
            <p className="text-xs text-gray-500">local Storage: {stored}</p>
        </div>
    );
}
