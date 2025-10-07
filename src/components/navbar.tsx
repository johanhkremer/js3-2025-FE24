import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"
import { ModeToggle } from "./mode-toggle"

export const Navbar = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                {/* Item 1 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/">Homepage</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Item 2 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/form">Form</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Item 3 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/pagination">Pagination</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Item 4 */}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link to="/localstorage">Local Storage</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                {/* Item 5 */}
                <NavigationMenuItem>
                    <ModeToggle />
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
