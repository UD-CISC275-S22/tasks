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
                automatically reload. Brett Bockstein says: Hello World
            </p>
            <header>Image Below:</header>
            <img
                src="src\Images\Republic.jpeg"
                alt="Logo of the Old Republic"
            />
            <p></p>
            Unordered List:
            <ul>
                <li>Thing One</li>
                <li>Thing Two</li>
                <li>Thing Three</li>
            </ul>
            <p></p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p></p>
            <Container>
                <Row>
                    <Col>
                        <div className="div1"></div>
                    </Col>
                    <Col>
                        <div className="div1"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
