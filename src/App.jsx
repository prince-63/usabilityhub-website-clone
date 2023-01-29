import React from "react";
import "./components/style/App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Compony from "./components/Compony/Compony";
import Card from "./components/Card/Card";
import About from "./components/About/About";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <Compony />
            <Card />
            <About />
        </>
    )
}

export default  App;