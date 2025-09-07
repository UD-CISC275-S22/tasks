import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div style={{ border: "2px solid blue", padding: "2px" }}>
            <div className="App">
                <header className="App-header">
                    <h1>UD CISC275 with Miracle, Hello World</h1>
                </header>
                <p>
                    Hello World . Edit <code>src/App.tsx</code> and save. This
                    page will automatically reload.
                </p>
                <div className="aligned">
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                    <p>Unordered List:</p>
                    <ul>
                        <li style={{ color: "red" }}>First thing</li>
                        <li style={{ color: "red" }}>second thing</li>
                        <li style={{ color: "red" }}>third thing</li>
                    </ul>

                    <img
                        src="https://tse4.mm.bing.net/th/id/OIP.tuJ0eQdPRyK_GsDAQ4B65AHaEK?pid=Api&P=0&h=220"
                        alt="A picture of the Goat football ⚽ player"
                    />
                    <Container>
                        <Row>
                            <Col>
                                <p>First column.</p>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "40vh",
                                        backgroundColor: "red",
                                    }}
                                ></div>
                            </Col>
                            <Col>
                                <p>Second column.</p>
                                <div
                                    style={{
                                        width: "100%",
                                        height: "40vh",
                                        backgroundColor: "red",
                                    }}
                                ></div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default App;
