import React from "react";
//import { useState } from "react";
import { SemesterTable } from "./semester/SemesterTable";
import { semester } from "./Interface/semester";

export function SwitchComponents({
    seeSemesterView,
    semesterExamples,
    setSemesters
}: {
    seeSemesterView: boolean;
    semesterExamples: semester[];
    setSemesters: (sems: semester[]) => void;
}): JSX.Element {
    if (seeSemesterView) {
        return (
            <SemesterTable
                semesters={semesterExamples}
                setSemesters={setSemesters}
            ></SemesterTable>
        );
    }
    return <div></div>;
}
