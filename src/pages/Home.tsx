import { useState } from "react";
import UserCard from "../components/UserCard";
import styles from "./home.module.css"
import type { User } from "../types/user";
import { UserCardContext } from "../context/useContext";

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
            <UserCardContext.Provider value={user}>
                <UserCard />
            </UserCardContext.Provider>
            <button onClick={handleOnlineStatus}>
                {user.isOnline ? "Set Offline" : "Set Online"}
            </button>
        </main>
    );
}

export default Home