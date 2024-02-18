import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import img from "./Images/Alicia_Meme.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript (Phillip Bund
                Mayaka.) Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <h1> Header text </h1>

            <img
                src="https://i.pinimg.com/originals/3d/16/8b/3d168b95b673a750b38bbdd30be06fc3.jpg"
                alt="picture of a monkey"
                width="200"
                height="200"
            />

            <ul>
                <li>McDonalds</li>
                <li>ChickFilA</li>
                <li>Wendys</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        {"First Column"}
                        <div className="Rectangle">Stuff In First Column</div>
                    </Col>
                    <Col>
                        {"Second Column"}
                        <div className="Rectangle">Stuff In Second Column</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
