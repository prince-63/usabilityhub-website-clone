import React from "react";

const Social = () => {
    return (
        <>
            <div className="social_sections">
                <div className="info">
                    <p>privacy policy</p>
                    <p>terms & conditions</p>
                    <p>security information</p>
                </div>
                <div className="social_links">
                    <ul>
                        <li><a href={"/"}><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href={"/"}><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href={"/"}><i className="fa-brands fa-linkedin"></i></a></li>
                        <li><a href={"/"}><i className="fa-brands fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Social;