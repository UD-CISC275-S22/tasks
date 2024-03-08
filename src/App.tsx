import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button, Col, Container, Row } from "react-bootstrap";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#2cbb04" }}
            >
                UD CISC275 with React Hooks and TypeScript, BBank
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
            <h1>H1</h1>
            <img
                src={require("./Untitled drawing.png")}
                alt="a random Google Drawing"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <ul>
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            <div style={{ border: "5px solid blue", padding: "5px" }}></div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Col1
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Col2
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {<DoubleHalf></DoubleHalf>}
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
