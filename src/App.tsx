import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import "./App.css";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World, UD CISC275 with React Hooks and TypeScript - Arjun
                Manikyath
            </header>
            <div className="App-header">
                <h1>Welcome to 275</h1>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Things I like</p>
            <ul>
                <li>I like dogs</li>
                <li>I like video games</li>
                <li>I like going to the gym</li>
            </ul>
            <img src="dog.jpg" alt="A picture of a golden retriever puppy" />
            <Container>
                <Row>
                    <div
                        style={{
                            width: 400,
                            height: 200,
                            backgroundColor: "green",
                            border: "4px solid red",
                            padding: "40px"
                        }}
                    ></div>
                    <Col>Column 1</Col>
                    <div
                        style={{
                            width: 400,
                            height: 200,
                            backgroundColor: "green",
                            border: "4px solid red",
                            padding: "40px"
                        }}
                    ></div>
                    <Col>
                        {" "}
                        Column 2
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
