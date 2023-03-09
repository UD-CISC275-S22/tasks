import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
<<<<<<< HEAD
import dog from "./Dog_Breeds.jpg";
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
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Alexander Marshall
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World!</p>
            <h1>
                <span style={{ backgroundColor: "red" }}>Task 3</span>
            </h1>
            <img
                src={dog}
                width="100"
                height="100"
                alt="A picture of a cute dog"
            />
            <div>
                Animals:
                <ul>
                    <li>dogs</li>
                    <li>cats</li>
                    <li>lizards</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        First Column.
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        Second column.
                        <div className="rectangle"></div>
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
