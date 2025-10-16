import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import AvatarAuth from "./avatar-auth"

const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* 1 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* 2 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/clientserver">Client/Server</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* 3 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/fetch">Fetch</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* 4 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/todos">Todos</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <AvatarAuth />
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar
