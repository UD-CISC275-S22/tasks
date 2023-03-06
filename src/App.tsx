import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import beanpicture from "./images/beanpicture.jpg";
import hawaii from "./images/hawaiipic.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Katie Oates: UD CISC275: Hello World
            </header>
            <h1> Big Boy </h1>
            <img
                src={beanpicture}
                width="200"
                height="200"
                alt="A picture of my cat"
            />
            <ul>
                <li> He's a </li>
                <li> Very </li>
                <li> Cute Cat </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        Here is a picture from my trip to hawaii!
                        <div id="rectangle"></div>
                    </Col>
                    <Col>
                        <img
                            src={hawaii}
                            width="200"
                            height="200"
                            alt="A picture of the sky"
                        />
                        <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                {" "}
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
