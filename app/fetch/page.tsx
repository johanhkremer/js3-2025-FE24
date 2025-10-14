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
        <>
            <h1>FetchPage</h1>
            <section className="flex flex-col gap-3">
                {users && users.map((user) => (
                    <div key={user.id} className="border rounded-md p-3 max-w-64">
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default FetchPage
