import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UD CISC275 with React Hooks and TypeScript
                        </header>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <p>
                            I am adding my name Nathan Rowell. This page will
                            automatically reload. Hello World. Hello World again
                        </p>
                        <p> my favorite animals:</p>
                        <ol>
                            <li>Cat</li>
                            <li>Penguin</li>
                            <li>Hippo</li>
                        </ol>
                    </Col>
                    <Col>
                        <h1>Hello World NUMBER TWO</h1>
                        <img
                            src="https://media.pitchfork.com/photos/64c28ffcc526dd3929136bfd/16:9/w_2656,h_1494,c_limit/Taylor%20Swift.jpg"
                            alt="TAYLOR SWIFT"
                            width="200"
                            height="200"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
