import React from "react";
import "../stylesHome.scss"
import homeImage from "../../assets/homeImage.png";

const HomeImage = () => {
    return (
        <div className="container_image">
            <img src={homeImage} alt="Home Image" className="image_home"/>
        </div>
    )
};

export default HomeImage;