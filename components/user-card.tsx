"use client"

import { User } from "@/app/fetch/page"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardTitle } from "./ui/card"
import { useState } from "react"
import { Button } from "./ui/button"

type UserCardProp = {
    user: User
}

const UserCard = ({ user }: UserCardProp) => {
    const [showEmail, setShowEmail] = useState<boolean>(false)
    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <CardTitle>
                    {user.name}
                </CardTitle>
                <CardDescription className="min-h-5">
                    {showEmail && <p>{user.email}</p>}
                </CardDescription>
                <CardFooter>
                    <CardAction>
                        <Button onClick={() => setShowEmail(!showEmail)}>Show Email</Button>
                    </CardAction>
                </CardFooter>
            </CardContent>
        </Card>
    )
}

export default UserCard