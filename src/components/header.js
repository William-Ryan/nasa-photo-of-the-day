import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Header = props => {
    return (
        // <div>
        //     <h1> Title: {props.title}</h1>
        //     <h2> Date: {props.date}</h2>
        // </div>
        <div className="p-3 my-2 rounded" style={{ background: 'gray', fontSize: '2rem'  }}>
        <Toast>
          <ToastHeader>
          Title: {props.title}
          </ToastHeader>
          <ToastBody>
          Date: {props.date}
          </ToastBody>
        </Toast>
      </div>
    );
};

export default Header;