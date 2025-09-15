import { useUserCardContext } from "../hooks/useUserCardContext"
import styles from "./userCard.module.css"

const UserCardFooter = () => {
    const user = useUserCardContext()
    const isOnline = user.isOnline

    return (
        <footer className={`${styles.footer} ${isOnline ? styles.footerOnline : styles.footerOffline}`}
        > {isOnline ? "🟢 Online" : "🔴 Offline"}</footer>
    )
}

export default UserCardFooter