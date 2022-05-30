import React from "react";
import "./cosm.css";
import CosmItem from "./CosmItem";

export default function CosmList(props) {
    return (
        <div className="cosm">
            <div className="cosm_list">
                {props.items.map((el) => (
                    <CosmItem key={el.name} item={el} />
                ))}
            </div>
        </div>
    );
}
