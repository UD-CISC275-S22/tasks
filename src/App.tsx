import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Dhruv Patel, Hello World :D
            </p>
            <h1>Whitevan</h1>
            <img
                src="data:image/jpeg;base64,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"
                alt="Doomfist!"
            />
            <ul>
                <li>Crucible</li>
                <li>Gambit</li>
                <li>Other PVE</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div className="row">
                <Container>
                    <Row>
                        <Col>
                            <div className="column1"> C++ </div>
                        </Col>
                        <Col>
                            <div className="column2"> ROCKS! </div>
                        </Col>
                    </Row>
                </Container>
            </div>
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
