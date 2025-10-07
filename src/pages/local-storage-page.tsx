import ColorBoxLocalStorage from "@/components/color-box-local-storage"
import ColorBoxParams from "@/components/color-box-params"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getItem, setItem } from "@/utils/localStorage"
import { useEffect, useState } from "react"

const LocalStoragePage = () => {
    const [count, setCount] = useState<number>(() => {
        const item = getItem("count")
        return (item as number) || 0
    })

    useEffect(() => {
        setItem("count", count)
    }, [count])

    return (
        <>
            <h1>Local Storage Page</h1>
            <section className="inline-flex flex-col gap-3">
                <Card className="flex items-center p-3">
                    <p className="text-2xl">{count}</p>
                    <div className="flex gap-3">
                        <Button onClick={() => setCount(prev => prev - 1)}>-</Button>
                        <Button onClick={() => setCount(prev => prev + 1)}>+</Button>
                    </div>
                </Card>
                <Card>
                    <ColorBoxParams />
                </Card>
                <Card>
                    <ColorBoxLocalStorage />
                </Card>
            </section>
        </>
    )
}

export default LocalStoragePage