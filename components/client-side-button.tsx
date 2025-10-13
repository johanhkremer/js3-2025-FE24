"use client"
import { Button } from "./ui/button"

const ClientSideButton = () => {

    const handelClick = () => {
        console.log("I'm a client component! 🔥")
    }

    return (
        <Button onClick={() => handelClick()}>Test</Button>
    )
}

export default ClientSideButton