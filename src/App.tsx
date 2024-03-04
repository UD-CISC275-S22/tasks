import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Container, Row, Col } from "react-bootstrap";
import img from "./jelliesBackground.jpg";
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
            <header className="App-header" style={{ backgroundColor: "red" }}>
                Olivia Folliard UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <Container>
                <Row>
                    <Col>
                        <h1>First Column.</h1>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col>
                        <p>Jellies!</p>
                        <img src={img} alt="A picture of jellyfish." />
                        <ul>
                            <li>jellyfish live in the ocean</li>
                            <li>some jellies glow in the dark</li>
                            <li>there is a kind of jelly that is immortal</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <p> Hello World! </p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
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
