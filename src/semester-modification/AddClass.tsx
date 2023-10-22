import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { dateTime } from "../Interface/dateTime";

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

// export function AddClass(schedule: schedule): JSX.Element {
//     return <div>Hello</div>;
// }
