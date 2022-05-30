import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_link">
                <NavLink className="btn" to="/error">
                    {" "}
                    Адрес электронной почты{" "}
                </NavLink>

                <NavLink className="btn" to="/assistant/contact">
                    {" "}
                    Связаться с нами{" "}
                </NavLink>
            </div>

            <div className="footer_social">
                <p className="footer_social_sub">
                    Подпишитесь, чтобы получать сообщения от After о наших
                    продуктах и ​​услугах.
                </p>

                <div className="footer_social_list">
                    <p className="footer_social_list_main">Социальные сети</p>
                    <p className="footer_social_list_item">instagram</p>
                    <p className="footer_social_list_item">twitter</p>
                    <p className="footer_social_list_item">facebook</p>
                </div>
            </div>

            <div className="copyright">
                &#169; After 2022 / Havruchok &amp; cosmetic
            </div>
        </div>
    );
}
