//for visualization of semesters and altering the courses within them

import React, { useState } from "react";
import "../App.css";
import { courseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
//import { Degree } from "../Interfaces/degree";
import sample from "../data/AllCourseList.json";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";

//A variable able to use for the list of courses within the JSON file.
const COURSE_LIST = courseList;
//create initial semester for testing
export const SEM1: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSE_LIST
};
export const SEM2: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSE_LIST
};

//a default course variable; uses the first course within the JSON file.
const DEFAULT_COURSE = sample[0].title;

export function ViewSemester(): JSX.Element {
    //states as globals
    const [fallSemester, setFallSemester] = useState<Semester>({ ...SEM1 });
    const [springSemester, setSpringSemester] = useState<Semester>({ ...SEM2 });
    //(MM) NOTE: Using this state in order to create a drop down of Courses
    //and set which course the user would like to add or remove
    // updated through updateCurrCourse and drop down element
    //MERGE CONFLICT (discuss after MVP): changed course.ts's department type due to error
    const [currCourse, setCurrCourse] = useState<string>(DEFAULT_COURSE);
    //will add more semesters later
    const [SemesterType, setSemesterType] = useState<string>("Fall"); //can be "Fall", "Spring" or "Both"
    const [SemCount, setSemCount] = useState<number>(1); //default shows 1 semester
    //const for clearsemesters modal visibility
    const [clicked, setClicked] = useState<boolean>(false);
    //const for target semester you want to interact with
    const [targetSem, setTargetSem] = useState<string>("Fall");

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions
    function updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrCourse(event.target.value);
    }

    // function removes all courses!
    function clearSemsterCourses() {
        //function to clear all courses within a semester
        //checks the current semester type and semester count
        if (targetSem === "Fall") {
            setFallSemester({ ...fallSemester, courseList: [] });
        } else if (targetSem === "Spring") {
            setSpringSemester({ ...springSemester, courseList: [] });
        } else if (targetSem === "Both") {
            setFallSemester({ ...fallSemester, courseList: [] });
            setSpringSemester({ ...springSemester, courseList: [] });
        }
        handleClose();
    }

    //functions for visibility of the modal of clearing semesters (the warning)
    function handleClose() {
        setClicked(false);
    }

    function handleShow() {
        setClicked(true);
    }

    function dropClass() {
        // looks through the course list in the current semester and filters out the
        // course with the same "Title" as the state "currCourse"
        // **refer to "currCourse" documentation for more info **
        if (targetSem === "Fall") {
            setFallSemester({
                ...fallSemester,
                courseList: fallSemester.courseList.filter(
                    (course: Course) => currCourse !== course.title
                )
            });
        } else if (targetSem === "Spring") {
            setSpringSemester({
                ...springSemester,
                courseList: springSemester.courseList.filter(
                    (course: Course) => currCourse !== course.title
                )
            });
        } else if (targetSem === "Both") {
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

    function addClass() {
        const idea = COURSE_LIST.findIndex(
            (course: Course) => course.title === currCourse
        );
        //checks if it's already there
        //if exists stays as -1 then the course isn't already in the semester list and should be added otherwise nothing happens
        let exists = -1;
        if (targetSem === "Fall") {
            exists = fallSemester.courseList.findIndex(
                (course: Course) => course.id === COURSE_LIST[idea].id
            );
            if (exists === -1) {
                setFallSemester({
                    ...fallSemester,
                    courseList: [...fallSemester.courseList, COURSE_LIST[idea]]
                });
            }
        }
        if (targetSem === "Spring") {
            exists = springSemester.courseList.findIndex(
                (course: Course) => course.id === COURSE_LIST[idea].id
            );
            if (exists === -1) {
                setSpringSemester({
                    ...springSemester,
                    courseList: [
                        ...springSemester.courseList,
                        COURSE_LIST[idea]
                    ]
                });
            }
        } else if (targetSem === "Both") {
            //filtering the class from both semesters
            setFallSemester({
                ...fallSemester,
                courseList: [...fallSemester.courseList, COURSE_LIST[idea]]
            });
            setSpringSemester({
                ...springSemester,
                courseList: [...springSemester.courseList, COURSE_LIST[idea]]
            });
        }
    }

    //function to change number of semesters shown (can be either 1 or 2 only - can add 0 or more semesters later)
    function changeSemCount(): void {
        if (SemCount == 2) {
            setSemCount(1);
            setSemesterType("Fall"); //default is fall semester
        } else {
            setSemCount(2);
            setSemesterType("Both");
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
                <div>
                    <ClearSemester
                        clearSemesterCourses={clearSemsterCourses}
                        show={clicked}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    ></ClearSemester>
                </div>
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
                <div>
                    <ClearSemester
                        clearSemesterCourses={clearSemsterCourses}
                        show={clicked}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    ></ClearSemester>
                </div>
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
                    <DropAdd
                        dropClass={dropClass}
                        addClass={addClass}
                        updateCurrCourse={updateCurrCourse}
                        currCourse={currCourse}
                        Course_List={COURSE_LIST}
                    ></DropAdd>
                    <ClearSemester
                        clearSemesterCourses={clearSemsterCourses}
                        show={clicked}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    ></ClearSemester>
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
                    <DropAdd
                        dropClass={dropClass}
                        addClass={addClass}
                        updateCurrCourse={updateCurrCourse}
                        currCourse={currCourse}
                        Course_List={COURSE_LIST}
                    ></DropAdd>
                    <ClearSemester
                        clearSemesterCourses={clearSemsterCourses}
                        show={clicked}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    ></ClearSemester>
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
            <hr></hr>
            {/*
            <div>
                <Form.Group controlId="currentCourse">
                    <Form.Label>Select A Course</Form.Label>
                    <Form.Select value={currCourse} onChange={updateCurrCourse}>
                        {
                            //Needed to disable prettier here because there was an "extra parenths" error that couldn't be resolved by any means. Will need to ask the professor but we wanted to showcase the funcitonality of the dropdown for the MVP
                            // eslint-disable-next-line no-extra-parens
                            COURSE_LIST.map((courseName: Course) => (
                                <option
                                    key={courseName.title}
                                    value={courseName.title}
                                >
                                    {courseName.title}
                                </option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Button onClick={dropClass}>Remove Class</Button>
                <Button onClick={addClass}>Add Class</Button>
            </div>
                    */}
        </div>
    );
}
