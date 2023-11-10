import React from "react";
//import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { SemesterView } from "./SemesterView";

export function SemesterTable({
    semesters,
    setSemesters
}: {
    semesters: semester[];
    setSemesters: (sems: semester[]) => void;
}): JSX.Element {
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
