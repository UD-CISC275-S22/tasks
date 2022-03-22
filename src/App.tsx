import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
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
                <h1>
                    {" "}
                    UD CISC275 with hello world React Hooks and TypeScript
                    mathias heider
                </h1>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <div
                                    style={{
                                        width: "500px",
                                        height: "500px",
                                        backgroundColor: "#FF0000"
                                    }}
                                >
                                    {" "}
                                </div>
                                <li>one fish</li>
                                <li>two fish</li>
                                <li>red fish</li>
                                <li>blue fish</li>
                            </ul>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    backgroundColor: "#FF0000"
                                }}
                            >
                                {" "}
                            </div>
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </Col>
                    </Row>
                </Container>
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
        </div>
    );
}

export default App;
