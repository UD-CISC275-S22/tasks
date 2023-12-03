/* eslint-disable @typescript-eslint/no-unused-vars */
//for visualization of semesters and altering the courses within them

//css files
import "./Semester.css";
import "../App.css";
//react and bootstrap
import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
//our own interfaces
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
//individual constants
import { courseList, defaultCourseList } from "./course";
import { AI } from "./AI_Plan";
import { Cyber } from "./Cyber_Plan";
import { SysNet } from "./SysNet_Plan";
import { Data } from "./Data_Plan";

//modals
import { DisplayFall } from "./DisplayFall";
import { DisplayWinter } from "./DisplayWinter";
import { DisplaySpring } from "./DisplaySpring";
import { DisplaySummer } from "./DisplaySummer";
import { DisplayPlan } from "./DisplayPlan";
//functions and other imports
import sample from "../data/AllCourseList.json";
import CourseEdit from "./CourseEdit";
import { updateCourseList, findCourse, displayCourse } from "./course";

//A variable able to use for the list of courses within the JSON file.
const COURSES_LIST = courseList;

//variable to use DEFAULT list of courses from JSON file - Malika
const DEFAULT_COURSE_LIST = defaultCourseList;

//import sample from "../data/AllCourseList.json";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
// import { courseList } from "./course";

// const COURSE_LIST = courseList; //list of all the courses
const AI_Plan = AI(); //the actual AI plan itself
const CYBER_Plan = Cyber();
const SysNet_Plan = SysNet();
const Data_Plan = Data();

const AI_Semesters = AI_Plan.semesters; //the semesters for the AI plan
const CYBER_Semesters = CYBER_Plan.semesters;
const SysNet_Semesters = SysNet_Plan.semesters;
const Data_Semesters = Data_Plan.semesters;

const DEFAULT_COURSE = AI_Semesters[0].courseList[0].title;

export function ViewSemester(): JSX.Element {
    const [plan, setPlan] = useState<Plan>(AI_Plan); //The default plan (for now)
    const [seePlan, setSeePlan] = useState<boolean>(false); //default is you cant see any plan (until a user selects one)
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
        //fall semesters will always indexes 0,4,8,12,16
        //winter semesters will always be indexes 1,5,9,13,17
        //spring semesters will always be indexes 2,6,10,14,18
        //summer semesters will always be indexes 3,7,11,15 (has one less semester than the rest)
        let idx = 0;
        if (year === 1 && sem === "Fall") {
            idx = 0;
        } else if (year === 1 && sem === "Winter") {
            idx = 1;
        } else if (year === 1 && sem === "Spring") {
            idx = 2;
        } else if (year === 1 && sem === "Summer") {
            idx = 3;
        } else if (year === 2 && sem === "Fall") {
            idx = 4;
        } else if (year === 2 && sem === "Winter") {
            idx = 5;
        } else if (year === 2 && sem === "Spring") {
            idx = 6;
        } else if (year === 2 && sem === "Summer") {
            idx = 7;
        } else if (year === 3 && sem === "Fall") {
            idx = 8;
        } else if (year === 3 && sem === "Winter") {
            idx = 9;
        } else if (year === 3 && sem === "Spring") {
            idx = 10;
        } else if (year === 3 && sem === "Summer") {
            idx = 11;
        } else if (year === 4 && sem === "Fall") {
            idx = 12;
        } else if (year === 4 && sem === "Winter") {
            idx = 13;
        } else if (year === 4 && sem === "Spring") {
            idx = 14;
        } else if (year === 4 && sem === "Summer") {
            idx = 15;
        } else if (year === 5 && sem === "Fall") {
            idx = 16;
        } else if (year === 5 && sem === "Winter") {
            idx = 17;
        } else if (year === 5 && sem === "Spring") {
            idx = 18;
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

    //functions for handling which semesters to see

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
        //returns 1 fall, spring, winter or summer semester
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
        } else if (sem === "Winter") {
            return (
                <DisplayWinter
                    key={id}
                    semesters={semesters}
                    targetSem={"Winter"}
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
                ></DisplayWinter>
            );
        } else if (sem === "Summer") {
            return (
                <DisplaySummer
                    key={id}
                    semesters={semesters}
                    targetSem={"Summer"}
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
                ></DisplaySummer>
            );
        }
        return <div></div>;
    }

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

    const planOptions = [
        "Artificial Intelligence",
        "Cybersecurity",
        "Systems and Networks"
    ];

    const handlePlans = (planSelected: string) => {
        if (planSelected === "Artificial Intelligence") {
            setPlan(AI_Plan);
            setSemesters(AI_Semesters);
            setSeePlan(true);
        } else if (planSelected === "Cybersecurity") {
            setPlan(CYBER_Plan);
            setSemesters(CYBER_Semesters);
            setSeePlan(true);
        } else if (planSelected === "Systems and Networks") {
            setPlan(SysNet_Plan);
            setSemesters(SysNet_Semesters);
            setSeePlan(true);
        } else if (planSelected === "Data Science") {
            setPlan(Data_Plan);
            setSemesters(Data_Semesters);
            setSeePlan(true);
        }
    };
    //actual return for the tsx file to App.tsx
    return (
        <div>
            <div>
                {/*OneorTwo()*/}
                {/*SemCount !== 1 && displayBoth()*/}
                <Dropdown>
                    <Dropdown.Toggle id="dropdown1">
                        Pick a Plan:
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {
                            // eslint-disable-next-line no-extra-parens
                            planOptions.map((option, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() => handlePlans(option)}
                                >
                                    {option}
                                </Dropdown.Item>
                            ))
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <hr></hr>
                {
                    // eslint-disable-next-line no-extra-parens
                    seePlan && (
                        <DisplayPlan indivPlanSem={indivPlanSem}></DisplayPlan>
                    )
                }
            </div>
            <hr></hr>
        </div>
    );
}
