import React from "react";
import arr from "../../components/js/componyLogo.js";
import Logo from "./Logo.jsx";


const Compony = () => {
    return (
        <>
            <div className="company_section">
                {arr.map(index => <Logo img={index.link} />)}
            </div>
        </>
    )
}

export default Compony;
