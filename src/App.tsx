import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";
import { plan } from "./PlannerInterfaces/plan";
import { Plan } from "./Plan";
import defaultPlans from "./Defaults.json";

function App(): JSX.Element {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    useState<number>(-1);
    const defaultPlan = defaultPlans.defaultPlans;
    const [degreePlans, setDegreePlans] = useState<plan[]>(defaultPlan);
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
                    Need Help?
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
                            create a plan. You can rename it by clicking the{" "}
                            <b>Edit Name</b> button. Use the <b>Stop Editing</b>{" "}
                            button to save whatever name you have. Use the{" "}
                            <b>Save Plan Changes</b> button to have the plan
                            show up in the dropdown that contains all plans
                            (including samples).
                        </p>
                        <p>
                            You can use the button labeled <b>Add Semester</b>{" "}
                            to (you guessed it) add a semester. Use the drop
                            down menus to select the season and year. You can
                            name the semester with the <b>Edit Semester Name</b>{" "}
                            button. To add a course, use the <b>Add Course</b>{" "}
                            button. To clear the semester, use the{" "}
                            <b>Remove All Courses</b> button.
                        </p>
                        <p>
                            When selecting a course, type your course code and
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
            <Plan
                degreePlans={degreePlans}
                setDegreePlans={setDegreePlans}
                currentPlan={degreePlans[0]}
            ></Plan>
        </div>
    );
}
export default App;
