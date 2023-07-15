import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Decoration from "../../assets/Decoration.svg";
import "../styleForm.scss"

export const URL = "http://localhost:3005/users";

function Register() {
    const navigation = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [forms, setForms] = useState({
        email: "",
        pass1: "",
        pass2: ""
    })

    const database = [
        {
            email: "email1@test.pl",
            password1: "pass1",
            password2: "pass2"
        },
        {
            email: "email2",
            password1: "pass1",
            password2: "pass2"
        }
    ];

    const errors = {
        mail: "invalid email",
        pass1: "invalid password",
        pass2: "bad password"

    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { email, pass1, pass2 } = forms;

        if (pass1 !== pass2) {
            setErrorMessages( {
                password:errors.pass2
            });
        }

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password: pass1
            })
        })
    };

    const handleChange = ({ target: { name, value }}) => {
        setForms(prev => ({
            ...prev,
            [name]: value
        }))


    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-form">
                    <label>Email </label>
                    <input type="email" name="email" value={forms.email} onChange={handleChange} required />
                    {errorMessages?.email && <div className="error">{errorMessages.email}</div>}
                </div>
                <div className="input-form">
                    <label>Hasło </label>
                    <input type="password" value={forms.pass1} onChange={handleChange} name="pass1" required />
                    {errorMessages?.pass1 && <div className="error">{errorMessages.pass1}</div>}
                </div>
                <div className="input-form">
                    <label>Powtórz hasło</label>
                    <input type="password" value={forms.pass2} onChange={handleChange} name="pass2" required />
                    {errorMessages?.pass2 && <div className="error">{errorMessages.pass2}</div>}
                </div>
                <div className="button-container">
                    <input type="button"  className="btn_login" value="Zaloguj się" onClick={() => setIsSubmitted(true)}/>
                    <input type="submit"  className="btn_register" value="Załóż konto" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="register">
            <div className="register-form">
                <div className="title">Załóż konto</div>
                <div className="decoration_contact">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <div className="container_register">
                    <div className="container_login_register">
                        {isSubmitted ? <div>Użytkownik jest zalogowany</div> : renderForm}
                    </div>
                    {/*<Link to="/rejestracja" className="btn_register">Załóż konto</Link>*/}
                    <div className="button-container">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;

