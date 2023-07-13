// import { Formik, Field, Form } from 'formik';
// import "../stylesSteps.scss"
//
// function StepFourForm() {
//
//     return (
//         <div className="container_four">
//             <p className="step_one">Krok 4/4</p>
//             <h3 className="step_one_value">Podaj adres oraz termin odbioru rzecz przez kuriera:</h3>
//             <Formik className="container_one_form"
//                     initialValues={{
//                         street: '',
//                         city: '',
//                         zipcode: '',
//                         phone: '',
//                         date: '',
//                         time: '',
//                         remarks: '',
//                     }}
//
//                     onSubmit={ values => {
//                         alert(JSON.stringify(values, null, 2));
//                     }}
//             >
//
//                 {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => ()}
//
//                 {/*<h3 className="title_help">Adres odbioru</h3>*/}
//                 {/*<div className="group_help" role="group" aria-labelledby="my-radio-group">*/}
//                 {/*    <label className="select_street">*/}
//                 {/*        <Field className="select_person" id="street" type="radio" name="forWhom" value="kids" />*/}
//                 {/*        dzieciom*/}
//                 {/*    </label>*/}
//                 {/*    <label className="select_help">*/}
//                 {/*        <Field className="select_person" id="mothers" type="radio" name="forWhom" value="mothers" />*/}
//                 {/*        samotnym matkom*/}
//                 {/*    </label>*/}
//                 {/*    <label className="select_help">*/}
//                 {/*        <Field className="select_person" id="homeless" type="radio" name="forWhom" value="homeless" />*/}
//                 {/*        bezdomnym*/}
//                 {/*    </label>*/}
//                 {/*    <label className="select_help">*/}
//                 {/*        <Field className="select_person" id="disabled" type="radio" name="forWhom" value="disabled" />*/}
//                 {/*        niepełnosprawnym*/}
//                 {/*    </label>*/}
//                 {/*    <label className="select_help">*/}
//                 {/*        <Field className="select_person" id="elderly" type="radio" name="forWhom" value="elderly" />*/}
//                 {/*        osobom starszym*/}
//                 {/*    </label>*/}
