import React from "react";
import "../stylesHome.scss"
import aboutImage from "../../assets/People.png";

const AboutImage = () => {
    return (
            <div className="container_image">
                <img src={aboutImage} alt="About Image" className="image_about"/>
        </div>
    )
};

export default AboutImage;