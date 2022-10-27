import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import game from "./Call of Duty.jpg";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1> This is a header text</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hellow World
            </Button>
            <p>Junnan Bai</p>
            <p>Hello World</p>
            <ul>
                <li>I love CISC275</li>
                <li>one of my favourite course</li>
                <li>I love HTML and CSS</li>
            </ul>
            <Row>
                <Col>
                    <div className="Column"></div>
                    First column
                </Col>
                <Col>
                    <div className="Column"></div>
                    Second column
                </Col>
            </Row>
            <img src={game} alt="A picture of my favourite game" />
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
            upstream/task-state
        </div>
    );
}

export default App;
