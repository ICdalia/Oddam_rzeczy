import React from "react";
import {Link} from "react-router-dom";
import  {Link as ScrollLink} from "react-scroll";

const homeHeader = () => {
    return (
        <div className="container_navbar">
            <nav className="navbar_user">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </nav>
            <nav className="navbar_menu">
                <ScrollLink
                    activeClass="active"
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Start
                </ScrollLink>

            </nav>
        </div>
    )
}


export default homeHeader;