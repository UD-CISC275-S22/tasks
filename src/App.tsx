import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import bosun_tally from "../src/bosun_tally.jpg";

function App(): JSX.Element {
    return (
        <div>
            <header className="App-header">
                Hello World! CISC275 This is really a banner, <b></b>though the
                tag says <q>header</q>
            </header>
            <h1>My Top Header</h1>
            <Container>
                <Row>
                    <Col> {myButton()} </Col>
                    <Col>{myRectangle("Now this is a rectangle.")}</Col>
                </Row>
                <Row>
                    <Col> {myRectangle("Rectangle.")} </Col>
                    <Col> {/* {myButton()} */} </Col>
                </Row>
                <Row>
                    <div>
                        <p></p>
                        <div
                            style={{
                                color: "white",
                                backgroundColor: "purple",
                                width: "40%"
                            }}
                        >
                            Why you need an emergency backup dog:
                        </div>

                        <ol>
                            <li>in case primary dog fails</li>
                            <li>twice the vacuuming!</li>
                            <li>one for each hand (if you have two hands)</li>
                        </ol>
                    </div>
                </Row>
                <Row>
                    <span
                        style={{
                            textAlign: "center"
                        }}
                    >
                        <p></p>
                        Pacem in Terris
                    </span>

                    <img
                        src={bosun_tally}
                        alt="a large Bull Terrier on sofa with small spaniel above on sofa back"
                    />
                    <p></p>
                </Row>
            </Container>
        </div>
    );
}

function myButton(): JSX.Element {
    return (
        <div>
            <Button onClick={() => console.log("Hello World!")}>
                {"Log Hello World"}
            </Button>
        </div>
    );
}

function myRectangle(s1: string): JSX.Element {
    return (
        <div
            style={{
                border: "2px solid red",
                padding: "5px",
                width: "50%",
                height: "1cm"
            }}
        >
            {s1}
        </div>
    );
}

export default App;
