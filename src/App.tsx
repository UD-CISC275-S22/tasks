import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Jacob Whitman automatically. Hello World!
            </p>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
        </div>
    );
}

export default App;
