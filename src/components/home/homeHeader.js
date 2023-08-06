import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "../stylesBtnForm.scss"
import {AppContext} from "../../App";

const homeHeader = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { state: { user } } = useContext(AppContext);
    return (
        <div className="container_navbar">
            {user ? (
                <p>{user}</p>
            ): (
                <nav className="navbar_user">
                    <Link to="/logowanie" className="btn_login">Zaloguj</Link>
                    <Link to="/rejestracja" className="btn_register">Załóż konto</Link>
                </nav>
            )
            }
        </div>
    )
}

export default homeHeader;