import StepTwoForm from "./stepTwoForm.js";
import "../stylesSteps.scss";
import ImportantTwo from "./important2";

function StepTwoFormContainer() {
    return (
        <div className="step_one_form_container">
            <ImportantTwo/>
            <StepTwoForm/>
        </div>
    )
}

export default StepTwoFormContainer;