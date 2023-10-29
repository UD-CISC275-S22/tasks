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

// const [sampleSemester, setSampleSemester] = useState({
//     classList: [
//         /* your initial class list here */
//     ],
//     totalCredits: 0, // Update this based on the initial data
//     season: "Fall 2023"
// });

{
    /* <AddClass
    schedule={sampleSemester}
    newClass={{
        code: "PHYS101",
        title: "Physics for Beginners",
        credits: 4,
        preReq: [],
        instructor: "Professor Anderson"
    }}
    onAddClass={handleAddClass}
/>; */
}
