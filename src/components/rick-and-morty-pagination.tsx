import { useSearchParams } from "react-router"; // viktigt: dom-varianten
import LoadSpinner from "./loadspinner";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    origin: { name: string };
    location: { name: string };
};

type ApiResponse = {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null
    };
    results: Character[];
};

// Kollar att datan inte är undefined
const EMPTY: ApiResponse = {
    info: {
        count: 0,
        pages: 1,
        next: null,
        prev: null
    },
    results: [],
};

async function fetchCharacters(page: number): Promise<ApiResponse> {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    if (!res.ok) throw new Error("Kunde inte hämta karaktärer.");
    return res.json();
}

export default function RickAndMortyPagination() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Math.max(1, Number(searchParams.get("page") || "1")); // läs sida från URL

    const { data: characters = EMPTY, isLoading, isError, error, isFetching } = useQuery<ApiResponse>({
        queryKey: ["rm-characters", page],
        queryFn: () => fetchCharacters(page),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
    });

    const totalPages = characters.info.pages;

    return (
        <div className="mx-auto max-w-5xl p-4">
            {isLoading && <LoadSpinner size="lg" />}
            {isError && <p className="p-4 text-sm text-red-600">{(error as Error).message}</p>}

            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                    Rick and Morty - Characters{" "}
                    <span className="text-gray-500">(page {page} / {totalPages})</span>
                </h2>
                {isFetching && <span className="text-xs text-gray-500">Uppdaterar…</span>}
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {characters.results.map((ch) => (
                    <li key={ch.id} className="flex items-center gap-3 rounded-xl border p-3">
                        <img src={ch.image} alt={ch.name} className="h-16 w-16 flex-none rounded-lg object-cover" loading="lazy" />
                        <div className="min-w-0">
                            <div className="truncate font-medium">{ch.name}</div>
                            <div className="text-xs text-gray-600">{ch.status} • {ch.species}</div>
                            <div className="text-xs text-gray-500">Origin: {ch.origin.name} • Location: {ch.location.name}</div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Paginering */}
            <div className="mt-6 flex items-center justify-center gap-2">
                <button
                    className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                    onClick={() => setSearchParams({ page: String(page - 1) })}
                    disabled={!characters.info.prev || page <= 1}
                    aria-label="Föregående sida"
                >
                    ← Föregående
                </button>
                <span className="text-sm text-gray-700">Sida {page} / {totalPages}</span>
                <button
                    className="rounded border px-3 py-1 text-sm disabled:opacity-50"
                    onClick={() => setSearchParams({ page: String(page + 1) })}
                    disabled={!characters.info.next || page >= totalPages}
                    aria-label="Nästa sida"
                >
                    Nästa →
                </button>
            </div>
        </div>
    );
}
