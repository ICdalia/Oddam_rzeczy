import StepFourForm from "./stepOneForm";
import "../stylesSteps.scss";
import ImportantFour from "./important4";


function StepOneFormContainer() {
    return (
        <div className="step_one_form_container">
            <ImportantFour/>
            <StepFourForm />
        </div>
    )
}

export default StepOneFormContainer;