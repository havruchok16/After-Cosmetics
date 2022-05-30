import React from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css";
import "./slider.css";

export default function Slider() {
    return (
        <div className="slider">
            <p className="section_name">Превосходный выбор</p>
            <div className="sliders">
                <Swiper
                    watchSlidesProgress={true}
                    spaceBetween={30}
                    breakpoints={{
                        1100: {
                            slidesPerView: 3,
                        },
                        900: {
                            slidesPerView: 2,
                        },
                        350: {
                            slidesPerView: 1,
                        },
                    }}
                    scrollbar={{ hide: true }}
                    navigation={true}
                    modules={[Navigation, Scrollbar]}
                    className="mySwiper"
                >
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                    <SwiperSlide></SwiperSlide>
                </Swiper>
            </div>

            <div className="container">
                <div className="btn_container">
                    <NavLink className="btn" to="/catalog">
                        Больше
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
