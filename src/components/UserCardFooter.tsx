import type { User } from "../pages/Home"
import styles from "./userCard.module.css"

type UserCardFooterProp = {
    user: User
}

const UserCardFooter = ({ user }: UserCardFooterProp) => {
    const isOnline = user.isOnline

    return (
        <footer className={`${styles.footer} ${isOnline ? styles.footerOnline : styles.footerOffline}`}
        > {isOnline ? "🟢 Online" : "🔴 Offline"}</footer>
    )
}

export default UserCardFooter