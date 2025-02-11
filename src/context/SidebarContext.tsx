import { createContext } from "react";

// Define the context type
interface SidebarContextType {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

// Create context with an initial undefined state
export const SidebarContext = createContext<SidebarContextType | undefined>(
    undefined
);
