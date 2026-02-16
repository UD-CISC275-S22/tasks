import React from "react";
import { Button } from "react-bootstrap";
import simpsons from "./images/simpsons.jpg";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>This is a header.</h1>
                UD CISC275 with React Hooks and TypeScript
                <br />
                Daniel La Mastra
                <br />
                Hello World
                <img src={simpsons} alt="Old man yells at clouds." />
                This is <span style={{ color: "red" }}>colored text</span>.
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </header>
            <p>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <Container>
                    <Row>
                        <Col style={{ backgroundColor: "red" }}>
                            First column.
                        </Col>
                        <Col
                            style={{
                                backgroundColor: "red",
                                width: "50%",
                                height: "100px",
                            }}
                        >
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
