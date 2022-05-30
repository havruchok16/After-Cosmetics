import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";
import error from "../../img/94329-error-404.json";
import "../../styles/style.css";
import "./error.css";

export default function Error() {

    useEffect(() => {
    lottie.loadAnimation({
        container: document.querySelector("#anim"),
        animationData: error,
    });
    }, []);

    return (
        <div className="errors">
            <div className="header_img"></div>

            <div className="error">
                    <div id="anim" className="error_anim" />
                    <p className="error_text">
                        Что-то пошло не так.. <br></br>
                        Вернитесь на главную страницу
                        <NavLink className="btn btn_error" to="/">На главную</NavLink>
                    </p>
            </div>
        </div>
    );
}
