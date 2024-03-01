import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { Counter } from "./components/Counter";
import { CycleHoliday } from "./components/CycleHoliday";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Corey Mitterer UD CISC275 with React Hooks and
                TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr></hr>
            <CycleHoliday></CycleHoliday>
            <hr></hr>
            <RevealAnswer></RevealAnswer>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
        </div>
    );
}

export default App;
