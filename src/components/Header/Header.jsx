import React from "react";
import logo from "../../assets/asset 1.png";

export default function Header() {
    return (
        <>
            <div className="header_section">
                <div className="logo">
                    <img src={logo} alt="this is a logo" />
                </div>
                <div className="links">
                    <ul>
                        <li><a href={"/"}>Product <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href={"/"}>Customers</a></li>
                        <li><a href={"/"}>Pricing</a></li>
                        <li><a href={"/"}>Resources <i className="fa-solid fa-chevron-down"></i></a></li>
                        <li><a href={"/"} className="first">Sign in</a></li>
                        <li><a href={"/"} className="second">Sign up</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}