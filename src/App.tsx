import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            <h1>
                                Ryan Sexton: UD CISC275 with React Hooks and
                                TypeScript
                            </h1>
                        </header>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World!
                        </Button>
                        <div>width=5 height=10 backroundcolor = red</div>
                    </Col>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            automatically reload. Hello World
                        </p>
                        <div>width=5 height=10 backroundcolor = red</div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Baseball</li>
                            <li>Football</li>
                            <li>Basketball</li>
                        </ul>
                        <img src="i.png" alt="The New York Mets!" />
                        <div>width=5 height=10 backroundcolor = red</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
