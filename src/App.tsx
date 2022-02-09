import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import image from "./images/image.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Jackson Leadlove&apos;s UD CISC275 with React Hooks and
                TypeScript.
            </header>

            <p>
                Hello World! Following is a set of HTML and Bootstrap elements
                that satisfy the tests in Task 3.
            </p>

            <h2> This is a header! Yay! </h2>

            <img
                src={image}
                alt="This is an image I created in Photopea. More specifically, this is the alternative text for the image in case it fails to load."
            />

            <ul>
                <li>This is an unordered list!</li>
                <li>It has at least three elements.</li>
                <li>
                    Therefore, it should, in theory, satisfy the test for the
                    Task.
                </li>
            </ul>

            <div className="button">
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <Container>
                <Row>
                    <div className="col">
                        <Col md="auto">First column of two column layout.</Col>
                    </div>
                    <div className="col">
                        <Col md="auto">Second column of two column layout.</Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default App;
