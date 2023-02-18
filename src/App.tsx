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
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            automatically reload. Hello World
                        </p>
                        <div className="rectangle"></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Baseball</li>
                            <li>Football</li>
                            <li>Basketball</li>
                        </ul>
                        <img
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/121.svg"
                            alt="The New York Mets!"
                        />
                        <div className="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
