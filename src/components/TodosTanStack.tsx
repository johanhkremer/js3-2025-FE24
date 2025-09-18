import { useQuery } from "@tanstack/react-query"
import type { JsonDataTodo } from "../types/todos.types"
import LoadSpinner from "./LoadSpinner"

const TodosTanStack = () => {
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

    return (
        <>
            <h2>TodosAsyncAwait</h2>
            {isPending && <LoadSpinner />}
            {isError && <p>Something went wrong: {error.message}</p>}
            {isSuccess && todos && (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <h2 >{todo.title}</h2>
                            {todo.completed
                                ? <p>Todo Completed!</p>
                                : <p>Todo not completed!</p>
                            }
                        </li>
                    ))
                    }
                </ul>
            )}
        </>
    )
}

export default TodosTanStack