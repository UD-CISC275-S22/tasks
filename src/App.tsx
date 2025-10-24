import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
//import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
//import { StartAttempt } from "./components/StartAttempt";
//import { TwoDice } from "./components/TwoDice";
//import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div style={{ backgroundColor: "lightblue" }} />
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <h1>Welcome!</h1>
                <img src="/cute_dogs.jpg" alt="Image of cute dogs" />
                <p>
                    Gabi Manzari - Edit <code>src/App.tsx</code> and save. This
                    page will automatically reload.
                </p>
                <p>Hello World</p>
                <div>
                    List of Movies:
                    <ul>
                        <li>Zootopia</li>
                        <li>Wicked</li>
                        <li>The Long Walk</li>
                    </ul>
                    <div>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    border: "1px solid red",
                                    padding: "4px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            First column.
                        </Col>
                        <Col>
                            <div
                                style={{
                                    border: "1px solid red",
                                    padding: "4px",
                                    backgroundColor: "red",
                                }}
                            ></div>
                            Second column.
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                Counter: <Counter></Counter>
            </div>
            <div>
                {"What's the answer?"}
                <RevealAnswer></RevealAnswer>
            </div>
            <div>
                <ChangeType></ChangeType>
            </div>
            <div>
                <StartAttempt></StartAttempt>
            </div>
            <div>
                <TwoDice></TwoDice>
            </div>
            <div>
                <CycleHoliday></CycleHoliday>
            </div>
            <div>
                <DoubleHalf></DoubleHalf>
            </div>
            <div>
                <CheckAnswer expectedAnswer={"hi"}></CheckAnswer>
            </div>
            <div>
                <GiveAttempts></GiveAttempts>
            </div>
            <div>
                <EditMode></EditMode>
            </div>
            <div>
                <ChangeColor></ChangeColor>
            </div>
            <div>
                <MultipleChoiceQuestion
                    options={["1", "2", "3", "4"]}
                    expectedAnswer={"3"}
                ></MultipleChoiceQuestion>
            </div>
        </>
    );
}

export default App;
