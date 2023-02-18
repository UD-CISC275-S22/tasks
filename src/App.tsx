import React from "react";
import cat from "./images/cat.jpg";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    Steven Kraus. UD CISC275 with React Hooks and TypeScript
                </header>
                <h1>Header</h1>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <ul>
                    <li>Pasta</li>
                    <li>Rice</li>
                    <li>Pizza</li>
                </ul>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Hello World
                </p>
                <div
                    style={{ backgroundColor: "red", width: 1500, height: 200 }}
                >
                    <Container>
                        <Row>
                            <Col>Column 1</Col>
                            <Col>Column 2</Col>
                        </Row>
                    </Container>
                </div>
                <img src={cat} alt="A picture of a cat" />
            </div>
        </>
    );
}

export default App;
