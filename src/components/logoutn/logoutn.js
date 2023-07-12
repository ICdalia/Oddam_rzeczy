import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";

function Logout() {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();

        navigate("/");
    };

    return (
        <div className="logout">
            {/*<Navigation useScrollLink={false} />*/}
            <div className="logout-form">
                <div>Wylogowanie nastąpiło pomyślnie!</div>
                <div className="decoration_contact">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                />
                <div className="logout-buttons">
                    <button
                        className="secondary-button"
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