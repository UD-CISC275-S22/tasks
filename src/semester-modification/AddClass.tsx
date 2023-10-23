import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { dateTime } from "../Interface/dateTime";
import { semester } from "../Interface/semester";

//set up forms to enter information then press button to add information to schedule

//after add the class to the end of the semester array
export function AddClass(schedule: semester, newClass: classes): JSX.Element {
    function addNewClass() {
        const holder = schedule;
        holder.classList.push(newClass);

        schedule.classList = holder.classList;
    }

    return (
        <div>
            <Button onClick={addNewClass}>Add Class</Button>
        </div>
    );
}
