import React from "react";
import "../stylesHome.scss"
import homeImage from "../../assets/homeImage.png";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container_structure">
            <div className="container_image">
                <img src={homeImage} alt="Home Image" className="image_home"/>
            </div>
            <div className="container_homeButton">
                <nav className="homeButton_user">
                    <Link to="/oddaj-rzeczy" className="btn_oddaj">Oddaj rzeczy</Link>
                    <Link to="/zorganizuj-zbiorke" className="btn_zorganizuj">Zorganizuj zbiórkę</Link>
                </nav>
            </div>

        </div>

    )
};

export default HomePage;