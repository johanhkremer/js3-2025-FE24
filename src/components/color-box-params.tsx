import { useSearchParams, useLocation } from "react-router";

const COLORS = ["red", "green", "blue", "purple"];
const DEFAULT_COLOR = "red";

export default function ColorBoxParams() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { pathname, search } = useLocation();

    const urlColor = searchParams.get("color");
    const color = COLORS.includes(urlColor || "") ? urlColor : DEFAULT_COLOR;

    const setColor = (nextColor: string) => {
        const next = new URLSearchParams(searchParams); // behåll övriga query-params
        next.set("color", nextColor);
        setSearchParams(next); // lägg ev. { replace: true } om du inte vill fylla historiken
    };

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
                {COLORS.map((c) => (
                    <button
                        key={c}
                        onClick={() => setColor(c)}
                        aria-pressed={c === color}
                        className={`px-3 py-1 rounded border ${c === color ? "opacity-70" : ""
                            }`}
                        title={`Byt till ${c}`}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {/* Visning (valfritt, bra för debug) */}
            <p>Aktuell färg: <strong>{color}</strong></p>
            <p className="text-xs text-gray-500">URL: {pathname}{search}</p>
        </div>
    );
}
