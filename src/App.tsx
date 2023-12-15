import React from "react";
import "./App.css";
//import { ViewSemester } from "./Components/Semester";
import { ViewSemester } from "./Components/Semester";
//import { Welcome } from "./Components/welcome";
//import { Button } from "react-bootstrap";
//import { clearSemester } from "./Components/clearingSemester";
//import { clearCourse } from "./Components/clearingCourse";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                &#128195; UD Degree Planner
                <h6></h6>
                <h6>
                    Made by: Matthew Mestre, Bryant Ferguson, Ava West, Malika
                    Iyer and Dina Dawood (CISC275)
                </h6>
            </header>
            <div
                style={{
                    backgroundColor: "#F0EFF4",
                    padding: "20px"
                }}
            >
                {/*This is the collaspe button*/}
                <button
                    type="button"
                    className="btn btn-info "
                    data-bs-toggle="collapse"
                    data-bs-target="#welcome_message"
                >
                    Need Help❓
                </button>
                {/*When the button is clicked the message collapses*/}
                <div id="welcome_message" className="collapse">
                    <figure>
                        <blockquote style={{ padding: "20px" }}>
                            <h6>Welcome to your personal Degree Planner!</h6>
                            <p>
                                Some basic tools have been designed to make your
                                visit accessible to your needs. This includes:
                            </p>
                            <ul
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <li>Creating new plans from scratch</li>
                                <li>
                                    See a table that shows a single semester or
                                    multiple semesters of courses
                                </li>
                                <li>
                                    See a list of all the default Computer
                                    Science plans (ex. Artificial Intelligence),
                                    and of your saved custom plans
                                </li>
                                <li>
                                    Edit course information or reset it to the
                                    default course
                                </li>
                                <li>
                                    Clear all existing courses in a semester or
                                    all semesters entirely
                                </li>
                                <li>
                                    Insert or remove a plan into your saved
                                    plans or working session
                                </li>
                                <li>Skip semesters</li>
                                <li>
                                    Insert or remove semesters from your view
                                </li>
                                <li>
                                    Insert or remove a course from a semester
                                </li>
                                <li>Save any plans you make</li>
                                <li>
                                    See any unfilled requirements you have for
                                    your degree plan and which classes would
                                    fulfill that requirement
                                </li>
                                <li>
                                    Move courses from one semester to another
                                    semester
                                </li>
                                <li>
                                    Export your plans as a CSV file so you can
                                    share it with advisers
                                </li>
                                <li>Import your plan from a CSV file</li>
                            </ul>
                            <p>Here is an explanation of the buttons!</p>
                            <p>The</p>
                        </blockquote>
                    </figure>
                    <h6>Here is an example of how you might start!</h6>
                    <img
                        src={require("./exampleGIF.gif")}
                        width="60%"
                        height="60%"
                    ></img>
                </div>
            </div>
            <ViewSemester></ViewSemester>
        </div>
    );
}

export default App;
