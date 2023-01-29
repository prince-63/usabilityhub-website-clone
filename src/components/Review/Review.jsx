import React from "react";
import review from "../js/review";
import Box from "./Box";

const Review = ()=> {
    return (
        <>
        <div className="ReviewContainer">
            {review.map((data) => <Box logo={data.logo} data={data.data} title={data.title} key={data.key}/>)}
        </div>
        </>
    )
}

export default Review;