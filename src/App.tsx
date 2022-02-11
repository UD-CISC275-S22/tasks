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
            <Button onClick={() => console.log("I am logged")}>Click Me</Button>
            <p>Hello World</p>
            <p>Sean Williams</p>
            <h1>Task 3 Stuff:</h1>
            <img src="src/car.jpg" alt="A picture of my old car" />
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
        </div>
    );
}

export default App;
