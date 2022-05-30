import React from "react";
import { NavLink } from "react-router-dom";
import After from "./After/After";
import Banner from "./Banner/Banner";
import Ingridient from "./Ingridient/Ingridient";
import Join from "./Join/Join";
import Product from "./Product/Product";
import Quote from "./Quote/Quote";
import Slider from "./Slider/Slider";
import "./main.css";
import "../../styles/style.css";

export default function Main() {
    return (
        <div className="main">
            <div className="header_img"></div>
            
            <Banner />

            <div className="about">
                <p className="section_name">Узнай о нас больше!</p>

                <NavLink className="btn_container_about" to="/assistant">
                    Ассистент
                </NavLink>
            </div>

            <Slider />

            <Product />

            <After />

            <Ingridient />

            <div className="test">
                <div className="test_info">
                    <p className="test_info_text">
                        Найди свое идеальное средство! Пройди тест!
                    </p>
                </div>

                <NavLink className="btn_test" to="/assistant/test">
                    Тест!
                </NavLink>
            </div>

            <Join />

            <Quote />
        </div>
    );
}
