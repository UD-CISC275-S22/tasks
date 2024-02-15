import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Brandon Cell - UD CISC275 - Hello World!
            </header>
            <h1 style={{ textAlign: "center" }}>
                Header - Here Are My Things:
            </h1>
            <Container>
                <Row>
                    <Col style={{ border: "5px solid green", padding: "25px" }}>
                        <p>Column 1</p>
                        <p>Things on this website:</p>
                        <ul>
                            <li>Header</li>
                            <li>Image</li>
                            <li>List with at least 3 elements</li>
                            <li>Background of header area</li>
                            <li>Bootstrap button with Log Hello World</li>
                            <li>Button that logs Hello World!</li>
                            <li>A two column layout</li>
                            <li>
                                Red-filled rectangle in each of those columns
                            </li>
                        </ul>
                        <div
                            style={{
                                width: "300px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                    <Col style={{ border: "5px solid green", padding: "25px" }}>
                        <p>Column 2</p>
                        <div
                            style={{
                                width: "300px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <p>Picture Time:</p>
                        <img
                            src={require("./images/diner.jpeg")}
                            width="300"
                            height="300"
                            alt="Pinecone Dinner"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
