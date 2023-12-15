/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React from "react"; //, {useEffect}
import { useState } from "react";
import "./App.css";
import { MulitCourseplan } from "./viewCourseComponents";
import {
    CoursePlan,
    SemesterI,
    TotalDB,
    dbMangement,
    yearI
} from "./interfaces/semester";
import { EditCourseModal } from "./EditModal";
import { Course } from "./interfaces/course";
//import { AddCourseModal } from "./AddCourseModal";
//import { ClearCourseModal } from "./ClearCourseModal";
import coursePlanData from "./data/couresplans.json";
//import degreeData from "./data/degrees.json";
import { Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
//import { CreateCoursePlan } from "./CreateCoursePlan";
import { CoureseplansBoot } from "./NewCoursePlan";
import {
    DeleteCourseFromSemester,
    createFourYearCoursePlan,
    oneYearUpdate,
    updateCourse
} from "./DBmanage";
import { ExportToCSV, convertCoursePlans } from "./CSV";
import CSVReader from "react-csv-reader";
import HelpModal from "./HelpModal";
//import { degreeRequirementCheck } from "./DegreeRequirementCheck";

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
    const [modalShow, setModalShow] = useState(false);
    const openModal = () => setModalShow(true);
    const closeModal = () => setModalShow(false);

    //console.log();
    const DbManager: dbMangement = {
        dataset: data,
        stateSetter: setdata
    };
    const [showEditModal, updateEditMogal] = useState<boolean>(false);
    const [currentEditCoureplan, setEditCoursePlan] = useState<CoursePlan>(
        createFourYearCoursePlan("Click To Edit Name")
    );
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
    function deleteCourseFromCoursePlan(
        courseUUID: string,
        semester: SemesterI
    ) {
        const updatedCoursePlans = data.Courseplans.map((coursePlan) => {
            return DeleteCourseFromSemester(semester, courseUUID, coursePlan);
        });

        setdata({
            ...data,
            Courseplans: updatedCoursePlans
        });
    }

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
    const [courseplans, setCorseplans] = useState<CoursePlan[]>(
        data.Courseplans
    );
    function updateCoursePlan(newCourseplan: CoursePlan) {
        setCorseplans([...courseplans, newCourseplan]);
    }

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
                <ExportToCSV coursePlans={courseplans} />
                <button onClick={openModal}>Need Help?</button>
                <HelpModal show={modalShow} onClose={closeModal}>
                    <p className="HelpTitle">
                        How To Use The UDel Course Planner:
                    </p>
                    <p></p>
                    <p className="HelpStep">
                        1. Select A Course From the Course Catalog
                    </p>
                    <p>
                        You are able to search for any given course by clicking
                        on the search bar and typing in the course you want to
                        find
                    </p>
                    <img
                        src={require("./images/CC.png")}
                        width="500"
                        height="175"
                    ></img>
                    <p></p>
                    <p className="HelpStep">
                        2. The Courses Will Appear In The Course Queue
                    </p>
                    <p>
                        Clicking the remove button next to the courses will
                        remove them from your queue
                    </p>
                    <img
                        src={require("./images/CTA.png")}
                        width="400"
                        height="175"
                    ></img>
                    <p></p>
                    <p className="HelpStep">
                        3. Click The AddQueue Button On The Semester You Want To
                        Add The Selected Courses To
                    </p>
                    <p>
                        The clear semester button will delete all courses from
                        the semester
                    </p>
                    <p>The remove button will remove the semester entirely</p>
                    <p>
                        Lastly, the delete button next to the added courses will
                        only delete that specific course
                    </p>
                    <img
                        src={require("./images/SV.png")}
                        width="400"
                        height="250"
                    ></img>
                    <p></p>
                    <p className="HelpStep">
                        4. Check If All Requirements Are Met
                    </p>
                    <p>
                        You will find the degree requirement section updating as
                        more courses are added
                    </p>
                    <p>
                        The degree requirements will check if your plan meets
                        all requirments for the CS major at UDel
                    </p>
                    <p>
                        Any courses that have prereqs will be shown in the
                        course catalog, you will also recive a popup message
                        after adding one to your plan
                    </p>
                    <img
                        src={require("./images/PR.png")}
                        width="400"
                        height="175"
                    ></img>
                    <img
                        src={require("./images/DR.png")}
                        width="550"
                        height="300"
                    ></img>
                    <p></p>
                    <p className="HelpStep">
                        5. After Creating Your Plan, Save As A CSV File And
                        Import The File Later If Needed
                    </p>
                    <p>
                        Name your plan under the Name: text and click export to
                        CSV
                    </p>
                    <img
                        src={require("./images/CSV1.png")}
                        width="550"
                        height="150"
                    ></img>
                    <p></p>
                    <p>
                        A file should be saved to your computer, then select the
                        choose file button and select the CSV file you exported
                    </p>
                    <img
                        src={require("./images/CSV2.png")}
                        width="200"
                        height="75"
                    ></img>
                    <p>
                        Now you should be able to view, edit and delete course
                        plans imported by CSV after clicking on the view course
                        plans button. This button will switch between saved
                        course plans and the plan creator
                    </p>
                    <img
                        src={require("./images/CSV3.png")}
                        width="400"
                        height="150"
                    ></img>
                    <p></p>
                    <p className="HelpStep">6. Edit Courses</p>
                    <p>
                        You are able to edit a added course by simply clicking
                        on the course you would like to edit. Doing so will
                        bring up this screen where you can edit all the
                        information attached to a given course
                    </p>
                    <img
                        src={require("./images/EC.png")}
                        width="500"
                        height="300"
                    ></img>
                </HelpModal>
                <CSVReader
                    onFileLoaded={(data, fileInfo, originalFile) =>
                        setCorseplans(convertCoursePlans(data))
                    }
                />
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
                        curCoursePlan={currentEditCoureplan}
                        setEditCoursePlan={setEditCoursePlan}
                        updateCoursePlan={updateCoursePlan}
                        deletecourse={deleteCourseFromCoursePlan}
                    />
                )}
            </div>

            <EditCourseModal
                show={showEditModal}
                handleClose={handleCloseAddModal}
                currentCourse={editSelected}
                updateCoursePass={setNewCourse}
                dbManager={{ dataset: data, stateSetter: setdata }}
            ></EditCourseModal>
        </div>
    );
}

export default App;
