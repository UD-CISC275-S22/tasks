import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div style={{ border: "1px solid blue", padding: "12px" }}>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                    <h1>Really Big Header !!! </h1>
                </header>
                <p> Editted by Selin Bacaz, Hello World !! </p>

                <Container>
                    <Row>
                        <Col
                            style={{
                                backgroundColor: "orange",
                                color: "white"
                            }}
                        >
                            <div
                                style={{
                                    width: "600px",
                                    height: "8px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            <img
                                src={require("./assets/tiny dtrawberry flipped transparent png.png")}
                                alt="A flipped strawberry"
                            />
                            <ul>
                                <li>Fun fact: I drew the strawberry</li>
                                <li>Also I coded this text</li>
                                <li>
                                    Which is, in my opinion, pretty cute :){" "}
                                </li>
                                <li>
                                    Uhhhhhhhhh more strawberries to come
                                    probably{" "}
                                </li>
                            </ul>
                        </Col>
                        <Col
                            style={{ backgroundColor: "pink", color: "white" }}
                        >
                            <div
                                style={{
                                    width: "600px",
                                    height: "8px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p> ⬤ </p>
                            <p> ⬤ </p>
                            <p> ⬤ </p>
                            <Button
                                style={{
                                    backgroundColor: "green",
                                    color: "white"
                                }}
                                onClick={() => console.log("Hello World!")}
                            >
                                Log Hello World
                            </Button>
                            <p> ⬤ </p>
                            <p> ⬤ </p>
                            <p> ⬤ </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

/**
//npm run start to start the website from this terminal
//Add a header
//Add an image with alt text
//Add a list with at least three elements
//Change the background color of the header area
//Add a bootstrap button with the text Log Hello World
//Make the button log Hello World! when clicked

//Have a two-column layout on the page somwhere
Put a red-filled rectangle in each column using a div tag with width, height, and backgroundColor styles.
*/

export default App;
