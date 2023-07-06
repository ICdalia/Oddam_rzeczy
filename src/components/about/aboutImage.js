import React from "react";
import "../stylesAbout.scss"
import aboutImage from "../../assets/People.png";

const AboutImage = () => {
    return (
        <div className="container_about" id="about">
            <div className="container_image_about">
                <img src={aboutImage} alt="About Image" className="image_about"/>
            </div>
        </div>
    )
};

export default AboutImage;