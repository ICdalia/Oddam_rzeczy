import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { URL } from "../register/register";
import "../styleForm.scss"
import {AppContext} from "../../App";
import Decoration from "../../assets/Decoration.svg";


function Login() {
    const { setState } = useContext(AppContext);
    const navigation = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [forms, setForms] = useState({
        email: "",
        pass: ""
    })

    const errors = {
        mail: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { email, pass } = forms;

        fetch(`${URL}?email=${email}&password=${pass}`)
            .then(response => response.json())
            .then(data => {
                if (data.length >= 1) {
                    setState(prev => ({
                        user: email
                    }))
                    navigation("/")
                } else {
                    setErrorMessages({
                                mail: errors.mail,
                                pass: errors.pass
                            });
                }
            })
            .catch(e => {
                setErrorMessages({
                    mail: errors.mail,
                    pass: errors.pass
                });
            })
    };

    const handleChange = ({ target: { name, value }}) => {
        setForms(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleRegisterClick = () => {
        navigation("/rejestracja");
    };

    const renderForm = (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-form">
                        <label >Email </label>
                        <input type="email" name="email" value={forms.email} onChange={handleChange} required />
                        {errorMessages?.email && <div className="error">{errorMessages.email}</div>}
                    </div>
                    <div className="input-form">
                        <label>Hasło </label>
                        <input type="password" value={forms.pass} onChange={handleChange} name="pass" required />
                        {errorMessages?.pass && <div className="error">{errorMessages.pass}</div>}
                    </div>
                    <div className="button-container">
                        <input type="submit"  className="btn_register" value="Załóż konto" onClick={handleRegisterClick}/>
                        <input type="submit"  className="btn_login" value="Zaloguj się" onClick={() => setIsSubmitted(true)}/>
                    </div>
                </form>


        </div>
    );

    return (
            <div className="login-form">
                <div className="title">Zaloguj się</div>
                <div className="decoration_contact">
                    <img src={Decoration} alt="Decoration Home" />
                </div>
                <div className="container_form">
                    <div className="container_login">
                        {isSubmitted ? <div>Użytkownik jest zalogowany</div> : renderForm}
                    </div>
                    <div className="button-container">
                    </div>
                </div>

            </div>
    );
}

export default Login;

