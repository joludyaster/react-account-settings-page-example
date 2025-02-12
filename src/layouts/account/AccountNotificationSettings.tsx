import { useState } from "react";
import { toast } from "react-toastify";

type CheckboxProps = {
    isChecked: boolean;
    label: string;
    span: string;
    checkHandler: () => void;
    index: number;
};

const Checkboxes = [
    {
        label: "Post created",
        span: "Post creation status message.",
        isChecked: false,
    },
    { label: "Likes", span: "Someone liked your post.", isChecked: false },
    { label: "Saves", span: "Someone saved your post.", isChecked: false },
    {
        label: "Comments",
        span: "Someone commented your post.",
        isChecked: false,
    },
];

export default function AccountNotificationSettings() {
    const [checkboxes, setCheckboxes] = useState(Checkboxes);

    const handleSave = () => {
        toast.success("Changes saved successfully!", {
            delay: 1000,
        });

        setCheckboxes(Checkboxes);
    };

    const updateCheckStatus = (index: number) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox, currentIndex) =>
                currentIndex === index
                    ? { ...checkbox, isChecked: !checkbox.isChecked }
                    : checkbox
            )
        );
    };

    return (
        <div className="account__notification-settings">
            <div className="notification-settings__header">
                <h2 className="notification-settings__title">Notifications</h2>
                <p className="notification-settings__subtitle">
                    Manage your notifications
                </p>
            </div>

            <div className="notification-settings__in-app">
                <div className="notification-settings__in-app--header">
                    <h3 className="notification-settings__in-app--title">
                        In-app notifications
                    </h3>
                    <p className="notification-settings__in-app--subtitle">
                        Receive notifications in your app
                    </p>
                </div>
                <div className="notification-settings__in-app--switches">
                    {checkboxes.map((checkbox, index) => (
                        <Switch
                            key={index}
                            index={index}
                            label={checkbox.label}
                            span={checkbox.span}
                            isChecked={checkbox.isChecked}
                            checkHandler={() => updateCheckStatus(index)}
                        />
                    ))}
                </div>
                <div className="notification-settings__in-app--buttons">
                    <button
                        className="notification-settings__in-app--button"
                        onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
function Switch({
    isChecked,
    label,
    span,
    checkHandler,
    index,
}: CheckboxProps) {
    return (
        <div className="notification-settings__in-app--switch">
            <input
                className="notification-settings__in-app--switch-input"
                checked={isChecked}
                id={`notification-settings__in-app--switch-checkbox-${index}`}
                onChange={checkHandler}
                type="checkbox"
            />
            <div className="notification-settings__in-app--switch-explanation">
                <label
                    htmlFor={`notification-settings__in-app--switch-checkbox-${index}`}
                    className="notification-settings__in-app--switch-label">
                    {label}
                </label>
                <span className="notification-settings__in-app--switch-description">
                    {span}
                </span>
            </div>
        </div>
    );
}
