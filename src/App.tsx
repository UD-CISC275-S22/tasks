import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import image from "./Getaway.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="p1">
            <div className="App">
                <header className="App-header">
                    <h1>
                        <span style={{ color: "white" }}>CISC275</span>
                    </h1>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </header>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="Rectangle">
                                    <div
                                        style={{
                                            border: "7px solid #a29bfd",
                                            padding: "1px"
                                        }}
                                    >
                                        <div>
                                            <div className="font-size">
                                                <span
                                                    style={{
                                                        color: "#a29bfd"
                                                    }}
                                                >
                                                    DAY
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    To be Filled
                                </div>
                            </Col>
                            <Col>
                                <div
                                    className="Rectangle"
                                    style={{ textAlign: "center" }}
                                >
                                    <div
                                        style={{
                                            border: "7px solid #a29bfd",
                                            padding: "1px"
                                        }}
                                    >
                                        <div>
                                            <div className="font-size">
                                                <span
                                                    style={{
                                                        color: "#a29bfd"
                                                    }}
                                                >
                                                    NIGHT
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>Nights</li>
                                        <li>Stars</li>
                                        <li>Traffic Lights</li>
                                        <li>Music</li>
                                        <li>Rain</li>
                                        <li>Reflections</li>
                                        <li>Moon</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="white-space"></div>
                <img src={image} alt="Purity" />
            </div>
            <div className="shift">
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
        </div>
    );
}

export default App;
