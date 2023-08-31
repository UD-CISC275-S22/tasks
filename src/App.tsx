import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1> This is the header </h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/2ChocolateChipCookies.jpg"
                alt="My favorite cookies "
                width="200"
                height="200"
            />
            <ol>
                <li> milk </li>
                <li> eggs</li>
                <li>flour</li>
                <li>sugar </li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World{" "}
            </Button>{" "}
            <Container>
                <Row>
                    <Col>
                        {" "}
                        First column
                        <div
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        {" "}
                        Second column{" "}
                        <div
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Don Daniels. {"Hello World"}
            </p>
        </div>
    );
}

export default App;
