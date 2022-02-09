import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Riley Johnson
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <header>Hello World</header>
            <div>
                <header>What is included in a Powerlifting Meet?</header>
                <ul>
                    <li>Squat</li>
                    <li>Bench</li>
                    <li>Deadlift</li>
                </ul>
                <img
                    src="../SquatBenchDeadlift.jpg"
                    alt="A picture the three powerlifting lifts"
                />
                <div>
                    <Button onClick={() => console.log("Hello World!")}>
                        Log Hello World
                    </Button>
                </div>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div> Rectangle 1</div>
                        </Col>
                        <Col>
                            <div> Rectangle 2</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
