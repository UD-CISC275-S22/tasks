import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import ronaldoImage from "/Users/hb/Desktop/CISC275/tasks/src/ronaldo 5.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome to my Website </h1>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        First column.
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        Maybe try adding an image?
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Harman Bagga. Hello World
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img
                src={ronaldoImage}
                alt="Ronaldo siuuuuuuuu"
                style={{ height: "200px", width: "auto" }}
            />
        </div>
    );
}

export default App;
