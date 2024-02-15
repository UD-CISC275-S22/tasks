import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#007bff" }}
            >
                UD CISC275 with React Hooks and TypeScript- Melanie Heider-
                Hello Worlds
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>Task 3 Header Portion</h1>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <ol>
                            Ordered List:
                            <li> Apples</li>
                            <li> Oranges</li>
                            <li> Grapes</li>
                        </ol>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                marginTop: "20px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmseg.udel.edu%2Fnews%2Fud-graduate-programs-ranked-among-best-in-the-nation%2F&psig=AOvVaw1Grl7ldA9Xe6SDCgoGPXT6&ust=1708113692278000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOCr0sGRroQDFQAAAAAdAAAAABAJ"
                            alt="Here is a picture of University of Delaware's Main Green"
                        />
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                marginTop: "20px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
