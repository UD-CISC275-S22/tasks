import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
import Rainer from "./rainer.jpg";
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
            <h1>Ethan Hogan, Hello World</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <img
                    src={Rainer}
                    alt="A poster of mount rainer national park"
                    width="400"
                />
            </div>
            <div>
                Favorite Numbers:
                <ol>
                    <li>44</li>
                    <li>26</li>
                    <li>7436</li>
                </ol>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <br></br>
            <div className="rect">
                <Container>
                    <Row>
                        <Col>Rect 1</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>First Column</Col>
                    <Col>Second Column</Col>
                </Row>
            </Container>
            <div className="rect">
                <Container>
                    <Row>
                        <Col>Rect 2</Col>
                    </Row>
                </Container>
            </div>
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
