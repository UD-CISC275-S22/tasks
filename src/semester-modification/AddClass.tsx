import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { Button } from "react-bootstrap";

export function AddClass({
    schedule,
    newClass,
    onAddClass
}: {
    schedule: semester;
    newClass: classes;
    onAddClass: (updatedSchedule: semester) => void;
}): JSX.Element {
    function addNewClass() {
        // Create a new array of semesters
        let updatedSchedule = { ...schedule };

        // Find the semester at the specified index (scheduleID)
        const semesterToUpdate = updatedSchedule;

        // Create a new array of classes for the updated semester
        const updatedClasses = [...semesterToUpdate.classList, newClass];

        // Get new credit total
        const totalCredits = updatedClasses.reduce(
            (total: number, currentClass: classes) =>
                total + currentClass.credits,
            0
        );

        // Update the classList of the semester with the new array of classes
        semesterToUpdate.classList = updatedClasses;
        semesterToUpdate.totalCredits = totalCredits;

        // Update the schedule with the modified semester
        updatedSchedule = semesterToUpdate;

        onAddClass(updatedSchedule);
    }

    return (
        <div>
            <Button onClick={addNewClass}>Add Class</Button>
        </div>
    );
}

// <AddClass
//     schedule={exClass}
//     scheduleID={1}
//     newClass={addNewClass}
//     onAddClass={(updatedSchedule: semester[]): void => {
//         setexClass(updatedSchedule);
//     }}
// ></AddClass>;
