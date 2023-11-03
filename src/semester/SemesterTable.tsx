import React, { useState } from "react";
import sample from "../data/data.json";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";

const semesterExamples = sample.map(
    (sem): semester => ({
        ...sem,
        classList: sem.classList.map(
            (c): classes => ({
                ...c
            })
        )
    })
);
//setSemester should go in line 20. Unused var was causing issues.
export function SemesterTable(): JSX.Element {
    const [semesters] = useState<semester[]>(semesterExamples);
    return (
        <div className="semesterTable">
            <h2>Semester Schedule</h2>
            {semesters.map((sem, semIndex) => {
                return (
                    <div key={semIndex}>
                        <SemesterView
                            semester={sem}
                            clearSemester={function (id: number): void {
                                throw new Error("Function not implemented.");
                            }}
                        ></SemesterView>
                    </div>
                );
            })}
        </div>
    );
}
