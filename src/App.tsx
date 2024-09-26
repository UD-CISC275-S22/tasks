import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript created by Marv Dang
                and Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>This is header text</h1>
            <img
                src="https://i.redd.it/1pmsjnk8f1g01.jpg"
                alt="This is a random photo"
            />
            Ordered List:
            <ol>
                <li>first bullet point</li>
                <li>second bullet point</li>
                <li>third bullet point</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "600px",
                                height: "20px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "600px",
                                height: "20px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
