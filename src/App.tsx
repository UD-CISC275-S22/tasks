import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div>
            (
            <Container>
                <div className="App">
                    <Row>
                        <Col>
                            <div
                                style={{
                                    border: "4px solid red",
                                    padding: "4px",
                                }}
                            >
                                <img
                                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.costacruises.com%2Fports%2Fsantorini.html&psig=AOvVaw0DKp1dO7JaheCn_A-L1wm6&ust=1725753332888000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC63aXCr4gDFQAAAAAdAAAAABAE"
                                    alt="Santorini, Greece, I travelled here this summer"
                                />
                            </div>
                        </Col>
                    </Row>
                    <header className="App-header">
                        UD CISC275 with React Hooks and TypeScript
                        <div
                            style={{ border: "4px solid red", padding: "4px" }}
                        ></div>
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
            </Container>
        </div>
    );
}

export default App;
