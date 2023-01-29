import React from "react";
import Btn from "./Btn";
import arr from "../js/card";
import Cards from "./Cards";


const Card = () => {
    return (
        <>
            <div className="card_section">
                <div className="card_container_one">
                    <h1>
                        Your user research Swiss Army knife
                    </h1>
                    <Btn text="see all features" />
                </div>
                <div className="card_container_two">
                    {arr.map((findCrad) => <Cards img={findCrad.img} title={findCrad.title} data={findCrad.data} key={findCrad.key} btn={findCrad.btn} />)}
                </div>
            </div>
        </>
    )
}

export default Card;