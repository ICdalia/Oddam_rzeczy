import { Formik, Field, Form } from 'formik';
import "../stylesSteps.scss"

function StepThreeForm() {

    return (
        <div className="container_three">
            <p className="step_one">Krok 3/4</p>
            <h3 className="step_one_value">Lokalizacja:</h3>
            <Formik className="container_one_form"
                    initialValues={{
                        location: [],
                        forWhom: '',
                        name: '',
                    }}

                    onSubmit={ values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
            >

                {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (

                    <Form className="one_form">
                        <div className="group">
                            <div className="one_form_group">
                                <Field className="input_form"
                                       component="select"
                                       id="location"
                                       name="location"
                                       multiple={false}
                                >
                                    <option value="0">-wybierz-</option>
                                    <option value="katowice">Katowice</option>
                                    <option value="krakow">Kraków</option>
                                    <option value="poznan">Poznań</option>
                                    <option value="warszawa">Warszawa</option>
                                    <option value="wroclaw">Wrocław</option>
                                </Field>
                            </div>
                            <h3 className="title_help">Komu chcesz pomóc?</h3>
                            <div className="group_help" role="group" aria-labelledby="my-radio-group">
                                <label className="select_help">
                                    <Field className="select_person" id="kids" type="radio" name="forWhom" value="kids" />
                                    dzieciom
                                </label>
                                <label className="select_help">
                                    <Field className="select_person" id="mothers" type="radio" name="forWhom" value="mothers" />
                                    samotnym matkom
                                </label>
                                <label className="select_help">
                                    <Field className="select_person" id="homeless" type="radio" name="forWhom" value="homeless" />
                                    bezdomnym
                                </label>
                                <label className="select_help">
                                    <Field className="select_person" id="disabled" type="radio" name="forWhom" value="disabled" />
                                    niepełnosprawnym
                                </label>
                                <label className="select_help">
                                    <Field className="select_person" id="elderly" type="radio" name="forWhom" value="elderly" />
                                    osobom starszym
                                </label>
                            </div>
                            <h3 className="title_help">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                            <Field type="text" name="name" className="form_organization" />
                        </div>
                        <div className="btn">
                            <button className="btn_form_wstecz" type="submit" disabled={isSubmitting}>Wstecz</button>
                            <button className="btn_form" type="submit" disabled={isSubmitting}>Dalej</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    )
}


export default StepThreeForm;