import { Spinner } from "@/components/ui/spinner"
import UserCard from "@/components/user-card"
import { Suspense } from "react"

export interface User {
    id: number,
    name: string,
    email: string,
}

const FetchPage = async () => {
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    await sleep(4000);

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
