import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <header className="App-header">
                    UD CISC275*React Hooks*TypeScript*Michael McCully
                </header>
                <i>Hello World!</i>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page reload.
                </p>
                <h1 className="Header">
                    <span style={{ color: "White" }}>
                        CURRENT G.O.A.T. RANKINGS
                    </span>
                </h1>
                <Row>
                    <div className="Red-box"> </div>
                    <Col>
                        <ol>
                            <li>Islam Makhachev</li>
                            <li>Devonta Smith</li>
                            <li>Dwayne Michael Carter Jr.</li>
                            <li>Joel Embiid</li>
                            <li>Myself(Michael McCully)</li>
                        </ol>
                    </Col>
                    <Col>
                        <img
                            src="https://www.inquirer.com/resizer/bOio8DaUDgEMlOLzEjYZW50dUMs=/760x507/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/pmn/SOF7A64MKJAMDPJG67V42RJ6CE.jpg"
                            alt="Devonta Smith"
                        />
                        <div className="Red-box"> </div>
                    </Col>
                </Row>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </Container>
=======
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
