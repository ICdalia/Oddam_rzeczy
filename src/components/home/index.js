import React from 'react';
import FourSteps from "../fourSteps/fourSteps";
import About from "../about/about";
import ContactSection from "../contact/contactSection";
import HomeImage from "./homeImage";
import ThreeColumns from "./homeThreeColumns";
import WeHelp from "./weHelp";

const Home = () => {
    return (
        <>
            <HomeImage />
            <ThreeColumns/>
            <FourSteps />
            <About />
            <WeHelp/>
        </>
    )
}

export default Home;