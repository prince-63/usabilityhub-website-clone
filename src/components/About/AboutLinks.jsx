import React from "react";

const AboutLinks = (props) => {
    return (
        <>
            <div className="links">
                <ul>
                    <li><a href={"/"}>{props.data}</a></li>
                </ul>
            </div>
        </>
    )
}

export default AboutLinks;