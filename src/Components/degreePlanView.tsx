import React, { useState } from "react";
import { degreePlan } from "../interfaces/degreePlan";
import { SingleMultipleSemester } from "./SingleMultipleSemester";
import { Views } from "../interfaces/viewProps";

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

    return <div className="Semester_display"></div>;
};
//map out degreePlanList
//when click on degreePlan, set currDegreePlan to which ever one we click on
//then switches view to semesterView

//extrafuction I might need to add is when someone goes back to degreeplan view,
//they have to save all the change you made and update the degreePlanView and update all degreePlanList
