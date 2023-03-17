import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
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
            <h1>Website</h1>
            <img src={require("./drakepic.png")} alt="Drake" width={"40%"} />
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Nicholas Lago
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="twoColumn">Column 1.</div>
                    </Col>
                    <Col>
                        <div className="twoColumn">Column 2.</div>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
                <li>Drake</li>
            </ul>
            <p>Hello World</p>
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
