import Sidebar from "@components/account/Sidebar";
import NavigationBar from "@components/account/NavigationBar";
import AccountSettings from "@src/layouts/account/AccountSettings";
import AccountNotificationSettings from "@src/layouts/account/AccountNotificationSettings";
import { Route, Routes } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSidebar } from "@src/hooks/useSidebar";

function Account() {
    const { sidebarOpen, setSidebarOpen } = useSidebar();
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            try {
                if (
                    wrapperRef.current &&
                    !wrapperRef.current.contains(e.target as Node)
                ) {
                    setSidebarOpen(false);
                } else {
                    return false;
                }
            } catch {
                return false;
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, [setSidebarOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200 && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [sidebarOpen, setSidebarOpen]); // Add `sidebarOpen` as a dependency

    useEffect(() => {
        const backdrop = document.querySelector(".backdrop"); // Use `querySelector` for safety

        if (sidebarOpen) {
            document.body.classList.add("no-scroll");
            backdrop?.classList.add("open"); // Optional chaining to avoid errors
        } else {
            document.body.classList.remove("no-scroll");
            backdrop?.classList.remove("open");
        }

        return () => {
            backdrop?.classList.remove("open");
            document.body.classList.remove("no-scroll"); // Ensure backdrop is removed
        };
    }, [sidebarOpen]);

    return (
        <>
            <NavigationBar ref={wrapperRef} />
            <div className="account__main">
                <div className="account__container container">
                    <Sidebar />
                    <main className="account__content">
                        <Routes>
                            <Route index element={<AccountSettings />} />
                            <Route
                                path="settings"
                                element={<AccountSettings />}
                            />
                            <Route
                                path="notifications"
                                element={<AccountNotificationSettings />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
}

export default Account;
