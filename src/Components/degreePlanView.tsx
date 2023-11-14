import React, { useState } from "react";
import { degreePlan } from "../interfaces/degreePlan";
import { SingleMultipleSemester } from "./SingleMultipleSemester";
import { Views } from "../interfaces/viewProps";

export const degreePlanView = ({
    setCurrentView,
    setCurrentDegreePlan
}: {
    setCurrentView: (view: Views) => void;
    setCurrentDegreePlan: (degreePlan: degreePlan) => void;
}): JSX.Element => {
    const [semester, setSemester] = useState<degreePlan>();

    return <div className="Semester_display"></div>;
};
