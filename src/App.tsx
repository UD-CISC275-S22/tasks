import React from "react";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import { Rectangle } from "react-shapes";

import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is header text</h1>
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript by Andrew Geraci
            </header>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>{" "}
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            <div>
                This is <span style={{ color: "red" }}>colored text</span>.
            </div>
            <img
                src="../assets/images/pet-ada.jpg"
                alt="A picture of my dog Ada
                "
            />
            <div>
                <ol>
                    <li>This is number One</li>
                    <li>This is number Two</li>
                    <li>This is number Three</li>
                </ol>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="rectangle"></div>
                        </Col>
                        <Col>
                            <div className="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
