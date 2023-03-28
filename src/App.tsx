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
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

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
                                            border: "7px solid #000000",
                                            padding: "1px"
                                        }}
                                    >
                                        <div>
                                            <div className="font-size">
                                                <span
                                                    style={{
                                                        color: "black"
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
                                            border: "7px solid black",
                                            padding: "1px"
                                        }}
                                    >
                                        <div>
                                            <div className="font-size">
                                                <span
                                                    style={{
                                                        color: "black"
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
                <hr></hr>
                <DoubleHalf></DoubleHalf>
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <CheckAnswer expectedAnswer="42"></CheckAnswer>
                <hr></hr>
                <GiveAttempts></GiveAttempts>
                <hr></hr>
                <EditMode></EditMode>
                <hr></hr>
                <ChangeColor></ChangeColor>
                <hr></hr>
                <MultipleChoiceQuestion
                    options={["a", "b", "c"]}
                    expectedAnswer="b"
                ></MultipleChoiceQuestion>
            </div>
        </div>
    );
}

export default App;
