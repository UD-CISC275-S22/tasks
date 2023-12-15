//all prep stuff for courses will go in here and things like finding the course based off of an id
// import React, { useState } from "react";
//import { Button, Modal} from "react-bootstrap";
// import { useState } from "react";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "../App.css";
//import { Semester } from "../Interfaces/semester";
import courseListAll from "../data/AllCourseList.json";
import { Course, Department } from "../Interfaces/course";

/*
making a Course[] constant of the AllCourses json file
DON'T remake this courseList in another file. Just import this constant and you can copy it into a const if you want
then work on that list in that file (this acts more like an interface)
*/

export const courseList: Course[] = courseListAll.map(
    //remember you only need to deep copy data structures over
    (course): Course => ({
        ...course,
        semester: course.semester,
        department: course.department as Department,
        prereq: course.prereq,
        coreq: course.coreq,
        requirements: course.requirements
    })
);

//this is the default copy because course list is changed throughout. THIS LIST WILL REMAIN UNCHANGED - Malika
export const defaultCourseList: Course[] = courseListAll.map(
    //remember you only need to deep copy data structures over
    (course): Course => ({
        ...course,
        semester: course.semester,
        department: course.department as Department,
        prereq: course.prereq,
        coreq: course.coreq,
        requirements: course.requirements
    })
);

//sees if an id (passed in as a paramtetr) is in the total courseList - based on json file
export function findCourse(courseList: Course[], id: number): Course | null {
    const filteredList = courseList.filter((course) => course.id === id);
    if (filteredList.length > 1) {
        return null;
    } else if (filteredList.length == 0) {
        return null;
    } else {
        return filteredList[0];
    }
}

//updates courseList value (used for save changes button) - Malika
export const updateCourseList = (
    courseList: Course[],
    editedCourse: Course
): Course[] => {
    //find index of the course to be updated
    const index = courseList.findIndex(
        (course) => course.id === editedCourse.id
    );
    console.log("index in updateCourseList in course.tsx: ", index);

    //if course is found, update in courseList
    if (index !== -1) {
        courseList[index] = {
            ...editedCourse,
            semester: editedCourse.semester,
            department: editedCourse.department as Department,
            prereq: editedCourse.prereq,
            coreq: editedCourse.coreq,
            requirements: editedCourse.requirements
        };
    } else {
        console.error("Course not find in courseList");
    }
    return courseList;
};
