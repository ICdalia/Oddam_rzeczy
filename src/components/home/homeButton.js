import React from "react";
import {Link} from "react-router-dom";
import "../stylesHome.scss"
import Decoration from "../../assets/Decoration.svg"

const HomeButton = () => {
    return (
        <div className="container_structure">
            <nav className="homeButton_user">
                <p className="text_homeright">Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</p>
                <div className="decoration_home">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <div className="btn_home">
                    <div className="btn_control">
                        <Link to="/oddaj-rzeczy" className="btn_oddaj">Oddaj <br/> rzeczy</Link>
                        <Link to="/zorganizuj-zbiorke" className="btn_zorganizuj">Zorganizuj <br/> zbiórkę</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HomeButton;