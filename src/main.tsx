import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "@src/styles/main.scss";
import { SidebarProvider } from "./providers/SidebarProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <SidebarProvider>
            <App />
        </SidebarProvider>
    </StrictMode>
);
