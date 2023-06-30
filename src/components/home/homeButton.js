import React from "react";
import {Link} from "react-router-dom";
import "../stylesHome.scss"
import Decoration from "../../assets/Decoration.svg"



const HomeButton = () => {
    return (
        <div className="container_homeright">
            <nav className="homeButton_user">
                <div className="text_homeright">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</div>
                <div>
                    <img src={Decoration} alt="Decoration Home" className="decoration_home"/>
                </div>
                <Link to="/oddaj-rzeczy" className="btn_oddaj">Oddaj rzeczy</Link>
                <Link to="/zorganizuj-zbiorke" className="btn_zorganizuj">Zorganizuj zbiórkę</Link>
            </nav>
        </div>
    )
}

export default HomeButton;