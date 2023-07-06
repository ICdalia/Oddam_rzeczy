
import { useState} from 'react';
import { Formik } from 'formik';

const ContactForm = () => {
    const [messagesSend, setMessagesSend] = useState('false');
    const [err, setError] = useState('');

    const handleSubmit = (values, {setSubmitting, resetForm}) =>
    {
            setError('');
            fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            })
                .then(r => r.json())
                .then(data => {
                    if (data.status === "success") {
                        setMessagesSend(true);
                        resetForm();
                    } else {
                        setError(data.errors)
                    }
                })
                .catch((err) => {
                    console.log(err);
                    setError('Błąd w trakcie przesyłania')
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
                            errors.name = 'Required';
                        } else if (/\d/.test(values.name)) {
                            errors.name = 'Imię nie może zawierać cyfr';
                        }

                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Adres email jest błędny';
                        }

                        if (!values.message) {
                            errors.message = 'Required';
                        } else if (values.message.length < 120) {
                            errors.message = 'Wiadomość musi zawierać minimum 120 znaków'
                        }
                        return errors;
                    }}
                    onSubmit={handleSubmit}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <label>Wpisz swoje imię</label>
                            <input
                                placeholder="imię"
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                required
                            />
                            {errors.name && touched.name && errors.name}
                            <label>Wpisz swój email</label>
                            <input
                                placeholder="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                required
                            />
                            {errors.email && touched.email && errors.email}
                            <label>Wpisz swoją wiadomość</label>
                            <input
                                placeholder="wiadomość"
                                type="text"
                                name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                                required
                            />
                            {errors.message && touched.message && errors.message}
                            <button type="submit" disabled={isSubmitting}>
                                Wyślij
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        )
};

export default ContactForm;