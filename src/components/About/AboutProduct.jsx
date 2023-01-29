import React from "react";
import { product } from "../js/links";
import AboutLinks from "./AboutLinks";

const AboutProduct = () => {
    return (
        <>
            <div className="AboutMethodologies">
                <div>
                    <h2>Product</h2>
                </div>
                {product.map((data) => <AboutLinks data={data.data} key={data.key} />)}
            </div>
        </>
    )
}

export default AboutProduct;