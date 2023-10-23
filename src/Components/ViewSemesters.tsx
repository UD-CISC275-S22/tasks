//task 1: shows a single semester
//task 2: shows multiple semesters
//task 3: clear out semester
//task 4: insert or remove a course in a semester

import React, { useState } from "react";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button } from "react-bootstrap";

//SemType: so that we can know which semester user wants to see
type SemType = "Fall" | "Spring";
//create the cycle: Fall -> Spring and Spring -> Fall
const SEMTYPE_TRANSITION: Record<SemType, SemType> = {
    Fall: "Spring",
    Spring: "Fall"
};

//create an intial course
const initialCourse: Course = {
    id: "CISC 275",
    name: "Intro to Software Engineering",
    description: "Sample description of CISC275",
    credits: 3,
    semester: "Both",
    department: "COE",
    requirement: ["CISC108"]
};
//now initial the array of courses for useState constant (that way you can use that state to iterate through a list of courses you pass it)
const initCourseArray: Course[] = [initialCourse];

//actual function return below
export function showSingle(): JSX.Element {
    //need a state for an array of courses and the semestertype that the user wants to see (Fall or Spring Semester)
    const [course, setCourse] = useState<Course[]>(initCourseArray); //an array of courses
    const [SemesterType, setSemesterType] = useState<SemType>("Fall"); //a SemType: which is a string ("Fall" or "Spring")

    //function to change the array of courses to display
    function changeCourses(): void {
        if (SemesterType == "Fall") {
            setCourse(initCourseArray);
            /*will need to eventually change this such that the function creates a list of courses for fall and spring
            semesters separately. Ex. if you want a fall semester to have x, y, z classes, this function would do that*/
        } else {
            setCourse(initCourseArray); //for spring semester
        }
    }

    //function to change the semester type to display
    function changeSemester(): void {
        const newSemType = SEMTYPE_TRANSITION[SemesterType]; //will automatically cycle through to the next semester in the calender year
        setSemesterType(newSemType); //set the new semester type to display
        changeCourses();
    }

    return (
        <div>
            <Button onClick={changeSemester}>Change Semester</Button>
            <div className="Semester">
                {SemesterType == "Fall" ? <h1>Fall</h1> : <h1>Spring</h1>}
                {course.map(
                    // eslint-disable-next-line no-extra-parens
                    (course: Course): JSX.Element => (
                        <span key={course.id}>Course.id</span>
                    )
                )}
            </div>
        </div>
    );
}
