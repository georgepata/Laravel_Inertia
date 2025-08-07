export default function NavigationBar({children}) {
    return (
        <nav className="flex justify-end p-4 bg-white shadow">
            <div>
                {children}
            </div>
        </nav>
    );
}
