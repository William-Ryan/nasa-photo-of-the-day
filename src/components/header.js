import React from "react";

const Header = props => {
    return (
        <div>
            <h1> Title: {props.title}</h1>
            <h2> Date: {props.date}</h2>
        </div>
    );
};

export default Header;