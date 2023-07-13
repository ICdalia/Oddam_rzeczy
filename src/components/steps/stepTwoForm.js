import { Formik, Field, Form } from 'formik';
import "../stylesSteps.scss"

function StepTwoForm() {

    return (
        <div className="container_two">
            <p className="step_one">Krok 2/4</p>
            <h3 className="step_one_value">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
            <Formik className="container_one_form"
                    initialValues={{
                        bags: '',
                    }}

                    onSubmit={ values => {
                        alert(JSON.stringify(values, null, 2));
                    }}
            >

                {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (

                    <Form className="one_form">
                        <div className="one_form_group">
                            <label className="label_form" htmlFor="bags">Liczba 60l worków:</label>
                            <Field className="input_form"
                                   component="select"
                                   id="bags"
                                   name="bags"
                                   multiple={false}
                            >
                                <option value="0">- wybierz -</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Field>
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

export default StepTwoForm;