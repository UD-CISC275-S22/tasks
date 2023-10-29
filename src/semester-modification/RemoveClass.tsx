import React from "react";
import { Button } from "react-bootstrap";
import { semester } from "../Interface/semester";

export function RemoveClass({
    schedule,
    removeName,
    onRemoveClass
}: {
    schedule: semester;
    removeName: string;
    onRemoveClass: (updatedSchedule: semester) => void;
}): JSX.Element {
    function removeNewClass() {
        const newSchedule = {
            ...schedule,
            classList: schedule.classList.filter(
                (course) => course.title !== removeName
            )
        };
        onRemoveClass(newSchedule);
    }

    return <Button onClick={removeNewClass}>Remove Class</Button>;
}

//Paste function into file using RemoveClass
// function onRemoveClass(updatedSchedule: semester) {
//     setSampleSemester(updatedSchedule);
// }
