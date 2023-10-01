import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import img_berryblitz from "./img-berryblitz.jpeg";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Henry Grant
            </header>
<<<<<<< HEAD
            <h1> New Header</h1>
            <img src={img_berryblitz} alt="picture of berry blitz" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <ul>
                <li>Hi</li>
                <li>Hello</li>
                <li>Hows it goin</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <div className="column">column 1</div>
                    </Col>

                    <Col>
                        <div className="column">column 2</div>
                    </Col>
                </Row>
            </Container>
            <p> Hello World</p>
=======
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
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
