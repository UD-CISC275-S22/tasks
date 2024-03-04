import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
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
                style={{ backgroundColor: "LightSkyBlue" }}
            >
                Olivia Karney - UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <h3>Spring 2024</h3>
            <hr></hr>
            <span>Hello World!</span>
            <hr></hr>
            <img
                src="https://as1.ftcdn.net/v2/jpg/02/64/91/06/1000_F_264910607_0WvD3QBB0LWyVc8FtrtcqPGSVOcsKi9B.jpg"
                alt="Image that I am required to add, by law."
                width={400}
                height={400}
            />
            <hr></hr>
            <span>List of Animals</span>
            <ul>
                <li>Dog</li>
                <li>Cat</li>
                <li>Horse</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column. Hello!!
                        <div
                            style={{
                                width: 300,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second column. Good-bye!!
                        <div
                            style={{
                                width: 300,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
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
