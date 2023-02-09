import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import photo from "./site.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Alex Peluso: UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Header</h1>
            <p>Hello World! Testing HTML</p>
            <img src={photo} alt="UD Logo" />
            <ul>
                <li>Hello</li>
                <li>My Name Is Alex Peluso</li>
                <li>I Am A Student At UD</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container fluid>
                    <Row>
                        <div
                            style={{
                                width: 600,
                                height: 200,
                                backgroundColor: "red",
                                border: "5px solid blue",
                                padding: "50px"
                            }}
                        >
                            <Col>First column.</Col>
                        </div>
                        <div
                            style={{
                                width: 600,
                                height: 200,
                                backgroundColor: "red",
                                border: "5px solid blue"
                            }}
                        >
                            <Col>
                                Second Column.
                                <img src={photo} alt="UD Logo" />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
