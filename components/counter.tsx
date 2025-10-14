"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"

const Counter = () => {
    // useState går inte att använda om vi inte är clientside
    const [count, setCount] = useState<number>(0)

    // useEffect går inte att använda om vi inte är clientside
    useEffect(() => {
        console.log(count)

    }, [count])

    // onClick med function går inte att använda om vi inte är clientside
    return (
        <div className="flex flex-col gap-3">
            <h3>Counter</h3>
            <div className="flex gap-3">
                <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
                <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            </div>
            <p>{count}</p>
        </div>


    )
}

export default Counter
