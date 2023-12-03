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
            <hr></hr>
            {/*This is the collaspe button*/}
            <button
                type="button"
                className="btn btn-info "
                data-bs-toggle="collapse"
                data-bs-target="#welcome_message"
            >
                Need Help❓
            </button>
            <hr></hr>
            {/*When the button is clicked the message collapses*/}
            <div id="welcome_message" className="collapse">
                <p>
                    Welcome to your personal Degree Planner! Some basic tools
                    have been designed to make your visit accessible to your
                    needs; this includes creating new plans from scratch and/or
                    compiling data from a csv file. You will be able to add,
                    remove, edit, and save various courses/semesters in a
                    multitude of plans. You will be able to view 1 semester at a
                    time or multiple semesters at once. You will also be able to
                    add or remove new courses to each semester, and also add and
                    delete a plan entirely. You can also skip a semester. There
                    a templates for each concentration that you can work on and
                    there are many options to choose from when creating your
                    plan.
                </p>
            </div>

            <hr></hr>
            <ViewSemester></ViewSemester>
        </div>
    );
}

export default App;
