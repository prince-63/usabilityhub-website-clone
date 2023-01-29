import React from "react";
import { resources } from "../js/links"; 
import AboutLinks from "./AboutLinks";

const AboutResources = () => {
    return (
        <>
            <div className="AboutMethodologies">
                <div>
                    <h2>Resources</h2>
                </div>
                {resources.map((data) => <AboutLinks data={data.data} key={data.key} />)}
            </div>
        </>
    )
}

export default AboutResources;