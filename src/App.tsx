import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Thomas Pelosi. Hello World.
            </p>

            <h1 className="App-header">This is header text</h1>

            <img
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AHelloWorld.svg&psig=AOvVaw18-h4-f_Lvij29bKo8zJ0s&ust=1679492579426000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJjqlciT7f0CFQAAAAAdAAAAABAD"
                alt="Image failed to load"
            />

            <ul>
                <li>Steve</li>
                <li>Aegis</li>
                <li>Joker</li>
            </ul>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                height: 50,
                                width: 500,
                                backgroundColor: "red"
                            }}
                        >
                            First Column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                height: 50,
                                width: 500,
                                backgroundColor: "red"
                            }}
                        >
                            Second Column
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
