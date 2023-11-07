/* eslint-disable prettier/prettier */
//for visualization of semesters and altering the courses within them

import React, { useState } from "react";
import { courseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";

//create an intial course for testing (will eventually replace this with actual courses from a default setting) - from course.tsx
const COURSE_LIST = courseList;
//create initial semester for testing
const SEM1: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSE_LIST
};

//states as globals
const [fallSemester] = useState<Semester>(SEM1);
const [springSemester] = useState<Semester>(SEM1);
//will add more semesters later
const [SemesterType, setSemesterType] = useState<string>("Fall"); //set default to Fall for now
const [SemCount, setSemCount] = useState<number>(1); //default shows 1 semester

export function ViewSemester(): JSX.Element {

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions

    //functin to change number of semesters shown (can be either 1 or 2 only - can add 0 or more semesters later)
    function changeSemCount(): void {
        if (SemCount == 2) {
            setSemCount(1);
        } else {
            setSemCount(2);
        }
    }

    //function to change the semester type to display
    function changeSemester(): void {
        let newSemType = "Default";
        if (SemesterType == "Fall") {
            newSemType = "Spring";
        } else {
            newSemType = "Fall";
        }
        setSemesterType(newSemType); //set the new semester type to display
        /* ADD OTHER TYPES OF SEMESTERS LATER */
    }

    //function to display ONLY the fall semester
    function displayFall(): JSX.Element {
        return (
            <div className="Fall">
                <h1>Fall</h1>
                {fallSemester.courseList.map(
                    // eslint-disable-next-line no-extra-parens
                    (course: Course): JSX.Element => (
                        <div className="Course" key={course.id}>
                            <span key={course.id}>
                                {course.title}{" - "}{course.name}
                            </span>
                        </div>
                    )
                )}
            </div>
        );
    }

    //function to show ONLY the spring semester
    function displaySpring(): JSX.Element {
        return (
            <div className="Spring">
                <h1>Spring</h1>
                {springSemester.courseList.map(
                    // eslint-disable-next-line no-extra-parens
                    (course: Course): JSX.Element => (
                        <div className="Course" key={course.id}>
                            <span key={course.id}>
                                {course.title}{" - "}{course.name}
                            </span>
                        </div>
                    )
                )}
            </div>
        );
    }

    //function to display both semesters
    function displayBoth(): JSX.Element {
        return (
            <div className="Semester">
                <div className="Fall">
                    <h1>Fall</h1>
                    {fallSemester.courseList.map(
                        // eslint-disable-next-line no-extra-parens
                        (course: Course): JSX.Element => (
                            <div className="Course" key={course.id}>
                                <span key={course.id}>
                                    {course.title}{" - "}{course.name}
                                </span>
                            </div>
                        )
                    )}
                </div>
                <div className="Spring">
                    <h1>Spring</h1>
                    {springSemester.courseList.map(
                        // eslint-disable-next-line no-extra-parens
                        (course: Course): JSX.Element => (
                            <div className="Course" key={course.id}>
                                <span key={course.id}>
                                    {course.title}{" - "}{course.name}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }

    //function to handle displaying semesters
    function OneorTwo(): JSX.Element {
        if (SemCount == 1 && SemesterType == "Fall") {
            return <div className="Semester">{displayFall()}</div>;
        } else if (SemCount == 1 && SemesterType == "Spring") {
            return <div className="Semester">{displaySpring()}</div>;
        } else {
            return displayBoth();
        }
    }

    //actual return for the tsx file to App.tsx
    return (
        <div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            {OneorTwo()}
        </div>
    );
}
