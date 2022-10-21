import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>By: Dina Dawood</h1>
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <img
                src="https://iibawards-prod.s3.amazonaws.com/projects/images/000/002/333/large.png?1505504208"
                alt="A picture of Computer Science Concepts"
            />
            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Column 1 of 2
                        <div
                            style={{
                                width: "10px",
                                height: "5px",
                                backgroundColor: "red"
                            }}
                        >
                            this will place a red-filled rectangle in each
                            column
                        </div>
                    </Col>
                    <Col>
                        Column 2 of 2. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <div
                            style={{
                                width: "10px",
                                height: "5px",
                                backgroundColor: "red"
                            }}
                        >
                            this will place a red-filled rectangle in each
                            column
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
