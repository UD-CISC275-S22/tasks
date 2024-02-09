import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import img from "/Users/saakethpula/tasks/src/assets/images/rOphhcP.jpeg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Saaketh Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <h1 className="banner">This is the new header</h1>
            <p>My Favorite Games:</p>
            <ul>
                <li>Assetto Corsa</li>
                <li>Terraria</li>
                <li>Fortnite</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <img src={img} alt="An Audi R8 pictured from Assetto Corsa" />
            <Container>
                <Row>
                    <Col>
                        Reasons I love Assetto Corsa:
                        <p>It is fun, cheap, and realistic</p>{" "}
                        <div className="redBox"></div>
                        <p> </p>
                    </Col>
                    <Col>
                        Reasons I hate Assetto Corsa:
                        <p>
                            I have wasted thousands of hours on this game
                        </p>{" "}
                        <div className="redBox"> </div>
                        <p> </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
