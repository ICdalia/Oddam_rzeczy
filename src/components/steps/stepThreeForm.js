import "../stylesSteps.scss";
import ImportantThree from "./important3";
import StepThreeForm from "./stepThreeFormContainer";

function StepThreeFormContainer() {
    return (
        <div className="step_one_form_container">
            <ImportantThree/>
            <StepThreeForm/>
        </div>
    )
}

export default StepThreeFormContainer;