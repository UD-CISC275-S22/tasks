/* eslint-disable @typescript-eslint/no-unused-vars */
//for visualization of semesters and altering the courses within them

import React, { useState } from "react";
import "../App.css";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
//import sample from "../data/AllCourseList.json";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
import { Plan } from "../Interfaces/plan";
import { AI } from "./plan";
import { courseList } from "./course";

const COURSE_LIST = courseList; //list of all the courses
const AI_Plan = AI(); //the actual AI plan itself
const AI_Semesters = AI_Plan.semesters; //the semesters for the AI plan
const DEFAULT_COURSE = AI_Semesters[0].courseList[0].title;

export function ViewSemester(): JSX.Element {
    const [plan, setPlan] = useState<Plan>(AI_Plan); //The default plan (for now)
    const [semesters, setSemesters] = useState<Semester[]>(AI_Semesters); //the default semesters (for now)
    const [currCourse, setCurrCourse] = useState<string>(DEFAULT_COURSE);
    const [SemesterType, setSemesterType] = useState<string>("Fall"); //can be "Fall", "Spring" or "Both"
    const [SemCount, setSemCount] = useState<number>(1); //default shows 1 semester
    const [clicked, setClicked] = useState<boolean>(false);
    const [targetSem, setTargetSem] = useState<string>("Fall"); //fall or spring only
    const [targetYear, setTargetYear] = useState<number>(1);

    //Here is where you can add your add courses and remove courses functions
    function updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrCourse(event.target.value);
    }

    function index(): number {
        //fall semesters will always be index 0,2,4,6 in the semesters state
        //spring semesters will always be index 1,3,5,7 in the semesters state
        let index = 0;
        if (targetYear === 1) {
            if (targetSem === "Fall") {
                index = 0;
            } else if (targetSem === "Spring") {
                index = 1;
            }
        } else if (targetYear === 2) {
            if (targetSem === "Fall") {
                index = 2;
            } else if (targetSem === "Spring") {
                index = 3;
            }
        } else if (targetYear === 3) {
            if (targetSem === "Fall") {
                index = 4;
            } else if (targetSem === "Spring") {
                index = 5;
            }
        } else if (targetYear === 4) {
            if (targetSem === "Fall") {
                index = 6;
            } else if (targetSem === "Spring") {
                index = 7;
            }
        }
        return index;
    }

    // function removes all courses!
    function clearSemesterCourses() {
        const idx = index();
        const newSemester = semesters;
        newSemester[idx].courseList = [];

        //function to clear all courses within a semester
        setSemesters(newSemester);
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
        const idx = index();
        const newSemester = semesters;
        const newClasses = newSemester[idx].courseList.filter(
            (course: Course) => currCourse !== course.title
        );
        newSemester[idx].courseList = newClasses;
        // looks through the course list in the current semester and filters out the
        // course with the same "Title" as the state "currCourse"
        // **refer to "currCourse" documentation for more info **
        setSemesters(newSemester);
    }

    function addClass() {
        const idx = index();
        const newSemester = semesters;
        const newClasses = newSemester[idx].courseList;
        //idea was a little connfusing for the variable name so we renamed it choiceIdx and choice is the actual course data structure
        const choiceIdx = COURSE_LIST.findIndex(
            (course: Course) => course.title === currCourse
        );
        const choice = COURSE_LIST[choiceIdx];
        //checks if it's already there
        //if exists stays as -1 then the course isn't already in the semester list and should be added otherwise nothing happens

        let exists = -1;
        exists = newClasses.findIndex(
            (course: Course) => course.id === COURSE_LIST[choiceIdx].id
        );

        if (exists !== -1) {
            newClasses.push(choice);
        }

        newSemester[idx].courseList = newClasses;
        setSemesters(newSemester);
    }

    //function to change number of semesters shown (can be either 1 or 2 only - can add 0 or more semesters later)
    function changeSemCount(): void {
        if (SemCount === 2) {
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
        setTargetSem("Fall");
        const idx = index();
        //an array of courses in the plan's semester (ex. fall of year 1)
        const fallCourses = semesters[idx].courseList;

        return (
            <div className="Fall">
                <h1>Fall Year {targetYear}</h1>
                {fallCourses.map(
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
                    <DropAdd
                        dropClass={dropClass}
                        addClass={addClass}
                        updateCurrCourse={updateCurrCourse}
                        currCourse={currCourse}
                        Course_List={fallCourses}
                    ></DropAdd>
                    <ClearSemester
                        clearSemesterCourses={clearSemesterCourses}
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
        setTargetSem("Spring");
        const idx = index();
        //an array of courses in the plan's semester (ex. spring of year 1)
        const springCourses = semesters[idx].courseList;

        return (
            <div className="Spring">
                <h1>Spring Year {targetYear}</h1>
                {springCourses.map(
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
                    <DropAdd
                        dropClass={dropClass}
                        addClass={addClass}
                        updateCurrCourse={updateCurrCourse}
                        currCourse={currCourse}
                        Course_List={springCourses}
                    ></DropAdd>
                    <ClearSemester
                        clearSemesterCourses={clearSemesterCourses}
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
        setTargetSem("Spring");
        let idx = index();
        //an array of courses in the plan's semester (ex. spring of year 1)
        const springCourses = semesters[idx].courseList;

        setTargetSem("Fall");
        idx = index();
        //an array of courses in the plan's semester (ex. fall of year 1)
        const fallCourses = semesters[idx].courseList;

        return (
            <div>
                <div className="Spring">
                    <h1>Spring Year {targetYear}</h1>
                    {springCourses.map(
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
                        <DropAdd
                            dropClass={dropClass}
                            addClass={addClass}
                            updateCurrCourse={updateCurrCourse}
                            currCourse={currCourse}
                            Course_List={springCourses}
                        ></DropAdd>
                        <ClearSemester
                            clearSemesterCourses={clearSemesterCourses}
                            show={clicked}
                            handleClose={handleClose}
                            handleShow={handleShow}
                        ></ClearSemester>
                    </div>
                </div>
                <div className="Fall">
                    <h1>Fall Year {targetYear}</h1>
                    {fallCourses.map(
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
                        <DropAdd
                            dropClass={dropClass}
                            addClass={addClass}
                            updateCurrCourse={updateCurrCourse}
                            currCourse={currCourse}
                            Course_List={fallCourses}
                        ></DropAdd>
                        <ClearSemester
                            clearSemesterCourses={clearSemesterCourses}
                            show={clicked}
                            handleClose={handleClose}
                            handleShow={handleShow}
                        ></ClearSemester>
                    </div>
                </div>
            </div>
        );
        /*
        return (
            <div>
                <div className="Semester">{displayFall()}</div>
                <div className="Semester">{displaySpring()}</div>
            </div>
        );
        */
    }

    //function to handle displaying semesters
    function OneorTwo(): JSX.Element {
        if (SemCount === 1 && targetSem === "Fall") {
            return <div className="Semester">{displayFall()}</div>;
        } else if (SemCount === 1 && targetSem === "Spring") {
            return <div className="Semester">{displaySpring()}</div>;
        } else {
            return displayBoth();
        }
    }
    //function that displays the entire plan based on the year
    function displayPlan(): JSX.Element {
        setTargetYear(1);
        const firstYear = displayBoth();
        setTargetYear(2);
        const secondYear = displayBoth();
        setTargetYear(3);
        const thirdYear = displayBoth();
        setTargetYear(4);
        const fourthYear = displayBoth();
        return (
            <div>
                {firstYear}
                {secondYear}
                {thirdYear}
                {fourthYear}
            </div>
        );
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
                <Button onClick={dropClass}>Remove Course</Button>
                <Button onClick={addClass}>Add Course</Button>
            </div>
            */}
        </div>
    );
}
