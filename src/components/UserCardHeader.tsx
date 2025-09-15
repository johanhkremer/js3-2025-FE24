import { useUserCardContext } from "../hooks/useUserCardContext"
import styles from "./userCard.module.css"
import UserCardAvatar from "./UserCardAvatar"

const UserCardHeader = () => {
    const user = useUserCardContext()

    return (
        <header className={styles.header}>
            <UserCardAvatar />
            <div>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.role}>{user.role}</p>
            </div>
        </header>
    )
}

export default UserCardHeader