import React from "react";
import btnImage from "../../assets/asset 12.svg";

const btn = (props) => {
    return (
        <>
            <div className="card_btn">
                <button>{props.text} <img src={btnImage} alt="" /></button>
            </div>
        </>
    )
}

export default btn;