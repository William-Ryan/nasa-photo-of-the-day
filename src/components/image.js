import React from "react";

const Image = props => {
    return (
        <div>
            <img className="photo" src={props.src} alt="Nasa photo of the day" />
        </div>
    );
};

export default Image;