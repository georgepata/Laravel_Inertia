import NavigationBar from "@/Components/NavigationBar/NavigationBar.jsx";
import {Link} from "@inertiajs/react";

export default function GuestNavigationBar() {
    return (
        <NavigationBar>
            <Link href="/login" className="mr-4">Log in</Link>
            <Link href="/about" className="mr-4">About</Link>
        </NavigationBar>
    );
}
