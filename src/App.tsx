import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Container, Row, Col } from "react-bootstrap";
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
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript (Matthew Hansen)
                    <h1>This is header text</h1>
                </header>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First column.
                            <div className="rectangle"></div>
                            <img
                                src="https://www.planetware.com/photos-large/F/eiffel-tower.jpg"
                                alt="A picture of the Eiffel tower"
                            />
                        </Col>
                        <Col>
                            Second column.
                            <div className="rectangle"></div>
                            <ul>
                                <li>First thing</li>
                                <li>Another thing</li>
                                <li>A third item</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
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
