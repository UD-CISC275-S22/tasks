/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
//react and bootstrap
import React, { useState } from "react";
//css files
import "../App.css";
import "./Semester.css";
//our own interfaces
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
//individual constants
import { courseList, defaultCourseList } from "./course";
import { AI } from "./Default Plans/AI_Plan";
import { Cyber } from "./Default Plans/Cyber_Plan";
import { SysNet } from "./Default Plans/SysNet_Plan";
import { Data } from "./Default Plans/Data_Plan";
import { Theory } from "./Default Plans/Theory_Plan";
import { High } from "./Default Plans/High_Plan";
import { Bio } from "./Default Plans/Bio_Plan";
import { useSessionStorage } from "./useSessionStorage";
import { blankCourse, blankPlan } from "./Default Plans/plan";
import { blankSemester } from "./Default Plans/plan";
//semester modals
import { DisplayFall } from "./DisplaySemester/DisplayFall";
import { DisplayWinter } from "./DisplaySemester/DisplayWinter";
import { DisplaySpring } from "./DisplaySemester/DisplaySpring";
import { DisplaySummer } from "./DisplaySemester/DisplaySummer";
import { DisplayPlan } from "./DisplaySemester/DisplayPlan";
//functions and other imports
import { updateCourseList, findCourse } from "./course";
//A variable able to use for the list of courses within the JSON file.
//variable to use DEFAULT list of courses from JSON file - Malika
const DEFAULT_COURSE_LIST = defaultCourseList;
//all custom button imports
import { ClearSemester } from "./Buttons/clearingSemester";
import { StartNewPlan } from "./Buttons/StartNewPlan";
import { ClearAllSemesters } from "./Buttons/ClearAllSemesters";
import { SavePlanInto } from "./Buttons/SavePlanInto";
import { LoadPlan } from "./Buttons/LoadPlan";
import { PickAPlan } from "./Buttons/PickAPlan";
import CourseEdit from "./CourseEdit";

//all the default concentration plans
let AI_Plan = AI();
let CYBER_Plan = Cyber();
let SysNet_Plan = SysNet();
let Data_Plan = Data();
let Theory_Plan = Theory();
let High_Plan = High();
let Bio_Plan = Bio();

/* ----------------------------------------------------------------------------------------------------- */
export function ViewSemester(): JSX.Element {
    //states for saving plans (4 options)
    const [plan1, setPlan1] = useSessionStorage("plan1", blankPlan);
    const [plan1Semesters, setPlan1Semesters] = useSessionStorage(
        "plan1Semesters",
        [blankSemester]
    );
    const [plan1SeePlan, setPlan1SeePlan] = useSessionStorage(
        "plan1SeePlan",
        false
    );
    const [plan2, setPlan2] = useSessionStorage("plan2", blankPlan);
    const [plan2Semesters, setPlan2Semesters] = useSessionStorage(
        "plan2Semesters",
        [blankSemester]
    );
    const [plan2SeePlan, setPlan2SeePlan] = useSessionStorage(
        "plan2SeePlan",
        false
    );
    const [plan3, setPlan3] = useSessionStorage("plan3", blankPlan);
    const [plan3Semesters, setPlan3Semesters] = useSessionStorage(
        "plan3Semesters",
        [blankSemester]
    );
    const [plan3SeePlan, setPlan3SeePlan] = useSessionStorage(
        "plan3SeePlan",
        false
    );
    const [plan4, setPlan4] = useSessionStorage("plan4", blankPlan);
    const [plan4Semesters, setPlan4Semesters] = useSessionStorage(
        "plan4Semesters",
        [blankSemester]
    );
    const [plan4SeePlan, setPlan4SeePlan] = useSessionStorage(
        "plan4SeePlan",
        false
    );

    //fifth year states
    const [fifthYearClicked, setFifthYearClicked] = useState<boolean>(false);
    const [fifthYear, setFifthYear] = useSessionStorage("fifthYear", false);

    //while in the working session itself - current changes user is making
    const [plan, setPlan] = useSessionStorage("plan", AI_Plan); //The default plan is AI
    const [seePlan, setSeePlan] = useSessionStorage("seePlan", false); //default is you cant see any plan (until a user selects one)
    const [semesters, setSemesters] = useSessionStorage(
        "semesters",
        AI_Plan.semesters
    ); //the default semesters (should always match with what the plan is)
    const [currCourse, setCurrCourse] = useState<number>(0);

    //state for handling if the yes or no button for skip semester warning was clicked
    const [clicked, setClicked] = useState<boolean>(false);

    //states for editing courses - created by Malika
    const [showEditModal, setShowEditModal] = useState(false);
    const [editedCourse, setEditedCourse] = useState<Course | null>(null);
    const [COURSES_LIST, setCOURSES_LIST] = useSessionStorage(
        "courses",
        courseList
    );
    //let COURSES_LIST = courses as Course[];

    //NOTE FOR MICHAEL: Here is where you can add your add courses and remove courses functions
    //Here is where you can add your add courses and remove courses functions
    function updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>) {
        const val = Number(event.target.value);
        setCurrCourse(val);
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

    function clearSemester(option: string, index: number) {
        const newSemesters = semesters;
        newSemesters[index].courseList = [blankCourse];
        setSemesters([...newSemesters]);
    }

    function clearAll() {
        const newSemesters = semesters;
        newSemesters.map((sem: Semester) => (sem.courseList = [blankCourse]));
        setSemesters([...newSemesters]);
        handleClose();
    }

    function skipSemester(targetYear: number, targetSem: string) {
        const idx = index(targetYear, targetSem);
        const newSemesters = [...semesters];
        newSemesters[idx].courseList = [blankCourse];

        //function to clear all courses within a semester
        setSemesters(newSemesters);
        setFifthYear(true);
        handleFifthClose();
    }

    //functions for visibility of the modal of clearing semesters (the warning)
    function handleClose() {
        setClicked(false);
    }

    function handleFifthClose() {
        setFifthYearClicked(false);
    }

    function handleShow() {
        setClicked(true);
    }

    function handleFifthShow() {
        setFifthYearClicked(true);
    }

    //functions for handling which semesters to see

    function dropClass(targetYear: number, targetSem: string) {
        const idx = index(targetYear, targetSem);
        const newSemesters = [...semesters];
        const newClasses = newSemesters[idx].courseList.filter(
            (course: Course) => currCourse !== course.id
        );
        newSemesters[idx].courseList = [...newClasses];
        // looks through the course list in the current semester and filters out the
        // course with the same "Title" as the state "currCourse"
        // **refer to "currCourse" documentation for more info **
        setSemesters(newSemesters);
    }

    function addClass(targetYear: number, targetSem: string): void {
        const idx = index(targetYear, targetSem);
        const newSemesters = [...semesters];
        const choiceIdx = COURSES_LIST.findIndex(
            (course: Course) => course.id === currCourse
        );
        if (choiceIdx === -1) {
            alert("Course not found");
            return;
        }
        const choice = COURSES_LIST[choiceIdx];
        const newClasses = newSemesters[idx].courseList.filter(
            (course: Course) => currCourse !== course.id
        );
        // looks through the course list in the current semester and filters out the
        // course with the same "Title" as the state "currCourse"
        // **refer to "currCourse" documentation for more info **
        newSemesters[idx].courseList = [...newClasses, choice];
        setSemesters(newSemesters);
    }

    function indivPlanSem(year: number, sem: string, id: number): JSX.Element {
        //returns 1 fall, spring, winter or summer semester
        if (sem === "Fall") {
            return (
                <DisplayFall
                    key={id}
                    semesters={semesters}
                    courseList={COURSES_LIST}
                    targetSem={sem}
                    currCourse={currCourse}
                    clicked={clicked}
                    fifthYearClicked={fifthYearClicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    //clearSemesterCourses={clearSemesterCourses}
                    skipSemester={skipSemester}
                    handleClose={handleClose}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                    handleShow={handleShow}
                    index={index}
                    editedCourse={editedCourse}
                    handleSaveChanges={handleSaveChanges}
                    handleResetToDefault={handleResetToDefault}
                    handleEditClose={handleEditClose}
                    handleEditShow={handleEditShow}
                ></DisplayFall>
            );
        } else if (sem === "Spring") {
            return (
                <DisplaySpring
                    key={id}
                    semesters={semesters}
                    courseList={COURSES_LIST}
                    targetSem={sem}
                    currCourse={currCourse}
                    clicked={clicked}
                    fifthYearClicked={fifthYearClicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    //clearSemesterCourses={clearSemesterCourses}
                    skipSemester={skipSemester}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                    index={index}
                    editedCourse={editedCourse}
                    handleSaveChanges={handleSaveChanges}
                    handleResetToDefault={handleResetToDefault}
                    handleEditClose={handleEditClose}
                    handleEditShow={handleEditShow}
                ></DisplaySpring>
            );
        } else if (sem === "Winter") {
            return (
                <DisplayWinter
                    key={id}
                    semesters={semesters}
                    courseList={COURSES_LIST}
                    targetSem={sem}
                    currCourse={currCourse}
                    clicked={clicked}
                    fifthYearClicked={fifthYearClicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    //clearSemesterCourses={clearSemesterCourses}
                    skipSemester={skipSemester}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                    index={index}
                    editedCourse={editedCourse}
                    handleSaveChanges={handleSaveChanges}
                    handleResetToDefault={handleResetToDefault}
                    handleEditClose={handleEditClose}
                    handleEditShow={handleEditShow}
                ></DisplayWinter>
            );
        } else if (sem === "Summer") {
            return (
                <DisplaySummer
                    key={id}
                    semesters={semesters}
                    courseList={COURSES_LIST}
                    targetSem={sem}
                    currCourse={currCourse}
                    clicked={clicked}
                    fifthYearClicked={fifthYearClicked}
                    targetYear={year}
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    //clearSemesterCourses={clearSemesterCourses}
                    skipSemester={skipSemester}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                    index={index}
                    editedCourse={editedCourse}
                    handleSaveChanges={handleSaveChanges}
                    handleResetToDefault={handleResetToDefault}
                    handleEditClose={handleEditClose}
                    handleEditShow={handleEditShow}
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

    //function to handle editCourse Modal - Malika
    const handleSaveChanges = (
        editedCourse: Course,
        targetYear: number,
        targetSem: string
    ) => {
        const idx = index(targetYear, targetSem);
        const newSemester = [...semesters];

        //edit the original course list with updated values
        const newSelectedSemCourses = updateCourseList(
            newSemester[idx].courseList,
            editedCourse
        );
        newSemester[idx].courseList = [...newSelectedSemCourses];
        const newCourses = updateCourseList(COURSES_LIST, editedCourse);
        setCOURSES_LIST([...newCourses]);

        //map through courseList of the current semester and if the id's are equal, make course = editedCourse
        /*
        const newCourseList = newSemester[idx].courseList.map(
            (course: Course): Course =>
                course.id === editedCourse.id ? editedCourse : course
        ); */

        //make the semester's courseList equal to the newCourseList with the editedCourse
        //newSemester[idx].courseList = [...newCourseList];
        setSemesters(newSemester);

        setEditedCourse(null);
        setCurrCourse(editedCourse.id);

        // Close the modal
        handleEditClose();
        // }
    };

    const handleResetToDefault = (editedCourse: Course) => {
        console.log("Edited course exists");
        const defaultCourse = findCourse(DEFAULT_COURSE_LIST, editedCourse.id);
        //const beforeCourse = editedCourse;
        if (defaultCourse) {
            setEditedCourse(defaultCourse);
            const newCourseList = updateCourseList(COURSES_LIST, defaultCourse);
            setCOURSES_LIST([...newCourseList]);
        }

        // Close the modal
        handleEditClose();
    };

    const handlePlans = (planSelected: string) => {
        if (planSelected === "Artificial Intelligence") {
            setPlan(AI_Plan);
            setSemesters(AI_Plan.semesters);
            setSeePlan(true);
            return;
        } else if (planSelected === "Cybersecurity") {
            setPlan(CYBER_Plan);
            setSemesters(CYBER_Plan.semesters);
            setSeePlan(true);
            return;
        } else if (planSelected === "Systems and Networks") {
            setPlan(SysNet_Plan);
            setSemesters(SysNet_Plan.semesters);
            setSeePlan(true);
            return;
        } else if (planSelected === "Data Science") {
            setPlan(Data_Plan);
            setSemesters(Data_Plan.semesters);
            setSeePlan(true);
            return;
        } else if (planSelected === "Theory and Computation") {
            setPlan(Theory_Plan);
            setSemesters(Theory_Plan.semesters);
            setSeePlan(true);
        } else if (planSelected === "High Performance Computing") {
            setPlan(High_Plan);
            setSemesters(High_Plan.semesters);
            setSeePlan(true);
        } else if (planSelected === "Bioinformatics") {
            setPlan(Bio_Plan);
            setSemesters(Bio_Plan.semesters);
            setSeePlan(true);
        } else if (planSelected === "Custom Concentration") {
            setPlan(blankPlan);
            setSemesters(blankPlan.semesters);
            setSeePlan(true);
        }
    };

    function startNewSession() {
        AI_Plan = AI();
        CYBER_Plan = Cyber();
        SysNet_Plan = SysNet();
        Data_Plan = Data();
        Theory_Plan = Theory();
        High_Plan = High();
        Bio_Plan = Bio();
        setPlan(blankPlan);
        setSeePlan(false);
        setSemesters(blankPlan.semesters);
        setFifthYear(false);
    }

    function savePlan(option: string) {
        if (option === "Plan 1") {
            setPlan1(plan);
            setPlan1SeePlan(seePlan);
            setPlan1Semesters(semesters);
        } else if (option === "Plan 2") {
            setPlan2(plan);
            setPlan2SeePlan(seePlan);
            setPlan2Semesters(semesters);
        } else if (option === "Plan 3") {
            setPlan3(plan);
            setPlan3SeePlan(seePlan);
            setPlan3Semesters(semesters);
        } else if (option === "Plan 4") {
            setPlan4(plan);
            setPlan4SeePlan(seePlan);
            setPlan4Semesters(semesters);
        }
    }

    function loadPlan(option: string) {
        if (option === "Plan 1") {
            setPlan(plan1);
            setSeePlan(plan1SeePlan);
            setSemesters(plan1Semesters);
        } else if (option === "Plan 2") {
            setPlan(plan2);
            setSeePlan(plan2SeePlan);
            setSemesters(plan2Semesters);
        } else if (option === "Plan 3") {
            setPlan(plan3);
            setSeePlan(plan3SeePlan);
            setSemesters(plan3Semesters);
        } else if (option === "Plan 4") {
            setPlan(plan4);
            setSeePlan(plan4SeePlan);
            setSemesters(plan4Semesters);
        }
    }

    //actual return for the tsx file to App.tsx
    return (
        <div style={{ backgroundColor: "#0f234c" }}>
            <div className="DropdownMenu">
                <StartNewPlan startNewSession={startNewSession}></StartNewPlan>
                <ClearSemester clearSemester={clearSemester}></ClearSemester>
                <ClearAllSemesters
                    clearAll={clearAll}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    show={clicked}
                ></ClearAllSemesters>
                <SavePlanInto savePlan={savePlan}></SavePlanInto>
                <LoadPlan loadPlan={loadPlan}></LoadPlan>
                <PickAPlan handlePlans={handlePlans}></PickAPlan>
            </div>
            <hr style={{ backgroundColor: "#0f234c" }}></hr>
            {
                // eslint-disable-next-line no-extra-parens
                seePlan && (
                    <div>
                        <h5 style={{ color: "white" }}>{plan.concentration}</h5>
                        <DisplayPlan
                            indivPlanSem={indivPlanSem}
                            fifthYear={fifthYear}
                        ></DisplayPlan>
                    </div>
                )
            }
            <hr style={{ backgroundColor: "#0f234c" }}></hr>
        </div>
    );
}
