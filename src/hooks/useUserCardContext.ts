import { useContext } from "react";
import { UserCardContext } from "../context/useContext";

export function useUserCardContext() {
    const user = useContext(UserCardContext)

    if (user === undefined) {
        throw new Error("User is undefined, try again!")
    }

    return user
}