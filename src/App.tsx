import React from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { Button } from "react-bootstrap";
import { AddClass } from "./semester-modification/AddClass";
import { classes } from "./Interface/classes";
import { semester } from "./Interface/semester";

function App(): JSX.Element {
    //Just testing data comment in if needed but will be commented out-----------------------
    const work: classes = {
        code: "A",
        title: "A",
        credits: 3,
        preReq: [""],
        schedule: { day: ["Monday"], time: "12:15" },
        location: "A",
        instructor: "A"
    };
    const testing: semester = {
        classList: [
            {
                code: "A",
                title: "A",
                credits: 3,
                preReq: [""],
                schedule: { day: ["Monday"], time: "12:15" },
                location: "A",
                instructor: "A"
            }
        ]
    };
    //-----------------------------------------------------------------------------------------
    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel Course Scheduler</h1>
            </header>
            <div>
                Length of semester classes list: {testing.classList.length}
            </div>
            <div>
                <AddClass {...testing} {...work}></AddClass>
            </div>
        </div>
    );
}

export default App;
