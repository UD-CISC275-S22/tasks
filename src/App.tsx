import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 className="Intro">Hello World, Task 3 progress</h1>
            <img
                src="https://static4.depositphotos.com/1003362/340/i/450/depositphotos_3406277-stock-photo-red-heart-3d.jpg"
                alt="Heart pic"
            />
            <ul className="List3">
                <li>First thing</li>
                <li>Second thing</li>
                <li>Third thing</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello student name Duy Duc (Dustin) Tran
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 50
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 50
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
