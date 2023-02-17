import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World, UD CISC275 with React Hooks and TypeScript - Arjun
                Manikyath
            </header>
            <div className="App-header">
                <h1>Welcome to 275</h1>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>List of Things I like</p>
            <ul>
                <li>Videogames</li>
                <li>Dogs</li>
                <li>Baseball</li>
            </ul>
            <img
                src="https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/fdecc7f0-42bf-4696-bd4c-73a868e5d1d2/81.jpg?format=750w"
                alt="Golden Retriever Puppy"
            />

            <Container>
                <Row>
                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>First column.</Col>

                    <div
                        style={{
                            width: 600,
                            height: 200,
                            backgroundColor: "red",
                            border: "5px solid blue",
                            padding: "50px"
                        }}
                    ></div>
                    <Col>
                        Second column. You can put whatever you want in here,
                        and it will be on the right side. Maybe try adding an
                        image?
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
