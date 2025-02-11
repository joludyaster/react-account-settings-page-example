import { NavLink } from "react-router-dom";

const links = {
    Account: "/account",
    Notifications: "/account/notifications",
};

export default function Sidebar() {
    return (
        <nav className="account__sidebar">
            <h2 className="sidebar__title">Settings</h2>
            <SidebarList />
        </nav>
    );
}

function SidebarList() {
    return (
        <ul className="sidebar__list">
            {Object.entries(links).map(([parameter, link], index) => (
                <li key={index} className="sidebar__item">
                    <NavLink
                        to={link}
                        end={link === "/account"}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar__link sidebar__link--active"
                                : "sidebar__link"
                        }>
                        {parameter}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
