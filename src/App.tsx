import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
                UD CISC275 with React Hooks and TypeScript - Will Gunter
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>Things to do in Manhattan Beach, CA</h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Manhattan_Pier.jpg"
                alt="A picture of the pier in Manhattan Beach, CA"
                width="600"
                height="400"
            />
            <p>-----------------------------</p>
            <ul>
                <li>Visit Manhattan Beach Pier</li>
                <li>Take a stroll on the Strand</li>
                <li>Walk down a Manhattan Beach Walking Street</li>
                <li>Visit a local restaurant, such as Simmzys</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 250,
                                height: 500
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 250,
                                height: 500
                            }}
                        ></div>
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
