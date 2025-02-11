import { useState } from "react";

// Define the type of password field state
type PasswordField = {
    type: "password" | "text";
    visibility: boolean;
};

export const usePasswordToggler = () => {
    // State to track multiple password fields
    const [passwordFields, setPasswordFields] = useState<Record<string, PasswordField>>({});

    const togglePasswordVisibility = (fieldName: string) => {
        setPasswordFields((prevState) => {
            const currentField = prevState[fieldName] || { type: "password", visibility: false };

            return {
                ...prevState,
                [fieldName]: {
                    type: currentField.type === "password" ? "text" : "password",
                    visibility: !currentField.visibility,
                },
            };
        });
    };

    return {
        passwordFields,
        togglePasswordVisibility,
    };
};
