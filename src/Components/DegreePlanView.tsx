/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { degreePlan } from "../interfaces/degreePlan";
//import { SingleMultipleSemester } from "./SingleMultipleSemester";
import { Views } from "../interfaces/viewProps";
import { Button } from "react-bootstrap";
interface degreePlanViewProps {
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
    degreePlanList: degreePlan[];
}
export const DegreePlanView = ({
    setCurrentView,
    //setCurrentDegreePlan,
    degreePlanList
}: degreePlanViewProps): JSX.Element => {
    const [viewDegreePlan, setviewDegreePlan] = useState<degreePlan>();

    function DegreePlanClick(selectedPlan: degreePlan) {
        setviewDegreePlan(selectedPlan);
    }

    function viewSemesterClick() {
        if (viewDegreePlan) {
            //viewDegreePlan(vi);
            setCurrentView(Views.semestersView);
        }
    }
    function goBackClick() {
        if (viewDegreePlan) {
            //viewDegreePlan({});
        }
        setCurrentView(Views.degreePlanView);
    }

    return (
        <div>
            <ul>
                {degreePlanList.map((plan) => (
                    <li key={plan.name}>
                        <Button onClick={() => DegreePlanClick(plan)}>
                            {plan.name}
                        </Button>
                    </li>
                ))}
            </ul>
            <Button onClick={viewSemesterClick}>View Semesters</Button>
            <Button onClick={goBackClick}>Go Back to Degree Plans</Button>
        </div>
    );
};
//map out degreePlanList
//when click on degreePlan, set currDegreePlan to which ever one we click on -
//then switches view to semesterView

//extrafuction I might need to add is when someone goes back to degreeplan view,
//they have to save all the change you made and update the degreePlanView and update all degreePlanList

//try to add clearSemesters into SingleMutipleSemesters
