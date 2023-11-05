import React from "react";
import { useState } from "react";
import "./App.css";
import { Year } from "./viewCourseComponents";
import { yearI } from "./interfaces/semester";
import { EditCourseModal } from "./EditModal";
import { Course } from "./interfaces/course";

const testSemester = {
    season: "Fall",
    name: "Freshman year: Fall",
    year: "Freshman",
    courses: [
        {
            ticker: "CISC108",
            name: "Introduction to Computer Science I",
            credits: 3,
            prereq: "N/A"
        },
        {
            ticker: "EGGG101",
            name: "Introduction to Engineering (FYE)",
            credits: 2,
            prereq: "N/A"
        },
        {
            ticker: "ENGL110",
            name: "Seminar in Composition",
            credits: 3,
            prereq: "N/A"
        },
        {
            ticker: "MATH241",
            name: "Analytic Geometry & Calculus A",
            credits: 4,
            prereq: "MATH117 or Exam Score"
        }
    ]
};
const testSemester2 = {
    season: "Spring",
    name: "Sophomore year: Spring",
    year: "Sophomore",
    courses: [
        {
            ticker: "CISC181",
            name: "Introduction to Computer Science II",
            credits: 3,
            prereq: "CISC106 or CISC108"
        },
        {
            ticker: "CISC210",
            name: "Introduction to Systems Programming",
            credits: 3,
            prereq: "CISC106 or CISC108"
        },
        {
            ticker: "CISC355",
            name: "Computers, Ethics & Society",
            credits: 3,
            prereq: "N/A"
        },
        {
            ticker: "MATH242",
            name: "Analytic Geometry & Calculus B",
            credits: 4,
            prereq: "MATH241 or MATH232"
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
        credits: 0,
        prereq: ""
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
