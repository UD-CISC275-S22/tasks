//Joshua Sean Marcos Taing
import React from "react";
import "./App.css";
import bnuy_img from "./bnuy_chair.png";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Hey! This is some header text!</h1>
            <div className="image">
                <img src={bnuy_img} alt="Bunny in a chair!" />
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Joshua Taing. Hello World!
            </p>
            This is a mantra:
            <ul>
                <li>chi yongwa shok</li>
                <li>gangtar drow song</li>
                <li>chi kyang göpamé</li>
            </ul>
            <div className="button">
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div className="App-columns">
                <Container>
                    <Row>
                        <Col>The first column.</Col>
                        <Col>The other column.</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
