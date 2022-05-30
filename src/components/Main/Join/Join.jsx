import React from 'react';
import { NavLink } from 'react-router-dom';
import './join.css';

export default function Join() {
    return (
        <div className='join'>
            
            <div className='join_info'>
                <p className='join_info_header'>Поговорите с другим человеком</p>
                <p className='join_info_text'>
                    Так же, как наше физическое пространство предназначено 
                    для развития интеллектуальных разговоров, так же и наш 
                    интернет-магазин. Мы рады предложить помощь наших 
                    консультантов в режиме реального времени круглосуточно, 
                    WhatsApp и телефонную службу в рабочее время, а также 
                    видеоконсультации по предварительной записи.
                </p>
                
                <NavLink className='btn_join' to='/assistant/contact'> Связаться с нами </NavLink>
                
            </div>

            <div className='join_img'></div>

        </div>
    );
}