/* eslint-disable prettier/prettier */
//for visualization of semesters and altering the courses within them

import React, { useState } from "react";
import "../App.css";
import { courseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Form, Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
/*import { Degree } from "../Interfaces/degree";*/

import sample from "../data/AllCourseList.json";

//create an intial course for testing (will eventually replace this with actual courses from a default setting) - from course.tsx
const COURSE_LIST = courseList;
//create initial semester for testing
const SEM1: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSE_LIST
};
const SEM2: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSE_LIST
};
const DEFAULT_COURSE = sample[0].title;

export function ViewSemester(): JSX.Element {
    //states as globals
    const [fallSemester, setFallSemester] = useState<Semester>({ ...SEM1 });
    const [springSemester, setSpringSemester] = useState<Semester>({ ...SEM2 });
    //(MM) NOTE: Using this state in order to create a drop down of Courses
    //changed course.ts's department type due to error
    const [currCourse, setCurrCourse] = useState<string>(DEFAULT_COURSE);
    //will add more semesters later
    const [SemesterType, setSemesterType] = useState<string>("Fall"); //set default to Fall for now
    const [SemCount, setSemCount] = useState<number>(1); //default shows 1 semester

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions
    function updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrCourse(event.target.value);
    }

    function dropClass() {
        // looks through the course list in the current semester and filters out the
        // course with the same value as "courseId"
        if (SemCount === 1 && SemesterType === "Fall") {
            setFallSemester({
                ...fallSemester,
                courseList: fallSemester.courseList.filter(
                    (course: Course) => currCourse !== course.title
                )
            });
        } else if (SemCount === 1 && SemesterType !== "Spring") {
            setSpringSemester({
                ...springSemester,
                courseList: springSemester.courseList.filter(
                    (course: Course) => currCourse === course.title
                )
            });
        } else if (SemCount === 2) {
            //filtering the class from both semesters
            setFallSemester({
                ...fallSemester,
                courseList: fallSemester.courseList.filter(
                    (course: Course) => currCourse !== course.title
                )
            });
            setSpringSemester({
                ...springSemester,
                courseList: springSemester.courseList.filter(
                    (course: Course) => currCourse !== course.title
                )
            });
        }
    }

    function clearSemsterCourses() {
        //function to clear all courses within a semester
        //checks the current semester type and semester count
        if (SemCount === 1 && SemesterType === "Fall") {
            setFallSemester({ ...fallSemester, courseList: [] });
        } else if (SemCount === 1 && SemesterType === "Spring") {
            setSpringSemester({ ...springSemester, courseList: [] });
        } else if (SemCount === 2) {
            //if both coursees are displayed empty both courses regardless.
            //setting both course list to empty
            setFallSemester({ ...fallSemester, courseList: [] });
            setSpringSemester({ ...springSemester, courseList: [] });
        }
    }

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
                                {course.title}
                                {" - "}
                                {course.name}
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
                                {course.title}
                                {" - "}
                                {course.name}
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
                                    {course.title}
                                    {" - "}
                                    {course.name}
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
                                    {course.title}
                                    {" - "}
                                    {course.name}
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
            <div>
                <Button onClick={changeSemCount}>Show One Semester</Button>
                <Button onClick={changeSemester}>
                    Show Different Semester
                </Button>
                {OneorTwo()}
            </div>
            <div>
                <Button onClick={clearSemsterCourses}>
                    Remove All Courses
                </Button>
            </div>
            <div>
                <Form.Group controlId="currentCourse">
                    <Form.Label>Select A Course</Form.Label>
                    <Form.Select value={currCourse} onChange={updateCurrCourse}>
                        {COURSE_LIST.map((courseName: Course) => (
                            <option
                                key={courseName.title}
                                value={courseName.title}
                            >
                                {courseName.title}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button onClick={dropClass}>Remove Class</Button>
            </div>
        </div>
    );
}
