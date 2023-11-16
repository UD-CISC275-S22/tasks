//all prep stuff for courses will go in here and things like finding the course based off of an id
//import React from "react";
//import { Button, Modal} from "react-bootstrap";
// import { useState } from "react";
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

//sees if an id (passed in as a paramtetr) is in the total courseList - based on json file
export function findCourse(courseList: Course[], id: number): Course | number {
    const filteredList = courseList.filter((course) => course.id === id);
    if (filteredList.length > 1) {
        return 0;
    } else if (filteredList.length == 0) {
        return 0;
    } else {
        return filteredList[0];
    }
}

//updates courseList value (used for save changes button) - Malika
export const updateCourseList = (
    courseList: Course[],
    editedCourse: Course
): void => {
    //find index of the course to be updated
    const index = courseList.findIndex(
        (course) => course.id === editedCourse.id
    );

    //if course is found, update in courseList
    if (index !== -1) {
        courseList[index] = {
            ...editedCourse,
            department: editedCourse.department as Department
        };
    } else {
        console.error("Course not found in courseList");
    }
};
