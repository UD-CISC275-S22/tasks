//task 1: shows a single semester (DONE)
//task 2: shows multiple semesters (DONE)
//task 3: clear out semester
//task 4: insert or remove a course in a semester

import React, { useState } from "react";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button } from "react-bootstrap";

//SemType: mostly here to change the semester type and show that there are these many options (can add Winter and Summer later)
const SemType = ["Fall", "Spring"];
//set the default semester to Fall
const DEFAULT_SEMTYPE = SemType[0];

//create an intial course for testing (will eventually replace this with actual courses)
const initialCourse: Course = {
    id: "CISC 275",
    name: "Intro to Software Engineering",
    description: "Sample description of CISC275",
    credits: 3,
    semester: "Both",
    department: "COE",
    requirements: ["CISC108"]
};
//now initial the array of courses for useState constant (that way you can use that state to iterate through a list of courses you pass it)
const initCourseArray: Course[] = [initialCourse];

export function ViewSemester(): JSX.Element {
    //need a state for an array of courses for fall and spring and the semestertype that the user wants to see (Fall or Spring Semester) and the number of semesters they want to view
    const [fallcourse] = useState<Course[]>(initCourseArray); //an array of courses (NOTE FOR MICHAEL: add back setFallCourses)
    const [springcourse] = useState<Course[]>(initCourseArray); //add back setSpringCourses later (NOTE FOR MICHAEL: add back setSpringCourses)
    const [SemesterType, setSemesterType] = useState<string>(DEFAULT_SEMTYPE); //set default to Fall
    const [SemCount, setSemCount] = useState<number>(1); //default is showing one semester, can do 1-2 (if more than 2 than that goes beyond a year) and can later go back to show 0 semesters

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions

    //functin to change number of semesters shown (can be either 1 or 2 only - can add 0 semesters later)
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
            newSemType = SemType[1]; //spring
        } else {
            newSemType = SemType[0]; //fall
        }
        setSemesterType(newSemType); //set the new semester type to display
    }

    //function to display ONLY the fall semester
    function fallSemester(): JSX.Element {
        return (
            <div className="Fall">
                <h1>Fall</h1>
                {fallcourse.map(
                    // eslint-disable-next-line no-extra-parens
                    (course: Course): JSX.Element => (
                        <div className="Course" key={course.id}>
                            <span key={course.id}>
                                {course.id} {course.credits} {course.department}{" "}
                                {course.name}
                            </span>
                        </div>
                    )
                )}
            </div>
        );
    }

    //function to show ONLY the spring semester
    function springSemester(): JSX.Element {
        return (
            <div className="Spring">
                <h1>Spring</h1>
                {springcourse.map(
                    // eslint-disable-next-line no-extra-parens
                    (course: Course): JSX.Element => (
                        <div className="Course" key={course.id}>
                            <span key={course.id}>
                                {course.id} {course.credits} {course.department}{" "}
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
                    {fallcourse.map(
                        // eslint-disable-next-line no-extra-parens
                        (course: Course): JSX.Element => (
                            <div className="Course" key={course.id}>
                                <span key={course.id}>
                                    {course.id} {course.credits}{" "}
                                    {course.department} {course.name}
                                </span>
                            </div>
                        )
                    )}
                </div>
                <div className="Spring">
                    <h1>Spring</h1>
                    {springcourse.map(
                        // eslint-disable-next-line no-extra-parens
                        (course: Course): JSX.Element => (
                            <div className="Course" key={course.id}>
                                <span key={course.id}>
                                    {course.id} {course.credits}{" "}
                                    {course.department} {course.name}
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
            return <div className="Semester">{fallSemester()}</div>;
        } else if (SemCount == 1 && SemesterType == "Spring") {
            return <div className="Semester">{springSemester()}</div>;
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
