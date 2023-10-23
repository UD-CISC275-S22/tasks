import React from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { SemesterTable } from "./semester/SemesterTable";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel Course Scheduler</h1>
            </header>
            <div>
                <SemesterTable></SemesterTable>
            </div>
        </div>
    );
}

export default App;
