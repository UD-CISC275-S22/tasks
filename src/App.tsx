import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { ChangeType } from "./components/ChangeType";
import { CycleHoliday } from "./components/CycleHoliday";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.ReactElement {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Hardhik Annam</p>
            <p>Hello World</p>
            <img
                src="../assets/images/mountainbackground.jpg"
                alt="Picture of a mountain"
            />
            <h1>Website Version 1.0</h1>
            <ul>
                <li>Apples</li>
                <li>Mangoes</li>
                <li>Strawberries</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red",
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <ChangeType />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            <hr />
            <CycleHoliday />
            <hr />
            <DoubleHalf />
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
            <hr />
            <CheckAnswer expectedAnswer="42" />
            <hr />
            <GiveAttempts />
            <hr />
            <EditMode />
            <hr />
            <ChangeColor />
            <hr />
            <MultipleChoiceQuestion
                expectedAnswer="Banana"
                options={["Apple", "Banana", "Cherry"]}
            />
        </div>
    );
}

export default App;
