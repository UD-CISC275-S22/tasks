import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Heni Patel </h1>
            <p>Hello World</p>
            <ul>
                <li>This is</li>
                <li>for</li>
                <li>Task 3</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            First column.
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "500px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        >
                            {" "}
                            Second column. You can put whatever you want in
                            here, and it will be on the right side. Maybe try
                            adding an image?
                        </div>
                    </Col>
                </Row>
            </Container>
            <img
                src="https://www.istockphoto.com/photos/dog-cartoon"
                alt="A picture of a dog"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}
export default App;
