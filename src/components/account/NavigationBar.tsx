import { NavLink } from "react-router-dom";
import svg_icons from "@icons/icons.svg";
import person from "@assets/1.jpg";
import { forwardRef } from "react";
import { useSidebar } from "@src/hooks/useSidebar";
import { useAvatar } from "@src/hooks/useAvatar";

type NavigationBarProps = {
    children?: React.ReactNode;
};

const NavigationBar = forwardRef<HTMLDivElement, NavigationBarProps>(
    ({ children }, ref) => {
        const { sidebarOpen, setSidebarOpen } = useSidebar();
        const { avatarUrl } = useAvatar();

        const handleLinkClick = () => {
            setSidebarOpen(false); // Close the sidebar when a link is clicked
        };

        return (
            <header className="header">
                <div className="header__container container">
                    <div className="header__logo">
                        <a href="/" className="header__logo--link">
                            <svg
                                width="35"
                                height="35"
                                className="header__icon">
                                <use href={`${svg_icons}#icon-picture`}></use>
                            </svg>
                        </a>
                    </div>
                    <nav
                        className={`header__navigation${
                            sidebarOpen ? " open" : ""
                        }`}
                        ref={ref}>
                        <ul className="header__list">
                            <NavLink
                                to="/account"
                                className={({ isActive }) =>
                                    isActive
                                        ? "header__link header__link--active"
                                        : "header__link"
                                }
                                onClick={handleLinkClick} // Close the sidebar on link click
                            >
                                Settings
                            </NavLink>
                        </ul>
                        <button className="header__button--account">
                            <img
                                className="header__image"
                                src={avatarUrl ? avatarUrl : person}
                                alt="Person"
                                loading="lazy"
                            />
                        </button>
                    </nav>
                    <button
                        className="header__burger"
                        onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <svg width="20" height="20" className="header__icon">
                            <use href={`${svg_icons}#icon-menu`}></use>
                        </svg>
                    </button>
                </div>
            </header>
        );
    }
);

export default NavigationBar;
