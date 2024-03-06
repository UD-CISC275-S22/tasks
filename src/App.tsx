import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { Counter } from "./components/Counter";
import { CycleHoliday } from "./components/CycleHoliday";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Corey Mitterer UD CISC275 with React Hooks and
                TypeScript
            </header>
            <hr></hr>
            <StartAttempt></StartAttempt>
            <hr></hr>
            <TwoDice></TwoDice>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
        </div>
    );
}

export default App;
