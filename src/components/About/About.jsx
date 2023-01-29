import React from "react";
import AboutMethodologies from "./AboutMethodologies";
import AboutResources from "./AboutResources";
import AboutProduct from "./AboutProduct";
import AboutLogo from "./AboutLogo";

const About = () => {
    return (
        <>
            <div id="About">
                <AboutLogo />
                <AboutMethodologies />
                <AboutResources />
                <AboutProduct />
            </div>
        </>
    )
}

export default About;