/* eslint-disable no-extra-parens */
import React from "react";
import { Button } from "react-bootstrap";
import { degreePlan } from "../interfaces/degreePlan";
import { Views } from "../interfaces/viewProps";

export interface DegreePlanViewProps {
    setCurrentView: (view: Views) => void;
    degreePlanList: degreePlan[];
    setDegreePlanList: (degreePlan: degreePlan[]) => void;
}

export const DegreePlanView = ({
    setCurrentView,
    degreePlanList,
    setDegreePlanList
}: DegreePlanViewProps): JSX.Element => {
    const [viewDegreePlan, setViewDegreePlan] = React.useState<
        degreePlan | undefined
    >(undefined);

    const degreePlanClick = (selectedPlan: degreePlan) => {
        setViewDegreePlan(selectedPlan);
    };

    const viewSemesterClick = () => {
        if (viewDegreePlan) {
            setCurrentView(Views.semestersView);
        }
    };

    const goBackClick = () => {
        setViewDegreePlan(undefined);
        setCurrentView(Views.degreePlanView);
    };

    const insertDegreePlan = () => {
        const updatedDegreePlans = [
            ...degreePlanList,
            {
                name: `Plan ${degreePlanList.length + 1}`,
                semesters: []
            }
        ];
        setDegreePlanList(updatedDegreePlans);
    };

    const removeDegreePlan = (plan: degreePlan) => {
        const updatedDegreePlans = degreePlanList.filter(
            (degreePlan) => degreePlan.name !== plan.name
        );
        setDegreePlanList(updatedDegreePlans);
    };

    return (
        <div>
            <ul>
                <li>
                    <Button onClick={insertDegreePlan}>
                        Create New Degree Plan
                    </Button>
                </li>
                {degreePlanList.map((plan) => (
                    <li key={plan.name}>
                        <Button onClick={() => degreePlanClick(plan)}>
                            {plan.name}
                        </Button>
                        <Button onClick={() => removeDegreePlan(plan)}>
                            Remove
                        </Button>
                    </li>
                ))}
            </ul>
            <Button onClick={viewSemesterClick}>View Semesters</Button>
            <Button onClick={goBackClick}>Go Back to Degree Plans</Button>
        </div>
    );
};
