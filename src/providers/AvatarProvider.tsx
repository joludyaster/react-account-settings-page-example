import { useState } from "react";
import { AvatarContext } from "@src/context/AvatarContext";

export const AvatarProvider = ({ children }: { children: React.ReactNode }) => {
    const [avatarUrl, setAvatarUrl] = useState<string>("");

    return (
        <AvatarContext.Provider value={{ avatarUrl, setAvatarUrl }}>
            {children}
        </AvatarContext.Provider>
    );
};
