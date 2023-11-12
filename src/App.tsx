import React from "react";
import "./App.css";
import Modal from "react-modal";
import { ModalBody } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import { data } from "./classData";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">UD Course Planner</header>
            <p>
                James Lloyd, Kerry Ferguson, Matthew Conlon, Caleb Sachetti,
                Arnav Baliyan
            </p>
            <p> List of Degree Plans: </p>
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Credits</th>
                </tr>
            </table>
            <div className="App">
                <button className="btn" onClick={toggleModal}>
                    Show Instructions
                </button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="My dialog"
                >
                    <p>Hello CISC or INSY Majors/Minors</p>
                    <ModalBody>
                        <p>
                            To get started, you should click <b>Add New Plan</b>{" "}
                            to create a new plan that can be renamed by clicking
                            the pencil right next to the New Plan that pops up.
                            To get the new name to appear in the dropdown of
                            plans, you should click the <b>Save Plan Changes</b>{" "}
                            button.
                        </p>
                        <p>
                            From there, click on <b>Add Semester</b> to add a
                            semeseter. You can change the name of the semester
                            in the same way you did with the plan name. Then, to
                            add a course, click <b>Add Course</b>.{" "}
                        </p>
                        <p>
                            From the dropdown, type in your course code, and
                            click the course code from the dropdown to confirm
                            the choice. Then click <b>Add Course</b> to add the
                            course to the semester table. If the course is not
                            to your liking when in the semester table, you can
                            hit the <b>Edit Course</b> button to alter the
                            course. To fully save the changes, click the{" "}
                            <b>Save Plan Changes</b> button.
                        </p>
                        <p>
                            Should you want to delete a course, semester, or
                            plan, click the button, there is a button for each.
                        </p>
                        <p>
                            Some other additional features that are available
                            are the degree requirements, which can be seen from
                            clicking the <b>Degree Requirements</b> button. In
                            here, you can see all the courses that you need to
                            take along with some other breadth requirements for
                            a basic Computer Science degree. Courses and
                            breadths that are satisfied will have a check mark
                            next to them and those that are not satisfied will
                            have an x mark next to them.
                        </p>
                        <p>
                            <b>
                                Most importantly, make sure to click Save Plan
                                Changes if you want changes kept before you
                                switch plans or click off the site.
                            </b>
                        </p>
                    </ModalBody>
                    <button
                        onClick={toggleModal}
                        className="btnclose"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Modal>
            </div>
        </div>
    );
}

export default App;
