import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import game from "./Call of Duty.jpg";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1> This is a header text</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hellow World
            </Button>
            <p>Junnan Bai</p>
            <p>Hello World</p>
            <ul>
                <li>I love CISC275</li>
                <li>one of my favourite course</li>
                <li>I love HTML and CSS</li>
            </ul>
            <Row>
                <Col>
                    <div className="Column"></div>
                    First column
                </Col>
                <Col>
                    <div className="Column"></div>
                    Second column
                </Col>
            </Row>
            <img src={game} alt="A picture of my favourite game" />
        </div>
    );
}

export default App;
