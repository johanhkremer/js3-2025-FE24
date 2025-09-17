import { useFetchTodos } from "../hooks/useFetchTodos"
import LoadSpinner from "./LoadSpinner"

const TodosFetchHook = () => {
    const { todos, isLoading, isError, error } = useFetchTodos()

    return (
        <>
            <h2>Todos fetch hook</h2>
            {isLoading && <LoadSpinner />}
            {isError && <p>Something went wrong: {error}</p>}
            {todos && (
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

export default TodosFetchHook