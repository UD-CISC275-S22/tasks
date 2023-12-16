import React from "react";
import "./App.css";
import { ViewSemester } from "./Components/Semester";

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
                            <hr></hr>
                            <p>
                                Some basic tools have been designed to make your
                                visit accessible to your needs. This includes:
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    textAlign: "center",
                                    alignContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <ul
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "40px",
                                        textAlign: "left",
                                        marginLeft: "30px"
                                    }}
                                >
                                    <li>Creating new plans from scratch</li>
                                    <li>
                                        See a table that shows a single semester
                                        or multiple semesters of courses
                                    </li>
                                    <li>
                                        See a list of all the default Computer
                                        Science plans (ex. Artificial
                                        Intelligence), and of your saved custom
                                        plans
                                    </li>
                                    <li>
                                        Edit course information or reset it to
                                        the default course
                                    </li>
                                    <li>
                                        Clear all existing courses in a semester
                                        or all semesters entirely
                                    </li>
                                    <li>
                                        Insert or remove a plan into your saved
                                        plans or working session
                                    </li>
                                    <li>Skip semesters</li>
                                </ul>
                                <ul
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        padding: "40px",
                                        textAlign: "left",
                                        marginLeft: "30px"
                                    }}
                                >
                                    <li>
                                        Insert or remove semesters from your
                                        view
                                    </li>
                                    <li>
                                        Insert or remove a course from a
                                        semester
                                    </li>
                                    <li>Save any plans you make</li>
                                    <li>
                                        See any unfilled requirements you have
                                        for your degree plan and which classes
                                        would fulfill that requirement
                                    </li>
                                    <li>
                                        Move courses from one semester to
                                        another semester
                                    </li>
                                    <li>
                                        Export your plans as a CSV file so you
                                        can share it with advisers
                                    </li>
                                    <li>Import your plan from a CSV file</li>
                                </ul>
                            </div>
                            <hr></hr>
                            <p>Need help understanding the buttons?</p>
                            <u>Here is an explanation of the buttons!</u>
                            <br></br>
                            <br></br>
                            <em>
                                The <b>Start New Plan</b> button allows you to
                                restart restart your view and current working
                                plan decide that you don&#39;t like you&#39;re
                                changes and want a redo.
                            </em>
                            <br></br>
                            <em>
                                The <b>Required Classes</b> button visualizes
                                the courses you will need to complete or have
                                already completed for your chosen degree plan.
                            </em>
                            <br></br>
                            <em>
                                The <b>Clear Semester</b> button allows you to
                                select a semester that you specifically want to
                                clear of courses.
                            </em>
                            <br></br>
                            <em>
                                The <b>Clear ALL Semesters</b> button allows you
                                to clear all the semesters in your plan at once.
                            </em>
                            <br></br>
                            <em>
                                The <b>Save Plan Into</b> button allows you to
                                save save your current plan that you are working
                                on plan 1, plan 2, plan 3, or plan 4
                                &ldquo;folder&ldquo; so that you may go back to
                                it later.
                            </em>
                            <br></br>
                            <em>
                                The <b>Load</b> button allows you to load one of
                                those plans that you saved under plan 1, plan 2,
                                plan 3 or plan 4.
                            </em>
                            <br></br>
                            <em>
                                The <b>Pick a Plan</b> button allows you to
                                choose from one of the default concentrations of
                                computer science degrees or choose a custom
                                concentration to start planning your own!
                            </em>
                            <br></br>
                            <em>
                                The <b>Import CSV</b> button allows you to
                                import a CSV file into the planner so you can
                                work on it.
                            </em>
                            <br></br>
                            <em>
                                The <b>Export CSV</b> button allows you to
                                export your <b>saved</b> plans into a CSV file
                                so that you can share it with your advisors.
                            </em>
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
