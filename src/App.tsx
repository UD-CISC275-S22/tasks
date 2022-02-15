import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Abbey Walters
            </header>
            <h1>Happy Valentines Day!</h1>
            <img
                src="data:image/jpeg;base64,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"
                alt="heart"
            />
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World!
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        First
                        <div className="App-rect1">Rectangle1</div>
                        <ul>
                            <li>a</li>
                            <li>b</li>
                            <li>c</li>
                            <li>d</li>
                        </ul>
                    </Col>
                    <Col>
                        Second
                        <div className="App-rect1">Rectangle2</div>
                    </Col>
                </Row>
            </Container>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
