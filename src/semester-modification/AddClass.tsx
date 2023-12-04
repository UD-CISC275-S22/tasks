import React from "react";
import { Button } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";

export function AddClass({
    schedule,
    semester,
    newClass,
    onAddClass
}: {
    schedule: semester[];
    semester: semester;
    newClass: classes;
    onAddClass: (updatedSchedule: semester[]) => void;
}): JSX.Element {
    function addClass() {
        // Create a new array of semesters
        const updatedSchedule: semester[] = [...schedule];

        // Find the index of the current semester
        const semesterIndex: number = updatedSchedule.findIndex(
            (sem: semester) => sem.id === semester.id
        );

        // Create a new array of classes for the updated semester
        const updatedClasses: classes[] = [
            ...updatedSchedule[semesterIndex].classList,
            newClass
        ];
        newClass.originalCode = newClass.code;
        newClass.originalTitle = newClass.title;
        newClass.originalCredits = newClass.credits;
        // Get new credit total
        const totalCredits: number = updatedClasses.reduce(
            (total: number, currentClass: classes) =>
                total + currentClass.credits,
            0
        );

        // Create a new semester object with the updated values
        const updatedSemester: semester = {
            ...updatedSchedule[semesterIndex],
            classList: updatedClasses,
            totalCredits: totalCredits
        };

        // Update the schedule with the modified semester
        updatedSchedule[semesterIndex] = updatedSemester;

        onAddClass(updatedSchedule);
    }

    return <Button onClick={addClass}>Add Class</Button>;
}
