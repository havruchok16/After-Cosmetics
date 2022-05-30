import React from "react";
import Navbar from "./Navbar/Navbar";
import { NavLink } from "react-router-dom";
import AssistantRoutes from "./assistantRouter";

export default function Assistant() {
    return (
        <div className="assistant">
            
            <div className="header_img"></div>

            <div className="bread_сrumbs">
                <NavLink className="fisrt_part" to="/">
                    after
                </NavLink>
                <p className="second_part"> &#183;</p>
                <p className="third_part"> Ассистент </p>
            </div>

            <div className="assistant_container">
                <Navbar />
                <AssistantRoutes />
            </div>
        </div>
    );
}
