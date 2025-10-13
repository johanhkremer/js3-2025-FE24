
interface User {
    id: number,
    name: string,
    email: string,
}

const FetchPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users: User[] = await res.json()

    console.log(users)

    return (
        <div>FetchPage</div>
    )
}

export default FetchPage
