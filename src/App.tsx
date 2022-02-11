import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Hello World</p>
            <p>Sean Williams</p>
            <h1>Task 3 Stuff:</h1>
            <img
                src="https://i.pinimg.com/originals/78/09/94/780994928b848b937791d382de43ef75.jpg"
                alt="Fox jumping in snow"
            />
            <ol>
                <li>I dont know what to put here</li>
                <li>Foxes are cute</li>
                <li>Filler Text</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "200px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Small Rectangle
                        <div
                            style={{
                                width: "500px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
