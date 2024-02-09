import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World Rushil Kaushik UD CISC275 with React Hooks and
                TypeScript
            </header>
            <h1>This is a header</h1>
            <img
                className="App-image"
                src="https://i.imgur.com/GwyoHnI.jpeg"
                alt="Picture of the front of a bus"
            />
            <ul>
                Unordered List
                <li>Thing 1</li>
                <li>Thing 2</li>
                <li>Thing 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div className="App">
                <Container>
                    <Row>
                        <Col className="Rect">
                            First column<p>nothing in here</p>
                        </Col>
                        <Col className="Rect">
                            Second column<p>nothing in here either</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
