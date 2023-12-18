import React from "react";
//import { useState } from "react";
import { SemesterTable } from "./semester/SemesterTable";
import { semester } from "./Interface/semester";

export function SwitchComponents({
    seeSemesterView,
    semesterExamples,
    setSemesters,
    currentPlan
}: {
    seeSemesterView: boolean;
    semesterExamples: semester[];
    setSemesters: (sems: semester[]) => void;
    currentPlan: string;
}): JSX.Element {
    if (seeSemesterView) {
        return (
            <SemesterTable
                semesters={semesterExamples}
                setSemesters={setSemesters}
                currentPlan={currentPlan}
            ></SemesterTable>
        );
    }
    return <div></div>;
}
