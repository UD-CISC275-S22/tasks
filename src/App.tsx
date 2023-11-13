import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import CourseTable, { DisplayCourse } from "./CoursePlan";
import { course } from "./PlannerInterfaces/course";
import { data } from "./classData";
import { semester } from "./PlannerInterfaces/semester";
import { plan } from "./PlannerInterfaces/plan";

function App(): JSX.Element {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    // Mock data for testing
    const defaultCourse: course = {
        id: "1",
        name: "Sample Course",
        credits: 3,
        courseID: "CSCI123",
        preReq: "None"
    };

    const defaultSemester: semester = {
        id: "1",
        name: "Fall 2023",
        courses: data,
        year: 0,
        season: ""
    };

    const defaultPlan: plan = {
        id: "1",
        name: "Sample Plan",
        semesters: [defaultSemester]
    };

    const [, /*currentPlan*/ setCurrentPlan] = useState<plan>(defaultPlan);

    // Update plan function
    const updatePlan = (updatedPlan: plan) => {
        setCurrentPlan(updatedPlan);
    };
    return (
        <div className="App">
            <header className="App-header">UD Course Planner</header>
            <p>
                James Lloyd, Kerry Ferguson, Matthew Conlon, Caleb Sachetti,
                Arnav Baliyan
            </p>
            <div>
                <button
                    id="openModalBtn"
                    onClick={openModal}
                    title="Open Modal"
                >
                    See Instructions
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                >
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>
                            <b>Getting Started:</b>
                        </p>
                        <p>
                            Click the button labeled <b>Add New Plan</b> to
                            create a plan. You can rename it by clicking the
                            apropriate icon that pops up next to the button. Use
                            the <b>Save Plan Changes</b> button to have the plan
                            show up in the dropdown that contains all plans
                            (including samples).
                        </p>
                        <p>
                            You can use the buttons labeled <b>Add Semester</b>{" "}
                            to (you guessed it) add a semester. You can name the
                            semester with the same icon as earlier. To add a
                            course, use the <b>Add Course</b> button.
                        </p>
                        <p>
                            In the dropdown menu, type your course code and
                            click on the course to confirm your selection. You
                            can then use the <b>Add Course</b> button to add it
                            to your semester. You can use the <b>Edit Course</b>{" "}
                            button at any point to change these courses. To save
                            your changes, use the <b>Save Plan Changes</b>{" "}
                            button.
                        </p>
                        <p>
                            To delete a course, semseter, or plan, click the
                            associated button. There will be a special delete
                            button for each associated element.
                        </p>
                        <p>
                            The website additionally features degree
                            requirements, which can be accessed from the{" "}
                            <b>Degree Requirements</b> button. This section
                            shows all required courses, as well as some breadth
                            requirements, for a standard bachelors in Computer
                            Science at UD. Courses already taken, including
                            breadths, will have a check mark next to them. Any
                            classes not taken will have an x next to them.
                        </p>
                        <p>
                            Never forget to save plans! Use the{" "}
                            <b>Save Plan Changes</b> button frequently. Feel
                            free to play around with the different tools
                            available as much as you deem necessary.
                        </p>
                    </div>
                </Modal>
            </div>
            {/* Render CourseTable component */}
            <CourseTable data={data} />
            {/* Render DisplayCourse component with mock data */}
            <DisplayCourse
                defaultCourse={defaultCourse}
                semester={defaultSemester}
                plan={defaultPlan}
                updatePlan={updatePlan}
            />
            <p> List of Degree Plans: </p>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credits</th>
                </tr>
            </table>
        </div>
    );
}

export default App;
