import { Formik, Field, Form } from 'formik';
import {useContext} from "react";
import {FromContext} from "./indexStep";
// import "./log.js"
function StepOneForm() {
    const { setState } = useContext(FromContext);
    return (
        <div className="container_one">
            <p className="step_one">Krok 1/4</p>
            <h3 className="step_one_mark">Zaznacz co chcesz oddać:</h3>
            <Formik className="container_one_form"
                     initialValues={{
                         checked: [],
                     }}
                     onSubmit={(values) => {
                         console.log(JSON.stringify(values, null, 2));
                         setState(prev => ({
                             ...prev,
                             step: prev.step + 1
                         }))
                     }}
            >
                {({ values }) => (
                    <Form  className="one_form">
                        <div className="one_form_group" role="group" aria-labelledby="radio-group">
                            <label className="label_form">
                                <Field className="input_form" type="radio" name="checked" value="cloths" />
                                ubrania, które nadają się do ponownego użycia
                                <span className="span_form"></span>
                            </label>
                            <label className="label_form">
                                <Field className="input_form"  type="radio" name="checked" value="trashCloths" />
                                ubrania, do wyrzucenia
                                <span className="span_form" ></span>
                            </label>
                            <label className="label_form">
                                <Field className="input_form" type="radio" name="checked" value="toys" />
                                zabawki
                                <span className="span_form" ></span>
                            </label>
                            <label className="label_form">
                                <Field className="input_form"  type="radio" name="checked" value="books" />
                                książki
                                <span className="span_form" ></span>
                            </label>
                            <label className="label_form">
                                <Field className="input_form"  type="radio" name="checked" value="other" />
                                Inne
                                <span className="span_form" ></span>
                            </label>
                        </div>

                        <button className="btn_form" type="submit">Dalej</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default StepOneForm;