import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Luke Remmler Hello
                World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Luke Remmler App</h1>
            <img
                src="../assets/images/pet-ada.jpg"
                alt="Dr. Bart's dog Ada"
            />
            Unordered List:
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
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
                                width: "60px",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "60px",
                                height: "120px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            
            {/* Added Components */}
            <hr />
            <h2>Counter Component</h2>
            <Counter />
            
            <hr />
            <h2>Reveal Answer Component</h2>
            <RevealAnswer />
            
            <hr />
            <h2>Change Type Component</h2>
            <ChangeType />
            
            <hr />
            <h2>Start Attempt Component</h2>
            <StartAttempt />
            
            <hr />
            <h2>Two Dice Component</h2>
            <TwoDice />
            
            <hr />
            <h2>Cycle Holiday Component</h2>
            <CycleHoliday />
        </div>
    );
}

export default App;
