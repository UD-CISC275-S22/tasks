import React from "react";
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
            <header className="App-header" style={{ color: "red" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <Container>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. By - William Branam. Hello World.
                </p>
            </Container>
            <div>
                <Button onClick={() => console.log("I am logged")}>
                    Click Me
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "30%",
                                height: "40%"
                            }}
                        ></div>
                        First column.
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "30%",
                                height: "40%"
                            }}
                        ></div>
                        Second column. You can put whatever you want in right
                        right side. Maybe try adding an adding an image?
                    </Col>
                </Row>
            </Container>
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
