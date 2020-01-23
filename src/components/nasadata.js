import React, { useState,useEffect } from "react";
import Header from "./header";
import Image from "./image";
import Footer from "./footer";
import axios from "axios";

const Nasa = () => {
    const [items, setItems] = useState ([]);
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=bK6mRk7fbvzf1z3Wb2gowPMq1OhtdEWctMIhcWMk")
    .then (res => {
      console.log(res.data);
      setItems(res.data);
    })
    .catch(err => {
      console.log(`This is an error`, err);
    })
  }, []);
    return (
        <div className="parent">
            <Header
            title = {items.title}
            date = {items.date}
            />
            <Image
            src = {items.hdurl}
            />
            <Footer
            copyright = {items.copyright}
            explanation = {items.explanation}
            />
        </div>
    );
}

export default Nasa;