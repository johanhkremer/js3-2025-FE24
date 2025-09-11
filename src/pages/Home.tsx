import { useState } from "react";
import UserCard from "../components/UserCard";
import styles from "./home.module.css"

export interface User {
    id: string,
    name: string,
    email: string,
    role: string,
    avatarUrl: string,
    isOnline: boolean
}

const intialUser: User = {
    id: "u1",
    name: "Ada Lovelace",
    email: "ada@example.com",
    role: "Admin",
    avatarUrl: "/ada_lovelace.avif",
    isOnline: true
};

const Home = () => {
    const [user, setUser] = useState<User>(intialUser)

    const handleOnlineStatus = () => {
        setUser((prevUser) => ({
            ...prevUser,
            isOnline: !prevUser.isOnline,
        }))
    }

    return (
        <main className={styles.container}>
            <UserCard user={user} />
            <button onClick={handleOnlineStatus}>
                {user.isOnline ? "Set Offline" : "Set Online"}
            </button>
        </main>
    );
}

export default Home