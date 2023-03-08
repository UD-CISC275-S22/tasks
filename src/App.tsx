import React from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import "./App.css";
import city from "./assets/neonCity.jpg";
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
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. - John Henry Cooper says Hello World
            </p>

            <p
                style={{
                    border: "10px groove #F700FF",
                    padding: "4px",
                    color: "#01096E"
                }}
            >
                This is the start of the{" "}
                <span style={{ color: "#F700FF" }}>Task 3 </span>
                changes.
            </p>
            <h2 style={{ color: "#F700FF", backgroundColor: "01096E" }}>
                {" "}
                What a nice looking image!
            </h2>
            <img src={city} alt="A Nice Neon City" />
            <Button
                style={{ color: "#01096E" }}
                onClick={() => console.log("Hello World!")}
            >
                <span style={{ color: "#F700FF" }}>Log Hello World</span>
            </Button>
            <div
                style={{
                    width: "1260px",
                    height: "100px",
                    backgroundColor: "red"
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            <p> Grocery List </p>
                        </Col>
                        <Col>
                            <ul>
                                <li>Soda</li>
                                <li>Bread</li>
                                <li>Chips</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
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
