import React from "react";
import bannerImage from "../../assets/asset 2.png"

const Banner = () => {
    return (
        <>
            <div className="banner_section">
                <div className="box_section">
                    <div className="first_box">
                        <h1>Design confidently.</h1>
                        <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                        <button className="Btn">Get Started</button>
                    </div>
                    <div className="second_box">
                        <div className="img">
                            <img src={bannerImage} alt="?"/>
                        </div>
                    </div>
                </div>
                <div className="text">
                    <span>The world’s best companies rely on UsabilityHub to make better design decisions.</span>
                </div>
            </div>
        </>
    )
}

export default Banner;