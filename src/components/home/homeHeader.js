import React from "react";
import {Link} from "react-router-dom";

const homeHeader = () => {
    return (
        <div className="container_navbar">
            <nav className="navbar_user">
                <Link to="/logowanie">Zaloguj</Link>
                <Link to="/rejestracja">Załóż konto</Link>
            </nav>
        </div>
    )
}


export default homeHeader;