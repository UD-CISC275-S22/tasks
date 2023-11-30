/* eslint-disable @typescript-eslint/no-unused-vars */
//for visualization of semesters and altering the courses within them

import React, { useState } from "react";
import "../App.css";
import { courseList, defaultCourseList } from "./course";
import "./Semester.css";
import { Course } from "../Interfaces/course";
import { Button, Form } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import sample from "../data/AllCourseList.json";
import CourseEdit from "./CourseEdit";
import { updateCourseList, findCourse, displayCourse } from "./course";
import { DisplayFall } from "./DisplayFall";
import { DisplaySpring } from "./DisplaySpring";
import { DisplayPlan } from "./DisplayPlan";

//A variable able to use for the list of courses within the JSON file.
const COURSES_LIST = courseList;

//variable to use DEFAULT list of courses from JSON file - Malika
const DEFAULT_COURSE_LIST = defaultCourseList;

//create initial semester for testing
const SEM1: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSES_LIST
};
const SEM2: Semester = {
    type: ["Fall"],
    year: 2024,
    totalCredits: 18,
    courseList: COURSES_LIST
};

//import sample from "../data/AllCourseList.json";
import { ClearSemester } from "./clearingSemester";
//import { DropAdd } from "./dropAdd";
import { Plan } from "../Interfaces/plan";
import { AI } from "./plan";
// import { courseList } from "./course";

// const COURSE_LIST = courseList; //list of all the courses
const AI_Plan = AI(); //the actual AI plan itself
const AI_Semesters = AI_Plan.semesters; //the semesters for the AI plan
const DEFAULT_COURSE = AI_Semesters[0].courseList[0].title;

export function ViewSemester(): JSX.Element {
    const [plan, setPlan] = useState<Plan>(AI_Plan); //The default plan (for now)
    const [semesters, setSemesters] = useState<Semester[]>(AI_Semesters); //the default semesters (for now)
    const [currCourse, setCurrCourse] = useState<string>(DEFAULT_COURSE);
    const [SemesterType, setSemesterType] = useState<string>("Fall"); //can be "Fall", "Spring" or "Both"
    const [displayCourseCategory, setDisplayCourseCategory] =
        useState<string>("AllCourses");

    const [SemCount, setSemCount] = useState<number>(2); //default shows 2 semesters

    const [clicked, setClicked] = useState<boolean>(false);
    const [targetSem, setTargetSem] = useState<string>("Fall"); //fall or spring only
    const [targetYear, setTargetYear] = useState<number>(1);

    //states for editing courses - created by Malika
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedCourse, setEditedCourse] = useState<Course | null>(null);

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions
    //Here is where you can add your add courses and remove courses functions
    function updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrCourse(event.target.value);
    }
    function updateDisplayCourseCat(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDisplayCourseCategory(event.target.value);
    }

    function index(year: number, sem: string): number {
        //fall semesters will always be index 0,2,4,6 in the semesters state
        //spring semesters will always be index 1,3,5,7 in the semesters state
        let idx = 0;
        if (year === 1 && sem === "Fall") {
            idx = 0;
        } else if (year === 1 && sem === "Spring") {
            idx = 1;
        } else if (year === 2 && sem === "Fall") {
            idx = 2;
        } else if (year === 2 && sem === "Spring") {
            idx = 3;
        } else if (year === 3 && sem === "Fall") {
            idx = 4;
        } else if (year === 3 && sem === "Spring") {
            idx = 5;
        } else if (year === 4 && sem === "Fall") {
            idx = 6;
        } else if (year === 4 && sem === "Spring") {
            idx = 7;
        }
        return idx;
    }

    // function removes all courses!
    function clearSemesterCourses() {
        const idx = index(targetYear, targetSem);
        const newSemester = semesters;
        newSemester[idx].courseList = [];

        //function to clear all courses within a semester
        setSemesters({ ...newSemester });
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
        const idx = index(targetYear, targetSem);
        const newSemester = semesters;
        const newClasses = newSemester[idx].courseList.filter(
            (course: Course) => currCourse !== course.title
        );
        newSemester[idx].courseList = newClasses;
        // looks through the course list in the current semester and filters out the
        // course with the same "Title" as the state "currCourse"
        // **refer to "currCourse" documentation for more info **
        setSemesters({ ...newSemester });
    }

    function addClass() {
        const idx = index(targetYear, targetSem);
        const newSemester = semesters;
        const newClasses = newSemester[idx].courseList;
        //idea was a little connfusing for the variable name so we renamed it choiceIdx and choice is the actual course data structure
        const choiceIdx = COURSES_LIST.findIndex(
            (course: Course) => course.title === currCourse
        );
        const choice = COURSES_LIST[choiceIdx];
        //checks if it's already there
        //if exists stays as -1 then the course isn't already in the semester list and should be added otherwise nothing happens

        let exists = -1;
        exists = newClasses.findIndex(
            (course: Course) => course.id === COURSES_LIST[choiceIdx].id
        );

        if (exists !== -1) {
            newClasses.push(choice);
        }

        newSemester[idx].courseList = newClasses;
        setSemesters({ ...newSemester });
    }

    //function to change number of semesters shown (can be either 1 or 2 only - can add 0 or more semesters later)
    function changeSemCount(): void {
        if (SemCount === 2) {
            setSemCount(1);
            setSemesterType("Fall");
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

    function indivPlanSem(year: number, sem: string, id: number): JSX.Element {
        if (sem === "Fall") {
            return (
                <DisplayFall
                    key={id}
                    semesters={semesters}
                    targetSem={"Fall"}
                    currCourse={currCourse}
                    clicked={clicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    clearSemesterCourses={clearSemesterCourses}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    index={index}
                ></DisplayFall>
            );
        } else if (sem === "Spring") {
            return (
                <DisplaySpring
                    key={id}
                    semesters={semesters}
                    targetSem={"Spring"}
                    currCourse={currCourse}
                    clicked={clicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    clearSemesterCourses={clearSemesterCourses}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    index={index}
                ></DisplaySpring>
            );
        }
        return <div></div>;
    }
    //function to display both semesters
    /*
    function displayBoth(): JSX.Element {
        //setTargetSem("Spring");
        //let idx = index();
        // //an array of courses in the plan's semester (ex. spring of year 1)
        // const springCourses = semesters[idx].courseList;

        // setTargetSem("Fall");
        // idx = index();
        // //an array of courses in the plan's semester (ex. fall of year 1)
        // const fallCourses = semesters[idx].courseList;

        const keyValue = targetYear.toString;
        return (
            <div className="Semester">
                <DisplayFall
                    semesters={semesters}
                    setSemesters={setSemesters}
                    targetSem={targetSem}
                    setTargetSem={setTargetSem}
                    currCourse={currCourse}
                    setCurrCourse={setCurrCourse}
                    clicked={clicked}
                    setClicked={setClicked}
                    targetYear={targetYear}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    clearSemesterCourses={clearSemesterCourses}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    index={index}
                ></DisplayFall>
                {setTargetSem("Spring")}
                <DisplaySpring
                    semesters={semesters}
                    setSemesters={setSemesters}
                    targetSem={targetSem}
                    setTargetSem={setTargetSem}
                    currCourse={currCourse}
                    setCurrCourse={setCurrCourse}
                    clicked={clicked}
                    setClicked={setClicked}
                    targetYear={targetYear}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    clearSemesterCourses={clearSemesterCourses}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    index={index}
                ></DisplaySpring>
            </div>
        );
    }*/

    /*
    // function to handle displaying semesters
    function OneorTwo(): JSX.Element {
        const year = targetYear.toString;
        if (SemCount === 1 && targetSem === "Fall") {
            return (
                <div className="Semester">
                    {
                        <DisplayFall
                            key={year + targetSem}
                            semesters={semesters}
                            setSemesters={setSemesters}
                            targetSem={targetSem}
                            setTargetSem={setTargetSem}
                            currCourse={currCourse}
                            setCurrCourse={setCurrCourse}
                            clicked={clicked}
                            setClicked={setClicked}
                            targetYear={targetYear}
                            dropClass={dropClass}
                            addClass={addClass}
                            updateCurrCourse={updateCurrCourse}
                            clearSemesterCourses={clearSemesterCourses}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            index={index}
                        ></DisplayFall>
                    }
                </div>
            );
        } else if (SemCount === 1 && targetSem === "Spring") {
            return (
                <div className="Semester">
                    {
                        <DisplaySpring
                            key={year + targetSem}
                            semesters={semesters}
                            setSemesters={setSemesters}
                            targetSem={targetSem}
                            setTargetSem={setTargetSem}
                            currCourse={currCourse}
                            setCurrCourse={setCurrCourse}
                            clicked={clicked}
                            setClicked={setClicked}
                            targetYear={targetYear}
                            dropClass={dropClass}
                            addClass={addClass}
                            updateCurrCourse={updateCurrCourse}
                            clearSemesterCourses={clearSemesterCourses}
                            handleClose={handleClose}
                            handleShow={handleShow}
                            index={index}
                        ></DisplaySpring>
                    }
                </div>
            );
        } else {
            return displayBoth();
        }
    }
    */

    //functions to edit courses - Malika
    const handleEditShow = (course: Course | undefined) => {
        if (course) {
            setEditedCourse(course);
            setShowEditModal(true);
        } else {
            return null;
        }
    };

    const handleEditClose = () => {
        setEditedCourse(null);
        setShowEditModal(false);
    };

    const handleSaveChanges = (editedCourse: Course) => {
        //update courseList with edited values
        updateCourseList(COURSES_LIST, editedCourse);

        setEditedCourse(null);
        setCurrCourse("");
        // Close the modal
        handleEditClose();
    };

    const handleResetToDefault = (editedCourse: Course) => {
        console.log("Edited course exists");
        const defaultCourse = findCourse(DEFAULT_COURSE_LIST, editedCourse.id);
        if (defaultCourse) {
            setEditedCourse(defaultCourse);

            updateCourseList(COURSES_LIST, defaultCourse);
        }

        // Close the modal
        handleEditClose();
    };

    //actual return for the tsx file to App.tsx
    return (
        <div>
            <div>
                {/*OneorTwo()*/}
                {/*SemCount !== 1 && displayBoth()*/}
                <DisplayPlan
                    indivPlanSem={indivPlanSem}
                    changeSemCount={changeSemCount}
                    changeSemester={changeSemester}
                ></DisplayPlan>
            </div>
            <hr></hr>
        </div>
    );
}
