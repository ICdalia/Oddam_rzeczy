import React from "react";
import "../stylesHome.scss"
import Decoration from "../../assets/Decoration.svg";
import FourStepsColumn from "./fourStepsSection";
import FourStepsButton from "./fourStepsButton";

const FourSteps = () => {
    return (
        <div className="container_foursteps" id="what_is_it">
            <div className="foursteps">
                <div className="title_foursteps">Wystaczą 4 proste kroki</div>
                <div className="decoration_foursteps">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <FourStepsColumn/>
                <FourStepsButton/>
                </div>
            </div>
    )
}

export default FourSteps;