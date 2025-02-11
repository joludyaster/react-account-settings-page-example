import { createContext } from "react";

interface AvatarContextType {
    avatarUrl: string;
    setAvatarUrl: (url: string) => void;
}

export const AvatarContext = createContext<AvatarContextType | undefined>(
    undefined
);
