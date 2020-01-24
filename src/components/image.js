import React from "react";

const Image = props => {
    return (
        <div style={{display: "flex", justifyContent: "center", background: "black"}}>
            <img className="photo" src={props.src} alt="Nasa photo of the day" style={{width: "80%"}} />
        </div>
    );
};

export default Image;