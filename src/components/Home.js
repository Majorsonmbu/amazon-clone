
import React from "react";
import { Route } from "react-router-dom";
import "./Home.css"
import Products from "./Products";

export default function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img 
                  className="home-image"
                  src="https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg" 
                  alt="hero image" 
                />
                <Products/>
            </div>
        </div>
    )
}