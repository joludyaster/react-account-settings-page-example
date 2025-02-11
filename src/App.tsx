import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "@pages/account/Account";
import Dashboard from "@pages/Dashboard";
import Home from "@pages/Home";
import Projects from "@pages/Projects";
import Tasks from "@pages/Tasks";
import Reporting from "@pages/Reporting";
import { AvatarProvider } from "@src/providers/AvatarProvider";
import { useRef, useEffect } from "react";
import { useSidebar } from "@src/hooks/useSidebar";

function App() {
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
        <BrowserRouter
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}>
            <AvatarProvider>
                <Routes>
                    <Route path="/account/*" element={<Account />} />
                    <Route
                        path="/dashboard"
                        element={<Dashboard ref={wrapperRef} />}
                    />
                    <Route path="/home" element={<Home ref={wrapperRef} />} />
                    <Route
                        path="/projects"
                        element={<Projects ref={wrapperRef} />}
                    />
                    <Route path="/tasks" element={<Tasks ref={wrapperRef} />} />
                    <Route
                        path="/reporting"
                        element={<Reporting ref={wrapperRef} />}
                    />
                </Routes>
            </AvatarProvider>
        </BrowserRouter>
    );
}

export default App;
