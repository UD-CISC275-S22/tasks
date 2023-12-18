import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { Button } from "react-bootstrap";

export function RemoveClass({
    schedule,
    classToDelete,
    onRemoveClass
}: {
    schedule: semester;
    classToDelete: classes;
    onRemoveClass: (updatedSchedule: semester) => void;
}): JSX.Element {
    function removeNewClass() {
        // Create a new array of semesters
        let updatedSchedule = { ...schedule };

        // Find the semester at the specified index (scheduleID)
        const semesterToUpdate = updatedSchedule;

        // Create a new array of classes for the updated semester
        const updatedClasses = [
            ...semesterToUpdate.classList.filter(
                (allClasses: classes): boolean =>
                    allClasses.title != classToDelete.title
            )
        ];

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

        onRemoveClass(updatedSchedule);
    }

    return (
        <div>
            <Button onClick={removeNewClass}>Remove Class</Button>
        </div>
    );
}
