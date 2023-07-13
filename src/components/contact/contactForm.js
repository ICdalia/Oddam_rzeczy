import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { TextField } from '@mui/material';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messagesSend, setMessagesSend] = useState(false);
    const [err, setError] = useState('');


    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setError('');
        let hasError = false;

        if (values.name === '') {
            setNameError(true);
            hasError = true;
        }

        if (
            values.email === '' ||
            !values.email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            setEmailError(true);
            hasError = true;
        }

        if (values.message.length < 120) {
            setMessagesSend(true);
            hasError = true;
        }

        if (hasError) {
            return;
        }

        setError(null);

        fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((r) => r.json())
            .then((data) => {
                if (data.status === 'success') {
                    setMessagesSend(true);
                    resetForm();
                    setMessagesSend('Wiadomość została wysłana!');
                    hasError = false;
                    setName('');
                    setNameError(false);
                    setEmail('');
                    setEmailError(false);
                    setMessage('');
                    setMessagesSend(false);
                } else {
                    setError(data.errors);
                }
            })
            .catch((err) => {
                console.log(err);
                setError('Błąd w trakcie przesyłania');
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    message: '',
                }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = '';
                    } else if (/\d/.test(values.name)) {
                        errors.name = 'Imię nie może zawierać cyfr';
                    } else if (values.name.length < 3) {
                        errors.name = 'Podane imię jest za krótkie';
                    }

                    if (!values.email) {
                        errors.email = '';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Adres email jest błędny';
                    }

                    if (!values.message) {
                        errors.message = '';
                    } else if (values.message.length < 120) {
                        errors.message = 'Wiadomość musi zawierać minimum 120 znaków';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form_row">
                            <div className="form_field">
                                <label className="form_label">Wpisz swoje imię</label>
                                <input
                                    placeholder="Imię"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    required
                                />
                                {errors.name && touched.name && errors.name}
                            </div>
                            <div className="form_field">
                                <label className="form_label">Wpisz swój email</label>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    required
                                />
                                {errors.email && touched.email && errors.email}
                            </div>
                        </div>
                        <div className="form_field">
                            <label className="form_label">Wpisz swoją wiadomość</label>
                            <textarea
                                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                required
                            />
                            {errors.message && touched.message && errors.message}
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Wyślij
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
