import React from "react";
import { NavLink } from "react-router-dom";
import "react-hamburger-menus/dist/style.css";
import "./header.css";
import { ResponsiveNavbar } from "react-hamburger-menus";

export default function Header() {
    return (
        <ResponsiveNavbar className='nav'>
            <ul>
                <li>
                    <NavLink className="nav_item logo" to="/">
                        after
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_item" to="/catalog">
                        косметика
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_item" to="/assistant">
                        ассистент
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_item" to="/assistant/composition">
                        составы
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_item" to="/assistant/contact">
                        контакты
                    </NavLink>
                </li>
            </ul>
        </ResponsiveNavbar>
    )

}



/* export default function Header() {
    return (
        <nav>
            <div className="nav">
                <div className="nav_item">
                    <NavLink className="nav_item" to="/">
                        after
                    </NavLink>
                </div>

                <div className="nav_item">
                    <NavLink className="nav_item" to="/catalog">
                        косметика
                    </NavLink>
                </div>

                <div className="nav_item">
                    <NavLink className="nav_item" to="/assistant">
                        ассистент
                    </NavLink>
                </div>

                <div className="nav_item">
                    <NavLink className="nav_item" to="/assistant/contact">
                        контакты
                    </NavLink>
                </div>
            </div>
        </nav>
    );
} */
