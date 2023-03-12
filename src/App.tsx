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
            <span style={{ color: "blue" }}></span>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Ray Yang This is a paragraph!
            </p>
            <body>
                <span style={{ color: "blue" }}>Hello World</span>
            </body>
            <div style={{ border: "5px solid blue", padding: "1px" }}>
                Here is a header and a list:
            </div>
            <h1>This is a header!</h1>
            <ol>
                <li>
                    <span style={{ color: "blue" }}>One</span>
                </li>
                <li>
                    <span style={{ color: "red" }}>Two</span>
                </li>
                <li>
                    <span style={{ color: "green" }}>Fish</span>
                </li>
            </ol>
            <img src={require("./cry.png")} alt="A picture of me crying" />
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col className="App-rectangle"> Hello </Col>
                        <Col className="App-rectangle2"></Col>
                        <Col className="App-rectangle"> World </Col>
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
