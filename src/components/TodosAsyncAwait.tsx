import axios from "axios"
import { useEffect, useState } from "react"
import type { JsonDataTodo } from "../types/todo.typs"
import LoadSpinner from "./LoadSpinner"

const TodosAsyncAwait = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [todos, setTodos] = useState<JsonDataTodo[]>([])

    useEffect(() => {

        const fetchTodos = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get<JsonDataTodo[]>(
                    'https://jsonplaceholder.typicode.com/todos'
                )
                setTimeout(() => {
                    setTodos(response.data)
                    setIsSuccess(true)
                    setIsLoading(false)
                }, 1500)

            } catch (error: unknown) {
                setIsError(true)
                setIsLoading(false)

                if (axios.isAxiosError(error)) {
                    setError(error.message)
                } else {
                    setError("Unknow error occurred")
                }

            }
        }

        fetchTodos()
    }, [])


    return (
        <>
            <div>TodosAsyncAwait</div>
            {isLoading && <LoadSpinner />}
            {isError && <p>Something went wrong: {error}</p>}
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

export default TodosAsyncAwait