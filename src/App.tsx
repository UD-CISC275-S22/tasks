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
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
>>>>>>> upstream/task-components

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD

            <div> Name: Farhan Ohe </div>
            <div>Hello World</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div style={{ border: "6px solid maroon", padding: "4px" }}>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <h1>Hello Welcome to My website</h1>
                <Container>
                    <Row>
                        <Col
                            style={{
                                border: "6px solid maroon",
                                padding: "4px"
                            }}
                        >
                            <p>Image of my fav car brand</p>
                            <img
                                src="https://di-uploads-pod16.dealerinspire.com/competitionbmwofsmithtown/uploads/2020/03/new-bmw-logo.jpg"
                                alt="Logo of Favourite car brand"
                                width={"500"}
                                height={"300"}
                            />
                            <div>
                                <div
                                    className="redBox"
                                    style={{
                                        backgroundColor: "red",
                                        width: "80px",
                                        height: "80px"
                                    }}
                                ></div>
                            </div>
                        </Col>

                        <Col
                            style={{
                                border: "6px solid maroon",
                                padding: "4px"
                            }}
                        >
                            <p>
                                <span style={{ color: "maroon" }}>
                                    Making a list of my favourite cars
                                </span>
                            </p>
                            <ul>
                                <li>Lexus LFA</li>
                                <li>Any Generation of BMW M Cars</li>
                                <li>Audi R8 V10</li>
                            </ul>
                            <div>
                                <div
                                    className="redBox"
                                    style={{
                                        backgroundColor: "red",
                                        width: "200px",
                                        height: "200px"
                                    }}
                                ></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
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
>>>>>>> upstream/task-components
        </div>
    );
}

export default App;
