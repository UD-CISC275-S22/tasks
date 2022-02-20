import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Shaun Gupta
            </header>
            <h1>Web Page for CISC 275</h1>
            <img
                src="https://s3.amazonaws.com/rm3.photos.prod.readmedia.com/students/5785174/original/Suryanuj_Gupta.jpg?1609890033"
                alt="A picture of myself."
            />
            <div>
                Things that I like:
                <ul>
                    <li>Traveling</li>
                    <li>Watching Boxing/MMA</li>
                    <li>Going to the Beach</li>
                </ul>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "20%",
                                height: "40vmin",
                                backgroundColor: "red"
                            }}
                        >
                            <Col>West Coast</Col>
                        </div>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                width: "30%",
                                height: "40vmin",
                                backgroundColor: "red"
                            }}
                        >
                            <Col>East Coast</Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default App;
