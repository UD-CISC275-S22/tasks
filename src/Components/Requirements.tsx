export {};
//import React, { useState } from "react";
//import Course from "./draggingCourses";
//import { Plan } from "../Interfaces/plan";

//const [plan, setPlan] = useState<Plan>(); //add back set degree

//Determines if a course is a prereq of another
/*function isPrereq(course1: Course, course2: Course): boolean {
    if (course1.title in course2.prereq) {
        return true;
    } else {
        return false;
    }
}

//EXAMPLE of a degree function
/*
export function AI(): Plan {

}
*/

/*
export function DataScience(): Plan {}
...keep going
*/

/* To determine if a course fulfills a degree requirement
"CISC220 is a required course for all degrees"
"The degree must have at least 3 restrcited electives 

function fulfillsDegreeReq(course: Course, degree: Degree): boolean {
    if (
        course.title in degree.capstoneReq ||
        degree.ciscoreReq ||
        degree.additionalReq ||
        degree.concentrationReq ||
        degree.labReq ||
        degree.probabilityReq ||
        degree.restrictedReq ||
        degree.systemsReq
    ) {
        /*add in the functionality of you need this many credits in this field
        can do so by suming number of credits for each course within that section (ex. course1.credits + course2.credits, etc)
        then depending on the requirement type (can be done in if statements) then that shows if you met the requirement
        I might recommend that this be a seprate function all together though

        return true;
    }
    return false;
}*/
//COMMENTED OUT FOR PRETTIER ERRORS - PUT BACK AFTER SUBMITTING MVP

/*
export default function YourComponent() {
    return (
        <div>
            <h1>Degree Requirements</h1>
        </div>
    );
}
*/
