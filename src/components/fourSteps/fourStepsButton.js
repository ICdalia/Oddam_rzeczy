import {Link} from "react-router-dom";
import React from "react";


const FourStepsButton = () => {
    return (
        <div className="container_foursteps">
            <div className="foursteps">
                <div className="btn_foursteps">
                    <Link to="/oddaj-rzeczy" className="btn_oddaj">Oddaj <br/> rzeczy</Link>
                </div>
            </div>
        </div>
    )
}

export default FourStepsButton;



