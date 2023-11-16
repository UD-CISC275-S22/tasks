import React, { useState } from "react";
import { degreePlan } from "../interfaces/degreePlan";
import { SingleMultipleSemester } from "./SingleMultipleSemester";
import { Views } from "../interfaces/viewProps";
import { Button } from "react-bootstrap";

export const degreePlanView = ({
    setCurrentView,
    setCurrentDegreePlan,
    degreePlanList
}: {
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
    degreePlanList: degreePlan[];
}): JSX.Element => {
    const [semester, setSemester] = useState<degreePlan>();

    function DegreePlanClick(selectedPlan: degreePlan) {
        setSemester(selectedPlan);
    }

    function viewSemesterClick() {
        if (semester) {
            //setCurrentDegreePlan(semester);
            setCurrentView(Views.semestersView);
        }
    }
    function goBackClick() {
        if (semester) {
            //setSemester({});
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
