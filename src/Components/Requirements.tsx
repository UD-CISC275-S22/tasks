/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { Degree } from "../Interfaces/degree";

//EXAMPLE usage of the requirements ts
import { CoreBS } from "../Interfaces/requirements";
import { capstone } from "../Interfaces/requirements";
import { labSciences } from "../Interfaces/requirements";
import { additionalReqs } from "../Interfaces/requirements";
import { ArtificialIntelligence } from "../Interfaces/requirements";
import { math } from "../Interfaces/requirements";

const [degree, setDegree] = useState<string>("AI");

/** Determines if a course is a pre */
function isPrereq(course1: Course, course2: Course): boolean {
    if (course1.id in course2.prereq) {
        return true;
    } else {
        return false;
    }
}

//EXAMPLE of a degree function
export function AI_Degree(): Degree {
    const name = degree;
    const totCredits = 124; //example total credits for this degree
    const concentration = "Artificial Intelligence and Robotics";
    
    return {
        name: name,
        concentration: concentration,
        credits: totCredits,
        ciscoreReq: [CoreBS[0], CoreBS[1]], //pick the courses according to this major from the CoreBS array
        capstoneReq: capstone,
        labReq: labSciences, //make sure you check if the degree has a lab science requirement
        additionalReq: additionalReqs, //this will change according to major so change this as neccessary (even input the actual array if needed)
        concentrationReq: ArtificialIntelligence, //select the array from the requirements.ts file that corresponds to the major
        probabilityReq: math, //this will vary, some may not have this so make it an empty array
        systemsReq: ["CISC437"], //again, will vary and change as necessary
        restrictedReq: ["CISC681"] //again, will vary and change as necessary
    };
}

/*
export function DataScience(): Degree {}
...keep going
*/

//purpose: ?
function num(name: string): number {
    return 4;
}

/* To determine if a course fulfills a degree requirement
"CISC220 is a required course for all degrees"
"The degree must have at least 3 restrcited electives */
function fulfillsDegreeReq(course: Course, degree: Degree): boolean {   
    if (course.title in 
        degree.capstoneReq 
        || degree.ciscoreReq 
        || degree.additionalReq 
        || degree.concentrationReq 
        || degree.labReq
        || degree.probabilityReq
        || degree.restrictedReq
        || degree.systemsReq) {
        /* 
        add in the functionality of you need this many credits in this field
        can do so by suming number of credits for each course within that section (ex. course1.credits + course2.credits, etc)
        then depending on the requirement type (can be done in if statements) then that shows if you met the requirement
        I might recommend that this be a seprate function all together though
        */
        return true;
    }
    return false;
}

export default function YourComponent() {
    return (
        <div>
            <h1>Degree Requirements</h1>
        </div>
    );
}
