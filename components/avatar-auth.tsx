import { auth } from "@/auth"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const AvatarAuth = async () => {
    const session = await auth()

    return (
        <div>
            <Avatar>
                {session?.user?.image && session.user.name && <AvatarImage src={session.user.image} alt={session.user.name} />}
                <AvatarFallback>❌</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default AvatarAuth