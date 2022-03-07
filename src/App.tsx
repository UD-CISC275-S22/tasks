import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
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
                Ocean Shen: UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hello World!</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        Who is Ocean Shen?
                        <ul>
                            <li>I am a sophomore CS and STAT double major.</li>
                            <li>I like to code, eat, and sleep.</li>
                            <li>
                                I was introduced to programming through Python.
                            </li>
                        </ul>
                        <div
                            style={{
                                height: 50,
                                width: 200,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <p>
                            Here is a picture of food I like to eat when coding:
                        </p>
                        <img
                            height="70%"
                            width="50%"
                            src="https://media.chefdehome.com/740/0/0/salsa/homemade-salsa.jpg"
                            alt="A picture of chips being dipped in salsa"
                        />
                        <p></p>
                        <div
                            style={{
                                height: 50,
                                width: 200,
                                backgroundColor: "red"
                            }}
                        ></div>
                        <p></p>
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
