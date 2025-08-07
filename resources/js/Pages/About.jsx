import GuestLayout from "@/Layouts/GuestLayout.jsx";
import GuestNavigationBar from "@/Components/NavigationBar/GuestNavigationBar.jsx";

export default function About() {
    return (
        <div className="flex min-h-screen flex-col">
            <GuestNavigationBar />

            <section className="flex flex-1 flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Welcome to ClearPath!
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md text-center">
                    This is a support ticketing system tailored for companies that want to manage customer support through a dedicated email address and centralized platform.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md text-center">
                    Once registered, your organization will receive access to a customizable support portal where you
                    can track incoming requests, assign tickets to team members, and respond to clients with ease. The
                    system is designed to streamline communication, improve response time, and keep your support process
                    organized.
                </p>

                <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md text-center">
                    Whether you're a small business or a growing team, this tool helps you maintain professional and
                    responsive support with minimal setup and maintenance.
                </p>
            </section>

        </div>
    );
}
