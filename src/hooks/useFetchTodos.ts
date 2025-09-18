import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import type { JsonDataTodo } from "../types/todos.types";

interface UseFetchTodosResult {
    todos: JsonDataTodo[] | null;
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}

export const useFetchTodos = (): UseFetchTodosResult => {
    const [todos, setTodos] = useState<JsonDataTodo[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTodos = useCallback(async () => {
        setIsLoading(true);
        setIsError(false);
        setError(null);

        try {
            const response = await axios.get<JsonDataTodo[]>(
                "https://jsonplaceholder.typicode.com/todos/"
            );

            setTimeout(() => {
                setTodos(response.data);
                setIsLoading(false);
            }, 1500);
        } catch (err: unknown) {
            setIsLoading(false);
            setIsError(true);

            if (axios.isAxiosError(err)) {
                setError(err.message);
            } else {
                setError("Unknown error occurred");
            }
        }
    }, []);

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return { todos, isLoading, isError, error };
};
