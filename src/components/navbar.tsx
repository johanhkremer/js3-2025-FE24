import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Item 1 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">Homepage</Link>
                    </NavigationMenuLink>
                </ NavigationMenuItem>
                {/* Item 2 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/form">Form Page</Link>
                    </NavigationMenuLink>
                </ NavigationMenuItem>
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default Navbar