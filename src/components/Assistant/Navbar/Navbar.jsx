import React from "react";
import { NavLink } from "react-router-dom";
import "../assistant.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink className="navbar_item" to="/assistant/composition">
                Составы
            </NavLink>

            <NavLink className="navbar_item" to="/assistant">
                After и окружающая среда
            </NavLink>

            <NavLink className="navbar_item" to="/assistant/test">
                Узнай о своей коже больше
            </NavLink>

            <NavLink className="navbar_item" to="/assistant/contact">
                Свяжись с нами!
            </NavLink>
        </div>
    );
}
