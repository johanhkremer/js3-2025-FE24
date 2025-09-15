import { useUserCardContext } from "../hooks/useUserCardContext"
import styles from "./userCard.module.css"

const UserCardAvatar = () => {
    const user = useUserCardContext()

    const userImg = user.avatarUrl

    return (
        userImg
            ? <img className={styles.avatar} src={userImg} />
            : <div className={styles.avatar}></div>
    )
}

export default UserCardAvatar