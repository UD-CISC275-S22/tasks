import React, { useState } from "react";
import sample from "../data/data.json";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { dateTime } from "../Interface/dateTime";
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

export function SemesterTable(): JSX.Element {
    const [semesters, setSemesters] = useState<semester[]>(semesterExamples);

    function clearSemester(id: number): void {
        const semesterIndex = semesters.findIndex(
            (semester: semester): boolean => semester.id === id
        );
        const s_copy = semesters.map((sem) => ({
            ...sem,
            classList: [...sem.classList]
        }));
        s_copy.splice(semesterIndex, 1);
        setSemesters(s_copy);
    }

    return (
        <div className="semesterTable">
            <h2>Semester Schedule</h2>
            {semesters.map((sem) => {
                return (
                    <SemesterView
                        key={sem.id}
                        semester={sem}
                        clearSemester={clearSemester}
                    ></SemesterView>
                );
            })}
        </div>
    );
}
