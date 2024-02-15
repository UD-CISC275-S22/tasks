/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Shamus Ellis CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>This is my header for Task 3!</h1>
            <img src="https://sabr.org/wp-content/uploads/2020/09/Schmidt-Mike-Phillies-1979-600x400-1.jpg" alt="The Best Baseball Player" />
            <Button onClick={ () => console.log ("Hello World!") }>Log Hello World</Button>
            Unordered List:
            <ul>
                <li>My favorite sport is Baseball</li>
                <li>My favorite team is the Phillies</li>
                <li>My favorite Phillie is Mike Schimdt</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
