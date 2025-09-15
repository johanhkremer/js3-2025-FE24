import { useEffect } from "react"

// interface JsonDataTodo {
//     userId: number,
//     id: number,
//     title: string,
//     completed: boolean
// }

const Todos = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])

    return (
        <div>Todos</div>
    )
}

export default Todos