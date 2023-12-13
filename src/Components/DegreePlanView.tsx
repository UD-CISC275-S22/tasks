/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { degreePlan } from "../interfaces/degreePlan";
import { Views } from "../interfaces/viewProps";
import { InsertDegreePlan, RemoveDegreePlan } from "./InsertRemoveDegreePlan";

export interface DegreePlanViewProps {
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
    degreePlanList: degreePlan[];
    setDegreePlanList: (degreePlan: degreePlan[]) => void;
}

export const DegreePlanView = ({
    setCurrentView,
    degreePlanList,
    setDegreePlanList
}: DegreePlanViewProps): JSX.Element => {
    const [viewDegreePlan, setViewDegreePlan] = useState<degreePlan>();

    function degreePlanClick(selectedPlan: degreePlan) {
        setViewDegreePlan(selectedPlan);
    }

    function viewSemesterClick() {
        if (viewDegreePlan) {
            setCurrentView(Views.semestersView);
        }
    }

    function goBackClick() {
        if (viewDegreePlan) {
            setViewDegreePlan(undefined);
        }
        setCurrentView(Views.degreePlanView);
    }

    return (
        <div>
            <ul>
                <InsertDegreePlan
                    setDegreePlanList={setDegreePlanList}
                    setCurrentView={setCurrentView}
                    degreePlanList={degreePlanList}
                />
                {degreePlanList.map((plan) => (
                    <li key={plan.name}>
                        <Button onClick={() => degreePlanClick(plan)}>
                            {plan.name}
                        </Button>
                        <RemoveDegreePlan
                            setDegreePlanList={setDegreePlanList}
                            removePlan={plan}
                            degreePlanList={degreePlanList}
                            setCurrentView={setCurrentView}
                        />
                    </li>
                ))}
            </ul>
            <Button onClick={viewSemesterClick}>View Semesters</Button>
            <Button onClick={goBackClick}>Go Back to Degree Plans</Button>
        </div>
    );
};
