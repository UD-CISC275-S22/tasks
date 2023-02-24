import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Christian Rullan, Hello World</p>
            <h1>This is a header</h1>
            <img
                src="https://images.theconversation.com/files/256625/original/file-20190131-42594-2tc1e7.jpg?ixlib=rb
            -1.1.0&q=45&auto=format&w=1000&fit=clip"
                width="700px"
                height="300px"
                alt="Looks like theres no image here..."
            />
            <Container>
                <Row>
                    <Col xs md lg="5">
                        <div
                            style={{
                                width: "400px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <div className="unorderedList">
                        Things in this picture
                        <ul>
                            <li>Fish</li>
                            <li>Water</li>
                            <li>some coral</li>
                        </ul>
                    </div>
                    <Col>
                        <div
                            style={{
                                width: "400px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <button
                className="btn btn-primary"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </button>
        </div>
    );
}

export default App;
