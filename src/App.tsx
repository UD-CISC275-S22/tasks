import React from "react";
import "./App.css";
import { RevealAnswer } from "./components/RevealAnswer";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ background: "green" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>By Lawrence Collins</h1>
            <img
                src="\Users\Lawrence\Desktop\Magic.png"
                alt="Magic Johnson after winning the NBA Championship"
            />
            <p>States I have been to</p>
            <ul>
                <li>Arizona</li>
                <li>Florida</li>
                <li>New York</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                border: "5px solid red",
                                padding: "10px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                border: "5px solid red",
                                padding: "10px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Lawrence Collins Hello World Edit <code>src/App.tsx</code> and
                save. This page will automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
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
            <hr />
            {/* <TwoDice></TwoDice> */}
            <hr />
            {/* <ChangeType></ChangeType> */}
            <hr />
            {/* <CycleHoliday></CycleHoliday> */}
        </div>
    );
}

export default App;
