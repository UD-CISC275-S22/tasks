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
            <img src={photo} />
            <ul>
                <li>Hello</li>
                <li>My Name Is Alex Peluso</li>
                <li>I Am A Student At UD</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Click Me
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>First column.</Col>
                        <Col>
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
