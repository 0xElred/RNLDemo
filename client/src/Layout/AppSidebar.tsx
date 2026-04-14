import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

const AppSidebar = () => {
    const { isOpen, toggleSidebar } = useSidebar();

    const sidebarItems = [
        {
            path: '#',
            text: 'Gender Lisr',
        },
        {
            path: '#',
            text: 'User List',
        },
    ];

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-30 bg-black/20 sm:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <aside
                id="top-bar-sidebar"
                className={`fixed top-0 left-0 z-40 h-full w-64 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800 border-e border-gray-700 text-gray-100">
                    <a href="https://flowbite.com/" className="flex items-center ps-2.5 mb-5">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 me-3" alt="Flowbite Logo" />
                        <span className="self-center text-lg text-white font-semibold whitespace-nowrap">Flowbite</span>
                    </a>
                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((sidebarItem) => (
                            <li>
                                <Link
                                    to={sidebarItem.path}
                                    className="flex items-center px-2 py-1.5 text-gray-200 rounded-base hover:bg-gray-700 hover:text-white group">
                                    <span className="ms-3">{sidebarItem.text}</span>
                                </Link>
                            </li>

                        ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default AppSidebar;