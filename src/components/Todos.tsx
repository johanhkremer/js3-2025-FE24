import { useEffect, useState } from "react"

interface JsonDataTodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Todos = () => {
    const [todos, setTodos] = useState<JsonDataTodo[] | undefined>(undefined)
    const [refetch, setRefetch] = useState<boolean>(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json: JsonDataTodo[]) => {
                console.log(json)
                setTodos(json)
            })
    }, [refetch])

    const handelRefetch = () => {
        setRefetch(!refetch)
    }

    return (
        <>
            <div>Todos</div>
            <button onClick={handelRefetch}>Refetch data</button>
            <ul>
                {todos && todos.map((todo) => (
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
        </>
    )
}

export default Todos