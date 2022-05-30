import React from 'react';
import { NavLink } from 'react-router-dom';
import './banner.css';

export default function Banner() {
    return (
        <div className='banner'>
            <div className='banner_'>
                <div className='banner_info'>
                    <div className='banner_info_company'>
                        <p>2022</p>
                        <p>Havruchok &amp; cosmetic</p>
                    </div>
                    <div className='banner_info_about'>
                        <p className='after_rotate'>after</p>
                        <p>экспериментальный бренд органической косметики</p>
                    </div>
                </div>

                <NavLink className='btn' to='/assistant/test'> Пройти тест </NavLink>
            </div>

            <div className='banner_social'>
                <p className='banner_social_item'>instagram</p>
                <p className='banner_social_item'>twitter</p>
                <p className='banner_social_item'>facebook</p>
            </div>

        </div>
    );
}
