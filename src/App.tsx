import React, { useState } from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import image1 from "./images/Hamilton.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Matthew Montalvo Hello World
            </p>
            <header className="Latest-header">New Header</header>
            <img src={image1} alt="Hamilton the musical star" />
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Orange</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <header className="first-Rectangle"> </header>
                    </Col>
                    <Col>
                        <header className="second-Rectangle"> </header>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
