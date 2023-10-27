/* eslint-disable prettier/prettier */
//task 1: establish that a course fulfills a degree requirement
//task 2: establish that a course meets another course's prerequisite

import React from "react";
import degreeList from "../data/degreeList.json";
import courseList from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";
import { Degree } from "../Interfaces/degree";

/** Determines if a course is a pre */
function isPrereq(course1: Course, course2: Course): boolean {
    if (course1.id in course2.prereq) {
        return true;
    } else {
        return false;
    }
}

/* To determine if a course fulfills a degree requirement
"CISC220 is a required course for all degrees"
"The degree must have at least 3 technical electives */
// function degreeReq() {}

export default function YourComponent() {
    // Use the isPrereq function and courses data as needed
    return (
        <div>
            <h1>Degree Requirements</h1>
        </div>
    );
}
