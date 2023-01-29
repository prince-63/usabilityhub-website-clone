import React from "react";
import AboutLinks from "./AboutLinks";
import { methodologies } from "../js/links";

console.log(methodologies);

const AboutMethodologies = () => {
    return (
        <>
            <div className="AboutMethodologies">
                <div className="title">
                    <h2>Mehodologies</h2>
                </div>
                {methodologies.map((data) => <AboutLinks key={data.key} data={data.data}/>)}
            </div>
        </>
    )
}

export default AboutMethodologies;