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
        const updatedSchedule = { ...schedule };
        updatedSchedule.classList = updatedSchedule.classList.concat(newClass);
        onAddClass(updatedSchedule);
    }

    return (
        <div>
            <Button onClick={addNewClass}>Add Class</Button>
        </div>
    );
}
//Paste function into file using AddClass
//updates a state with a semeter object to have the new updated list of classes
// function onAddClass(updatedSchedule: semester) {
//     setSampleSemester(updatedSchedule);
// }
