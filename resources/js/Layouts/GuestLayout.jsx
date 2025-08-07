import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import GuestNavigationBar from "@/Components/NavigationBar/GuestNavigationBar.jsx";

export default function GuestLayout({ children }) {
    return (
        <div className="flex flex-col justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <GuestNavigationBar />

            <div className="flex flex-1 flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="h-28 w-28"/>
                    </Link>
                </div>

                <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
