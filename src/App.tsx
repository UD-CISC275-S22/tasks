import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import logo from "./images/golconda.jpeg";
function App(): JSX.Element {
    return (
        <div
            className="App"
            style={{ border: "10px solid green", padding: "4px" }}
        >
            <h1>This is my header for tests</h1>
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
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <header className="App-header">
                <span style={{ color: "red" }}>
                    Hello World UD CISC275 with React Hooks and TypeScript{" "}
                </span>
            </header>
            <img src={logo} alt="Golconda, a picture by Rene Magritte" />
            Cars
            <ul>
                <li>ferrari</li>
                <li>honda</li>
                <li>koenigsegg</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code>3 and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
