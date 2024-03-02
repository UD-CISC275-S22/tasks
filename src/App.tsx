import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
import garfield from "./925_garfield.jpg";
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
<<<<<<< HEAD
            <header className="App-header">React Hooks and TypeScript</header>
            <h2> UD CISC275 2024</h2>
            <p>Kushal Gurrapu</p>
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            Random List!
                            <ul>
                                <li>I am so Computer Science!</li>
                                <li>I passed my DiffEQ exam!</li>
                                <li>I am very sick right now!</li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "500px",
                                padding: "10px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            <img
                                src={garfield}
                                width="480"
                                height="480"
                                alt="Garfield!"
                            />{" "}
                        </div>
                    </Col>
                </Row>
            </Container>
=======
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
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
