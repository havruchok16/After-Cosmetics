import React from "react";
import BeforeAfterSlider from "react-before-after-slider";
import after from "../../../img/faceAfter.png";
import before from "../../../img/faceBefore.png";
import "./after.css";

export default function After() {
    return (
        <div className="after">
            <p className="section_name">Ваша кожа after!</p>

            <div className="after_container">
                <BeforeAfterSlider className='after_slider'
                    after={after}
                    before={before}
                    width={600}
                    height={600}
                />
            </div>
        </div>
    );
}
