import React from "react";
import "../stylesHome.scss"
import HomeButton from "./homeButton";
import HomeImage from "./homeImage";

const HomePage = () => {
    return (
        <div className="container_structure">
            <HomeImage/>
            <HomeButton/>
        </div>
    )
};

export default HomePage;