import React, { useState } from "react";
import {useNavigate} from "react-router-dom";


function Login() {
    const navigation = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [forms, setForms] = useState({
        email: "",
        pass: ""
    })

    const database = [
        {
            email: "email1@test.pl",
            password: "pass1"
        },
        {
            email: "email2",
            password: "pass2"
        }
    ];

    const errors = {
        mail: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let { email, pass } = forms;

        const mailData = database.find((user) => user.email === email && user.password === pass);
        console.log(mailData, email, pass)
        if (mailData) {
            navigation("/")
        } else {
            setErrorMessages({
                mail: errors.mail,
                pass: errors.pass
            });
        }
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
                    <input type="password" value={forms.pass} onChange={handleChange} name="pass" required />
                    {errorMessages?.pass && <div className="error">{errorMessages.pass}</div>}
                </div>
                <div className="button-container">
                    <input type="submit"  className="button-register" value="Załóż konto" />
                    <input type="submit"  className="button-login" value="Zaloguj się" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Zaloguj się</div>
                {isSubmitted ? <div>Użytkownik jest zalogowany</div> : renderForm}
            </div>
        </div>
    );
}

export default Login;

