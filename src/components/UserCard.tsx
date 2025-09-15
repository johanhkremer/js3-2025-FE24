import styles from "./userCard.module.css"
import UserCardBody from "./UserCardBody"
import UserCardFooter from "./UserCardFooter"
import UserCardHeader from "./UserCardHeader"


const UserCard = () => {
    return (
        <div className={styles.card}>
            <UserCardHeader />
            <UserCardBody />
            <UserCardFooter />
        </div>
    )
}

export default UserCard