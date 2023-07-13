import React from "react";
import {useNavigate} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import "../styleForm.scss"

function Logout() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();

        navigate("/");
    };

    return (
        <div className="logout">
            <div className="logout-form">
                <div className="title">Wylogowanie nastąpiło pomyślnie!</div>
                <div className="decoration_contact">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <div className="btn_logout">
                    <button
                        className="btn_home"
                        type="button"
                        onClick={handleClick}
                    >
                        Strona główna
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Logout;