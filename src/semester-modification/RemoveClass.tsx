import React from "react";
import { Button } from "react-bootstrap";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

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

        newSchedule.totalCredits = newSchedule.classList.reduce(
            (total: number, adding: classes) => total + adding.credits,
            0
        );
        onRemoveClass(newSchedule);
    }

    return <Button onClick={removeNewClass}>Remove Class</Button>;
}

//Paste function into file using RemoveClass
//updates a state with a semeter object to have the new updated list of classes
// function onRemoveClass(updatedSchedule: semester) {
//     setSampleSemester(updatedSchedule);
// }

// const [sampleSemester, setSampleSemester] = useState({
//     classList: [
//         /* your initial class list here */
//     ],
//     totalCredits: 0, // Update this based on the initial data
//     season: "Fall 2023"
// });

{
    /* <RemoveClass
    schedule={sampleSemester}
    removeName="Physics for Beginners"
    onRemoveClass={onRemoveClass}
/>; */
}
