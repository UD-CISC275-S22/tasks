/* eslint-disable prettier/prettier */
//task 1: establish that a course fulfills a degree requirement
//task 2: establish that a course meets another course's prerequisite

import React, { useState } from "react";
import degreeList from "../data/degreeList.json";
import courseListAll from "../data/AllCourseList.json";
import { Course, Department } from "../Interfaces/course";
import { Degree } from "../Interfaces/degree";

const [degree, setDegree] = useState<string>("AI");

/** Determines if a course is a pre */
function isPrereq(course1: Course, course2: Course): boolean {
    if (course1.id in course2.prereq) {
        return true;
    } else {
        return false;
    }
}

/*
export function AI_Degree(): Degree {
    const name = degree;
    //stuff below is for testing purposes - delete when making actual function
    /*const credits = 4;
    const arr = [];
    if (credits > 3) {
        arr[0] = "hi";
    }
    
    return {
        name: name,
        credits: //input credits for degree,
        //continue
    };
}

export function DataScience(): Degree {
    const name = degree; //this does not change: degree is our useState variable
    //here is where we will have functions determining the required courses (use the Requirements.ts file to extract id's from the array)
    //make sure you call the id plucker for the courses
    return {
        //write all the fields for a Degree type
    };
}


//keep going for each degree

export function findCourse(courseList: string[], id: number): Course | null {

}
*/

function num(name: string): number {
    return 4;
}
/* To determine if a course fulfills a degree requirement
"CISC220 is a required course for all degrees"
"The degree must have at least 3 restrcited electives */

function fulfillsDegreeReq(course: Course, degree: Degree): boolean {   
    if (course.id in 
        degree.capstoneReq 
        || degree.ciscoreReq 
        || degree.additionalReq 
        || degree.concentrationReq 
        || degree.labReq
        || degree.probabilityReq
        || degree.restrictedReq
        || degree.systemsReq){
        return true;
    }
    return false;
}

//ADD FUNCTIONS FOR EACH DEGREE BASED ON STATE
//ADD ID PULL FUNCTION (TAKES ID AS INPUT AND OUTPUTS THE COURSE ITSELF (OF COURSE TYPE))

export default function YourComponent() {
    // Use the isPrereq function and courses data as needed
    return (
        <div>
            <h1>Degree Requirements</h1>
        </div>
    );
}
