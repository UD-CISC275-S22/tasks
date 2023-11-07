import React from "react";
import "./App.css";
import { ViewSemester } from "./Components/ViewSemesters";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 - Degree Planner
                <h6>Matthew Mestre</h6>
                <h6>Bryant Ferguson</h6>
                <h6>Ava West</h6>
                <h6>Malika Iyer</h6>
                <h6>Dina Dawood</h6>
            </header>
            <p>
                Welcome to your personal Degree Planner! Some basic tools have
                been designed to make your visit accessible to your needs; this
                includes creating new plans from scratch and/or compiling data
                from a csv file. You will be able to add, remove, edit, and save
                various courses/semesters in a multitude of plans. Scroll to the
                bottom of the page for more instructions (will enhance this
                later by making an expandable/disposable button near the top of
                the page).
            </p>
            <hr></hr>
            <ViewSemester></ViewSemester>
        </div>
    );
}

export default App;
