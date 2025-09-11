import type { User } from "../pages/Home"
import styles from "./userCard.module.css"

type UserCardAvatarProps = {
    user: User
}

const UserCardAvatar = ({ user }: UserCardAvatarProps) => {
    const userImg = user.avatarUrl

    return (
        userImg
            ? <img className={styles.avatar} src={userImg} />
            : <div className={styles.avatar}></div>
    )
}

export default UserCardAvatar