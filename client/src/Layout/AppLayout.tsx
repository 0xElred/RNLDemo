
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
            <div className="p-20 -mml-14 sm:ml-52">
                <Outlet />
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