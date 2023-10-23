import React from "react";
import "./App.css";
import Image1 from "./Images/Delaware-Blue-Hens-Logo.png";
//import { AddClass } from "./semester-modification/AddClass";
//import { MainButtons } from "./MainScreen/MainButtons";
import Image2 from "./Images/Udel-Crest.png";
import { MainButtons } from "./MainScreen/MainButtons";
//import { Button, Container, Row, Col } from "react-bootstrap";
//import { useState } from "react";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={Image1} className="logo" />
                <h1 className="Title">Udel CS Course Scheduler</h1>
                <img src={Image2} className="logo" />
            </header>
            <hr></hr>
            <MainButtons></MainButtons>
        </div>
    );
}

export default App;
