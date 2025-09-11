import type { User } from "../pages/Home"
import styles from "./userCard.module.css"
import UserCardBody from "./UserCardBody"
import UserCardFooter from "./UserCardFooter"
import UserCardHeader from "./UserCardHeader"

type UserCardProp = {
    user: User
}

const UserCard = ({ user }: UserCardProp) => {
    return (
        <div className={styles.card}>
            <UserCardHeader user={user} />
            <UserCardBody user={user} />
            <UserCardFooter user={user} />
        </div>
    )
}

export default UserCard