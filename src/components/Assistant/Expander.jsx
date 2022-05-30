import React, { useState } from "react";

export default function Expander({ title, children }) {
    const [expanded, setExpanded] = useState(false);
    const handleHeaderClick = () => {
        setExpanded((expanded) => !expanded);
    };
    return (
        <div style={expanderStyle}>
            <div style={headerStyle} onClick={handleHeaderClick}>
                <div style={titleStyle}>{title}</div>
                <div style={spacerStyle} />
                <div style={iconStyle}>{expanded ? "" : ""}</div>
            </div>
            <div
                style={expanded ? contentExpandedStyle : contentCollapsedStyle}
            >
                {children}
            </div>
        </div>
    );
};

const expanderStyle = {
    margin: "0",
    maxWidth: "520px",
    padding: "2px",
    fontSize: "16px",
    color: "#5F5C53",
};

const headerStyle = {
    display: "flex",
    maxWidth: "520px",
    cursor: "pointer",
};

const titleStyle = {
    padding: "10px 0",
    maxWidth: "520px",
    flex: "none",
    fontWeight: "500",
};

const spacerStyle = {
    flex: "1",
};

const iconStyle = {
    padding: "3px",
    flex: "none",
};

const contentStyle = {
    overflow: "hidden",
    transition: "all 0.3s",
};

const contentExpandedStyle = {
    ...contentStyle,
    padding: "0 10px",
    height: "auto",
    filter: "opacity(1)",
};

const contentCollapsedStyle = {
    ...contentStyle,
    padding: "0 0",
    height: "0",
    filter: "opacity(0)",
};
