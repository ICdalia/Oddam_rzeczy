import React, {createContext, useState} from "react";
import StepOneFormContainer from "./stepOneFormContainer";
import StepTwoFormContainer from "./stepTwoFormContainer";
import StepThreeFormContainer from "./stepThreeForm";

export const FromContext = createContext(null)

const Steps = () => {
    const [state, setState] = useState({
        step: 1
    });

    const getForm = () => {
        switch (state.step) {
            case 1:
                return <StepOneFormContainer />
            case 2:
                return <StepTwoFormContainer/>;
            case 3:
                return <StepThreeFormContainer/>
        }
    }

    return (
        <FromContext.Provider value={{ state, setState}}>

            {getForm()}


        </FromContext.Provider>
    )
}

export default Steps;