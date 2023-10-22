import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { dateTime } from "../Interface/dateTime";
import { semester } from "../Interface/semester";

//set up forms to enter information then press button to add information to schedule

//returns the class attempting to be added
function Adding(
    code: string,
    title: string,
    credits: number,
    preReq: string[],
    schedule: dateTime,
    location: string,
    instructor: string
): classes {
    const working: classes = {
        code: code,
        title: title,
        credits: credits,
        preReq: preReq,
        schedule: schedule,
        location: location,
        instructor: instructor
    };
    return working;
}
//button that takes answers from forms then runs Adding to create a new course
//after add the class to the end of the semester array
export function AddClass(): JSX.Element {
    return <div>Hello</div>;
}
