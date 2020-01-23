import React from "react";

const Footer = props => {
    return (
        <div>
            <h1> Explanation: {props.explanation}</h1>
            <h2> Copyright: {props.copyright}</h2>
        </div>
    );
};

export default Footer;