import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div
            style={{
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                padding: "20px",
            }}
        >
            {/* Header */}
            <header
                style={{
                    backgroundColor: "#f0a500",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    padding: "20px",
                    borderRadius: "8px",
                    marginBottom: "20px",
                }}
            >
                UD CISC275 with React Hooks and TypeScript
            </header>

            {/* Paragraphs */}
            <p>Hello World</p>
            <p>Created by Zahra Rezaei</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            {/* Placeholder Image */}
            <img
                src="https://via.placeholder.com/300"
                alt="Placeholder"
                style={{
                    maxWidth: "300px",
                    margin: "20px auto",
                    borderRadius: "8px",
                }}
            />

            {/* List */}
            <ul
                style={{
                    listStyleType: "disc",
                    paddingLeft: "40px",
                    textAlign: "left",
                    maxWidth: "400px",
                    margin: "20px auto",
                }}
            >
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ul>

            {/* Bootstrap Button */}
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
                style={{
                    margin: "20px 0",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    cursor: "pointer",
                }}
            >
                Log Hello World
            </Button>

            {/* Two-column Layout */}
            <Container style={{ marginTop: "30px" }}>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "4px",
                            }}
                        >
                            Column 1
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold",
                                borderRadius: "4px",
                            }}
                        >
                            Column 2
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
