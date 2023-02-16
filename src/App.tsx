import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Ian Steele UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <Container>
                <Row>
                    <Col>Hej</Col>
                    <Col>How r u </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
