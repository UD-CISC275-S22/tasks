import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { d6, TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { QuestionType } from "./interfaces/question";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    // Make a variable based on some State. No problem!
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
            <hr />
            <DoubleHalf></DoubleHalf>
            <hr />
            <ChooseTeam></ChooseTeam>
        </div>
    );
}

export default App;
