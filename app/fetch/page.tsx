import UserCard from "@/components/user-card"

export interface User {
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
                    <div key={user.id}>
                        <UserCard user={user} />
                    </div>

                ))
                }

            </section>
        </>
    )
}

export default FetchPage
