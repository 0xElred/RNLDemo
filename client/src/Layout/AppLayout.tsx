
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../context/SidebarContext";
import { HeaderProvider } from "../context/HeaderContext";
const LayoutContent = () => {
    return (
        <>
            <div>
                <AppSidebar />
            </div>
            <div>
                <AppHeader />
            </div>
            <div className="pt-20 pl-0 sm:pl-64 min-h-screen">
                <div className="px-4 pb-6 pt-2 sm:px-6 sm:pb-8 sm:pt-4">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <>
            <HeaderProvider>
                <SidebarProvider>
                    <LayoutContent />
                </SidebarProvider>

            </HeaderProvider>

        </>
    )
}

export default AppLayout;