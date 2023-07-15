import React from "react";
import  {Link as ScrollLink} from "react-scroll";
import { Link } from "react-router-dom";
import "../stylesBtnForm.scss"

function homeMenu () {

    return (
        <div className="container_navbar">
            <nav className="navbar_menu">
                <Link
                    className="start"
                    activeClass="active"
                    to="/"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    exact="true"
                >
                    Start
                </Link>
                <ScrollLink
                    activeClass="active"
                    to="what_is_it"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    exact="true"
                >
                    O co chodzi?
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                >
                    O nas
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="help"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    exact="true"
                >
                    Fundacja i organizacje
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    exact="true"
                >
                    Kontakt
                </ScrollLink>
            </nav>
        </div>
    )
}


export default homeMenu;