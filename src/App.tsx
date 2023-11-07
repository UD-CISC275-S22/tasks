import React from "react";
import { useState } from "react";
import "./App.css";
import { Year } from "./viewCourseComponents";
import { yearI } from "./interfaces/semester";
import { EditCourseModal } from "./EditModal";
import { Course } from "./interfaces/course";
import { AddCourseModal } from "./AddCourseModal";

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
    const [showAddCourseModal, setShowAddCourseModal] =
        useState<boolean>(false);
    const handleShowAddCourseModal = () => setShowAddCourseModal(true);
    const handleCloseAddCourseModal = () => setShowAddCourseModal(false);
    //const handleShowAddModal = () => updateEditMogal(true);
    const [editSelected, setEdit] = useState<Course>({
        ticker: "",
        name: "",
        credits: 0,
        prereq: ""
    });
    const handleAddNewCourse = (
        newCourse: Course,
        semester: "firstsemester" | "secondsemester"
    ) => {
        if (yearOne[semester].courses.length >= 5) {
            console.error("Cannot add more than 5 courses per semester");
            return;
        }

        const updatedCourses = [...yearOne[semester].courses, newCourse];

        const updatedSemester = {
            ...yearOne[semester],
            courses: updatedCourses
        };

        updateYearOne({ ...yearOne, [semester]: updatedSemester });
        handleCloseAddCourseModal();
    };
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
            <h1 className="App-title">CIS Scheduler</h1>
            <header className="App-header">
                Adam Beck, Zach Reggio, Sam Ferguson, Brandon Marafino, Adam Liu
            </header>
            <div className="button">
                <button className="buttonSpacing" onClick={handleCreatePlan}>
                    Create New Plan
                </button>
                <button onClick={handleImportCSV}>Import CSV</button>
                <button onClick={handleShowAddCourseModal}>Add Course</button>
            </div>
            <Year year={yearOne} editCourse={setCurrentCourseEdit}></Year>
            <EditCourseModal
                show={showEditModal}
                handleClose={handleCloseAddModal}
                currentCourse={editSelected}
                cRUD={db}
            ></EditCourseModal>
            <AddCourseModal
                show={showAddCourseModal}
                handleClose={handleCloseAddCourseModal}
                addCourse={handleAddNewCourse}
            ></AddCourseModal>
        </div>
    );
}

export default App;
