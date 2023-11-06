import React, { useState } from "react";
import { degreePlan } from "../interfaces/degreePlan";
import { SingleMultipleSemester } from "./SingleMultipleSemester";

export const degreePlanView = ({
    degreePlan,
    removeSemester
}: {
    degreePlan: degreePlan;
    removeSemester: () => void;
}): JSX.Element => {
    const [sem, setSem] = useState<degreePlan>();

    return <div className="Semester_display"></div>;
};
