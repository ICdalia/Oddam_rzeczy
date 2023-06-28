import React from "react";
import  {Link as ScrollLink} from "react-scroll";

const homeMenu = () => {
    return (
        <div className="container_navbar">
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


export default homeMenu;