import React from "react";
import "./App.css";
import { Container, Col, Row, Button } from "react-bootstrap";
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

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <section className="section">
                <h1>Aidan Tran</h1>
                <div className="orangutan__img">
                    <img
                        src={require("./orangutan.png")}
                        alt="picture of orangutan"
                    />
                </div>
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>Orangutan</li>
                                <li>Orangutan</li>
                                <li>Orangutan</li>
                            </ul>
                            <div className="red_rectangle"></div>
                        </Col>
                        <Col>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                            <div className="red_rectangle"></div>
                        </Col>
                    </Row>
                </Container>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World!
                </p>
            </section>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
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
        </div>
    );
}

export default App;
