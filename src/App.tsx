import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";
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
            <header>this is zoe test</header>
            <h1 className="App-header">
                There is a header CISC275 Alejandro Silva
            </h1>
            <img
                src="https://unsplash.com/photos/t_mt9LeOmPs"
                alt="Scenic Architecture"
            />
            Different Modern Buildings
            <ul>
                <li>Falling Water</li>
                <li>The Empire State Building</li>
                <li>The Guggenheim</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div className="App-square"></div>
                    </Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div className="App-square"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
