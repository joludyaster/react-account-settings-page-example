import React, { useState, useRef, useCallback } from "react";
import { useAvatar } from "@src/hooks/useAvatar"; // Assuming you have a custom hook for managing avatar
import person from "@src/assets/1.jpg"; // Default image
import svg_icons from "@icons/icons.svg";

// Avatar Component
const AvatarSection = ({
    avatarUrl,
    setAvatarUrl,
}: {
    avatarUrl: string;
    setAvatarUrl: (url: string) => void;
}) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = useCallback(() => {
        inputRef.current?.click();
    }, []);

    const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files.length === 0) {
            setAvatarUrl(""); // Reset avatar if no file is selected
            return;
        }
        const file = e.target.files[0];
        setAvatarUrl(URL.createObjectURL(file)); // Directly update avatar
    };

    const handleRemoveImage = () => {
        setAvatarUrl(""); // Reset avatar to default
        if (inputRef.current) inputRef.current.value = ""; // Clear file input
    };

    return (
        <div className="account-settings__avatar">
            <div className="account-settings__avatar--wrapper">
                <img
                    className="account-settings__image"
                    src={avatarUrl || person}
                    alt="Profile"
                    loading="lazy"
                />
                <div className="account-settings__avatar--info">
                    <h3 className="account-settings__avatar--title">
                        Profile picture
                    </h3>
                    <p className="account-settings__avatar--subtitle">
                        PNG, JPEG, GIF or WebP. Max 5MB
                    </p>
                </div>
            </div>
            <div className="account-settings__avatar--buttons">
                <button
                    className="account-settings__avatar--button"
                    onClick={handleImageClick}>
                    Upload
                </button>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={onSelectFile}
                    accept="image/png, image/jpeg, image/gif, image/webp"
                    style={{ display: "none" }}
                />
                <button
                    className="account-settings__avatar--button account-settings__avatar--button-remove"
                    onClick={handleRemoveImage}>
                    Remove
                </button>
            </div>
        </div>
    );
};

// Full Name Component
const FullNameSection = ({
    firstName,
    lastName,
    setFirstName,
    setLastName,
}: {
    firstName: string;
    lastName: string;
    setFirstName: React.Dispatch<React.SetStateAction<string>>;
    setLastName: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="account-settings__full-name">
            <div className="account-settings__full-name--header">
                <h3 className="account-settings__full-name--title">
                    Full name
                </h3>
            </div>
            <div className="account-settings__full-name--inputs">
                <div className="account-settings__full-name--input-wrapper account__input-wrapper">
                    <label
                        htmlFor="first-name"
                        className="account-settings__full-name--input-label account__input-label">
                        First name
                    </label>
                    <input
                        className="account-settings__full-name--input account__input"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name"
                        maxLength={100}
                    />
                </div>
                <div className="account-settings__full-name--input-wrapper account__input-wrapper">
                    <label
                        htmlFor="last-name"
                        className="account-settings__full-name--input-label account__input-label">
                        Last name
                    </label>
                    <input
                        className="account-settings__full-name--input account__input"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name"
                        maxLength={100}
                    />
                </div>
            </div>
        </div>
    );
};

// Email Component
const EmailSection = ({
    email,
    setEmail,
}: {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="account-settings__email">
            <div className="account-settings__email--header">
                <h3 className="account-settings__email--title">
                    Contact email
                </h3>
                <p className="account-settings__email--subtitle">
                    Manage your email
                </p>
            </div>
            <div className="account-settings__email--input-wrapper account__input-wrapper">
                <label
                    htmlFor="email"
                    className="account-settings__email--input-label account__input-label">
                    Email
                </label>
                <input
                    className="account-settings__email--input account__input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    maxLength={100}
                />
            </div>
        </div>
    );
};

// Password Component
const PasswordSection = ({
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
}: {
    newPassword: string;
    confirmPassword: string;
    setNewPassword: React.Dispatch<React.SetStateAction<string>>;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div className="account-settings__password">
            <div className="account-settings__password--header">
                <h3 className="account-settings__password--title">Password</h3>
                <p className="account-settings__password--subtitle">
                    Update your password
                </p>
            </div>
            <div className="account-settings__password--inputs">
                <div className="account-settings__password--input-wrapper account__input-wrapper">
                    <label
                        htmlFor="new-password"
                        className="account-settings__password--input-label account__input-label">
                        New password
                    </label>
                    <input
                        className="account-settings__password--input account__input"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Password"
                        maxLength={100}
                    />
                </div>
                <div className="account-settings__password--input-wrapper account__input-wrapper">
                    <label
                        htmlFor="confirm-password"
                        className="account-settings__password--input-label account__input-label">
                        Confirm password
                    </label>
                    <input
                        className="account-settings__password--input account__input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Password"
                        maxLength={100}
                    />
                </div>
            </div>
        </div>
    );
};

// Manage Account Component
const ManageAccountSection = () => {
    return (
        <div className="account-settings__manage">
            <div className="account-settings__manage--header">
                <h3 className="account-settings__manage--title">
                    Manage account
                </h3>
                <p className="account-settings__manage--subtitle">
                    Log out or delete your account
                </p>
            </div>
            <div className="account-settings__manage--buttons">
                <button className="account-settings__manage--button">
                    <svg width="15" height="15" className="header__link--icon">
                        <use href={`${svg_icons}#icon-log-out`}></use>
                    </svg>
                    Log out
                </button>
                <button className="account-settings__manage--button account-settings__manage--button-delete">
                    Delete account
                </button>
            </div>
        </div>
    );
};

// Main AccountSettings Component
const AccountSettings = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const { avatarUrl, setAvatarUrl } = useAvatar();

    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    return (
        <div className="account__account-settings">
            <div className="account-settings__header">
                <h2 className="account-settings__title">Account Settings</h2>
                <p className="account-settings__subtitle">
                    Update your account settings
                </p>
            </div>

            <AvatarSection avatarUrl={avatarUrl} setAvatarUrl={setAvatarUrl} />
            <FullNameSection
                firstName={firstName}
                lastName={lastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
            />
            <EmailSection email={email} setEmail={setEmail} />
            <PasswordSection
                newPassword={newPassword}
                confirmPassword={confirmPassword}
                setNewPassword={setNewPassword}
                setConfirmPassword={setConfirmPassword}
            />
            <ManageAccountSection />
        </div>
    );
};

export default AccountSettings;
