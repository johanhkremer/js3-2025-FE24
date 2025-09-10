import { useEffect, useState } from "react"

const SideEffectCounter = () => {
    const [counter, setCounter] = useState<number>(0)

    const handelIncrease = () => {
        setCounter((prev) => prev + 1)
        console.log("Counter increase", counter)
    }

    const handelDecrease = () => {
        setCounter((prev) => prev - 1)
        console.log("Counter decrease", counter)
    }

    useEffect(() => {
        document.title = `Count: ${counter}`
        console.log(`useEffect Count: ${counter}`)
    }, [counter])

    return (
        <section>
            <h3>SideEffectCounter</h3>
            <p>{counter}</p>
            <button onClick={handelIncrease}>Increase</button>
            <button onClick={handelDecrease}>Decrease</button>
        </section>
    )
}

export default SideEffectCounter