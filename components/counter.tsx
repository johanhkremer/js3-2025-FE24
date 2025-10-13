"use client"
import { useState } from "react"
import { Button } from "./ui/button"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    return (
        <>
            <div>
                <Button onClick={() => setCounter((prev) => prev - 1)}>-</Button>
                <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
            </div >
            <p>{counter}</p>
        </>
    )
}
