import styles from "./userCard.module.css"
import { useUserCardContext } from "../hooks/useUserCardContext"

const UserCardBody = () => {
    const user = useUserCardContext()

    return (
        <div className={styles.body}>
            <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Email</span>
                <span className={styles.infoValue}>{user.email}</span>
            </div>
            <div className={styles.infoRow}>
                <span className={styles.infoLabel}>ID</span>
                <span className={styles.infoValue}>{user.id}</span>
            </div>
        </div>
    )
}

export default UserCardBody