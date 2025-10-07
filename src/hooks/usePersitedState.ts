import { getItem, setItem } from "@/utils/localStorage";
import { useEffect, useState } from "react"

export const usePersitedState = <T>(key: string, intialValue: T) => {
    const [value, setValue] = useState(() => {
        const item = getItem(key);

        return (item as T) || intialValue
    })

    useEffect(() => {
        setItem(key, value)
    }, [key, value])

    return [value, setValue] as const;
}