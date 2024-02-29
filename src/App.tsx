import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import sunflowers from "./sunflowerField.jpg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "blueviolet" }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h1>HEADER</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p>Created by: Ellie Dassoulas</p>{" "}
            <img src={sunflowers} alt="A picture of a sunflower field" />
            <ul>
                <li>First element</li>
                <li>second element</li>
                <li>third element</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "50px"
                            }}
                        ></div>
                        First Column Here
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "100px",
                                height: "50px"
                            }}
                        ></div>
                        Second Column Here
                    </Col>
                </Row>
            </Container>
=======
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
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
