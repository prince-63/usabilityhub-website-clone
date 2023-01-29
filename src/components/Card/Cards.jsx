import React from "react";
import Btn from "./Btn";

const Cards = (props) => {
    return (
        <>
            <div className="cards">
                <div className="img">
                    <img src={props.img} alt="this" />
                </div>
                <h3>{props.title}</h3>
                <p>{props.data}</p>
                <Btn text={props.btn} />
            </div>
        </>
    )
}

export default Cards;