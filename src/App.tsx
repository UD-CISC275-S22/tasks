/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import pic from "./assets/audrey.png";

function App(): JSX.Element {
    return (
        <><div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript- Madeline Pearce
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
        <div>
            <h1>This is header text.</h1>
            <img src={pic}/>
        </div>
        <div>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
        </div>
        <div>
            <Button onClick={ () => console.log("Hello World!") }>Log Hello World</Button>
        </div>
        <div>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second column.
                    </Col>
                </Row>
            </Container>
        </div></>
    );
}

export default App;
