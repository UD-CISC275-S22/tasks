import React from "react";
import { useState } from "react";
import "./App.css";
import { Year } from "./viewCourseComponents";
import { yearI } from "./interfaces/semester";
import { EditCourseModal } from "./EditModal";
import { Course } from "./interfaces/course";

const testSemester = {
    season: "winter",
    name: "Quarter 22",
    year: "2022",
    courses: [
        {
            ticker: "Math220",
            name: "Discrete Math",
            credits: 3
        },
        {
            ticker: "Cis275",
            name: "Intro to Software Eng.",
            credits: 3
        }
    ]
};
const testSemester2 = {
    season: "spring",
    name: "Quarter 22",
    year: "2023",
    courses: [
        {
            ticker: "Cis304",
            name: "Computer Logic",
            credits: 3
        },
        {
            ticker: "Cis220",
            name: "Data Structures",
            credits: 3
        }
    ]
};

function App(): JSX.Element {
    const yearOneStart = {
        name: "Year1",
        firstsemester: testSemester,
        secondsemester: testSemester2
    };
    const [yearOne, updateYearOne] = useState<yearI>(yearOneStart);
    const [showEditModal, updateEditMogal] = useState<boolean>(false);
    const handleCloseAddModal = () => updateEditMogal(false);
    //const handleShowAddModal = () => updateEditMogal(true);
    const [editSelected, setEdit] = useState<Course>({
        ticker: "",
        name: "",
        credits: 0
    });

    function setCurrentCourseEdit(course: Course) {
        setEdit(course);
        updateEditMogal(true);
    }
    const db = {
        Courseplan: yearOne,
        stateSetter: updateYearOne
    };
    const handleCreatePlan = () => {
        console.log("Create plan button clicked");
    };

    const handleImportCSV = () => {
        console.log("Import csv button clicked");
    };

    return (
        <div className="App">
            <h1 className="App-title">CIS scheduler</h1>
            <header className="App-header">
                Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu
            </header>
            <div className="button">
                <button className="buttonSpacing" onClick={handleCreatePlan}>
                    Create New Plan
                </button>
                <button onClick={handleImportCSV}>Import CSV</button>
            </div>
            <Year year={yearOne} editCourse={setCurrentCourseEdit}></Year>
            <EditCourseModal
                show={showEditModal}
                handleClose={handleCloseAddModal}
                currentCourse={editSelected}
                cRUD={db}
            ></EditCourseModal>
        </div>
    );
}

export default App;
