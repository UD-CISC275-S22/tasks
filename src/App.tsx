/* eslint-disable no-extra-parens */
import React from "react"; //, {useEffect}
import { useState } from "react";
import "./App.css";
import { MulitCourseplan } from "./viewCourseComponents";
import { CoursePlan, TotalDB, dbMangement, yearI } from "./interfaces/semester";
import { EditCourseModal } from "./EditModal";
import { Course } from "./interfaces/course";
//import { AddCourseModal } from "./AddCourseModal";
//import { ClearCourseModal } from "./ClearCourseModal";
import coursePlanData from "./data/couresplans.json";
import degreeData from "./data/degrees.json";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
//import { CreateCoursePlan } from "./CreateCoursePlan";
import { CoureseplansBoot } from "./NewCoursePlan";
import {
    createFourYearCoursePlan,
    oneYearUpdate,
    updateCourse
} from "./DBmanage";

function createUUID(db: CoursePlan[]) {
    // Creating a deep copy of db to avoid modifying the original
    const clonedDb = JSON.parse(JSON.stringify(db));

    for (const plans of clonedDb) {
        for (const yeari of plans.years) {
            // Iterate over each season
            ["winter", "spring", "summer", "fall"].forEach((season) => {
                // Check if the season exists and is not null
                if (yeari[season] && yeari[season].courses) {
                    // Generate UUID for each course in the season
                    yeari[season].courses = yeari[season].courses.map(
                        (courseIndex: Course) => {
                            return { ...courseIndex, UUID: uuidv4() };
                        }
                    );
                }
            });
        }
    }
    console.log("initialize");
    return clonedDb;
}

const processedPlans = createUUID(coursePlanData as CoursePlan[]);

function App(): JSX.Element {
    const [EditCorseplan, setEditCorseplan] = useState<boolean>(false);
    const [data, setdata] = useState<TotalDB>({
        Courseplans: processedPlans
    });
    const [courseplans, setCorseplans] = useState<CoursePlan[]>(
        data.Courseplans
    );
    //console.log();
    const DbManager: dbMangement = {
        dataset: data,
        stateSetter: setdata
    };
    const [showEditModal, updateEditMogal] = useState<boolean>(false);
    const [currentEditCoureplan, setEditCoursePlan] = useState<CoursePlan>(
        createFourYearCoursePlan("Untitled")
    );
    function updateCoursePlan(newCourseplan: CoursePlan) {
        setCorseplans([...courseplans, newCourseplan]);
    }
    const handleCloseAddModal = () => updateEditMogal(false);
    //setdata(coursePlanData);
    const [editSelected, setEdit] = useState<Course>({
        ticker: "",
        name: "",
        credits: 0,
        prereq: "",
        UUID: ""
    });

    function setCurrentCourseEdit(course: Course) {
        setEdit(course);
        updateEditMogal(true);
    }

    const handleImportCSV = () => {
        console.log("Import csv button clicked");
    };

    function setNewCourse(curCourse: Course) {
        if (EditCorseplan) {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            updateCourse(DbManager, curCourse, curCourse.UUID!);
        } else {
            setEditCoursePlan({
                ...currentEditCoureplan,
                years: currentEditCoureplan.years.map((currentYear: yearI) =>
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    oneYearUpdate(currentYear, curCourse.UUID!, curCourse)
                )
            });
        }
    }

    return (
        <div className="App">
            <div className="logo">
                <h1 className="App-title">
                    <Container>Test</Container>
                    <img
                        src={require("./ud_logo.jpg")}
                        width="150"
                        height="150"
                    ></img>
                    CIS Scheduler{" "}
                </h1>
            </div>
            <header className="App-header">
                Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu
            </header>
            <div className="button">
                {EditCorseplan && (
                    <button
                        className="buttonSpacing"
                        onClick={() => {
                            setEditCoursePlan(
                                createFourYearCoursePlan("Click To Edit Name")
                            );
                            setEditCorseplan(false);
                        }}
                    >
                        New Course Plans
                    </button>
                )}
                {!EditCorseplan && (
                    <button
                        className="buttonSpacing"
                        onClick={() => setEditCorseplan(true)}
                    >
                        View Course Plans
                    </button>
                )}
                <button onClick={handleImportCSV}>Import CSV</button>
            </div>

            <div className="container-fluid">
                {EditCorseplan ? (
                    <MulitCourseplan
                        Courseplans={courseplans}
                        setCurrentCourseEdit={setCurrentCourseEdit}
                        setCurrentCourseplanEdit={(courseplan: CoursePlan) => {
                            setEditCoursePlan(courseplan);
                            setEditCorseplan(false);
                        }}
                        setCoursePlan={setCorseplans}
                    />
                ) : (
                    <CoureseplansBoot
                        //updateCoursePlan={EditModal}
                        setCourseEdit={setCurrentCourseEdit}
                        propcurCoursePlan={currentEditCoureplan}
                        setEditCoursePlan={setEditCoursePlan}
                        updateCoursePlan={updateCoursePlan}
                    />
                )}
            </div>

            <EditCourseModal
                show={showEditModal}
                handleClose={handleCloseAddModal}
                currentCourse={editSelected}
                updateCoursePass={setNewCourse}
            ></EditCourseModal>
        </div>
    );
}

export default App;
