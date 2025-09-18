import useTanStackTodos from "../hooks/useTanStackTodos"
import LoadSpinner from "./LoadSpinner"

const TodosTanStackHook = () => {
    const { todos, isPending, isError, isSuccess } = useTanStackTodos()

    return (
        <>
            <h2>TodosAsyncAwait</h2>
            {isPending && <LoadSpinner />}
            {isError && <p>Something went wrong</p>}
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

export default TodosTanStackHook