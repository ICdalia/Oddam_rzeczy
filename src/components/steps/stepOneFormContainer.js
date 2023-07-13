import StepOneForm from "./stepOneForm";
import "../stylesSteps.scss";
import ImportantOne from "./important1";
import {useContext} from "react";
import {FromContext} from "./indexStep";

function StepOneFormContainer() {

    return (
        <div className="step_one_form_container">
            <ImportantOne/>
            <StepOneForm />
        </div>
    )
}

export default StepOneFormContainer;