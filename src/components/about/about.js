import React from "react";
import "../stylesHome.scss";
import Decoration from "../../assets/Decoration.svg";
import Signature from "../../assets/Signature.svg";
import AboutImage from "./aboutImage";

const AboutUs = () => {
    return (
        <div className="container_about" id="about">
            <div className="about">
                <div className="columns">
                    <div className="column-left">
                        <h2 className="title_about">O nas</h2>
                        <div className="decoration_home">
                            <img src={Decoration} alt="Decoration Home" />
                        </div>
                        <p className="text_about">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <div className="signature_home">
                            <img src={Signature} alt="signature" />
                        </div>
                    </div>
                    <div className="column-right">
                        <AboutImage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
