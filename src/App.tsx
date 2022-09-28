import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import logo from "./assets/logo500.png";

import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 with React Hooks and TypeScript</h1>
                <p>Hello World, my name is Jackson Gunn Pack</p>
                <img src={logo} className="Logo" alt="Jackson's logo. " />
                <p>A List With:</p>
                <ul>
                    <li>One Element</li>
                    <li>Two Elements</li>
                    <li>Three Elements</li>
                </ul>
                <Container className="Row-Container">
                    <Row>
                        <Col>
                            <div className="Square" />
                        </Col>
                        <Col>
                            <div className="Square" />
                        </Col>
                    </Row>
                </Container>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
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
        </div>
    );
}

export default App;
