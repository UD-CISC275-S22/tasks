import React from "react";
import { useState } from "react";
import "./App.css";
import { MulitCourseplan /*Year*/ } from "./viewCourseComponents";
import { TotalDB /*yearI*/ } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { EditCourseModal } from "./EditModal";
import { AddCourseModal } from "./AddCourseModal";
import { ClearCourseModal } from "./ClearCourseModal";
import { Container } from "react-bootstrap";
import coursePlanData from "./data/couresplans.json";
import { v4 as uuidv4 } from "uuid";

function createUUID(db: TotalDB) {
    for (const plans of db.Coureseplans) {
        for (const yeari of plans.years) {
            yeari.firstsemester.courses = yeari.firstsemester.courses.map(
                (courseIndex: Course) => {
                    return { ...courseIndex, UUID: uuidv4() };
                }
            );
        }
    }
}

function App(): JSX.Element {
    const vartotalDB = {
        Coureseplans: coursePlanData
    };
    createUUID(vartotalDB);
    console.log(vartotalDB);
    const [data, setdata] = useState<TotalDB>();
    const [showEditModal, updateEditMogal] = useState<boolean>(false);
    const handleCloseAddModal = () => updateEditMogal(false);
    //setdata(coursePlanData);

    const [editSelected, setEdit] = useState<Course>({
        ticker: "",
        name: "",
        credits: 0,
        prereq: ""
    });
    function setCurrentCourseEdit(course: Course) {
        setEdit(course);
        //updateEditMogal(true);
    }
    const handleCreatePlan = () => {
        console.log("Create plan button clicked");
    };

    const handleImportCSV = () => {
        console.log("Import csv button clicked");
    };
    return (
        <div className="App">
            <div className="logo">
                <h1 className="App-title">
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
                <button className="buttonSpacing" onClick={handleCreatePlan}>
                    Create New Plan
                </button>
                <button onClick={handleImportCSV}>Import CSV</button>
            </div>
            <div className="container">
                <MulitCourseplan
                    Courseplans={coursePlanData}
                    setCurrentCourseEdit={setCurrentCourseEdit}
                />
            </div>
            {/*
                <EditCourseModal
                    show={showEditModal}
                    handleClose={handleCloseAddModal}
                    currentCourse={editSelected}
                    cRUD={db}
                ></EditCourseModal>
            */}
        </div>
    );
}

export default App;
