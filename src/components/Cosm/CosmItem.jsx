import React from "react";
import "./cosm.css";

const CosmItem = (props) => {
    return (
        <div className="cosm_item">
            <img className='cosm_img' src={props.item.imgUrl} alt={props.item.name}></img>
            <div>
                <p className='cosm_name'>{props.item.name}</p>
                <p className='cosm_info'>{props.item.size} размера / от {props.item.price} {props.item.valute || "byn"}</p>
            </div>
        </div>
    );
};

export default CosmItem;