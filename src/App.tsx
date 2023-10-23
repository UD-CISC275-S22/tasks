import React from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
import { Button } from "react-bootstrap";
import { AddClass } from "./semester-modification/AddClass";
import { classes } from "./Interface/classes";
import { semester } from "./Interface/semester";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel Course Scheduler</h1>
            </header>
        </div>
    );
}

export default App;
