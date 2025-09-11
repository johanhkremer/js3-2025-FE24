import type { User } from "../pages/Home"
import styles from "./userCard.module.css"
import UserCardAvatar from "./UserCardAvatar"

type UserCardHeaderProp = {
    user: User
}

const UserCardHeader = ({ user }: UserCardHeaderProp) => {
    return (
        <header className={styles.header}>
            <UserCardAvatar user={user} />
            <div>
                <h2 className={styles.name}>{user.name}</h2>
                <p className={styles.role}>{user.role}</p>
            </div>
        </header>
    )
}

export default UserCardHeader