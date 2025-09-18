import { useQuery } from "@tanstack/react-query"
import type { JsonDataTodo } from "../types/todos.types"

const useTanStackTodos = () => {
    const {
        data: todos,
        isPending,
        isError,
        error,
        isSuccess
    } = useQuery<JsonDataTodo[]>({
        queryKey: ["todos"],
        queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
    })

    return { todos, isPending, isError, error, isSuccess }
}

export default useTanStackTodos