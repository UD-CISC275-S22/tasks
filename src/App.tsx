import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import cmc from "./bloodmeridian.jpeg";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">My CISC275 Webpage</header>
            <h1>by Jonathan Ma</h1>
            <img className="Image" src={cmc} alt="Blood Meridian Fan Art" />
            <Container>
                <Row>
                    <Col>
                        <div className="Book-list">
                            My favorite books which I&apos;ve read this year:
                            <ol>
                                <li>
                                    <i>Blood Meridian</i>, Cormac McCarthy
                                </li>
                                <li>
                                    <i>Dune Messiah</i>, Frank Herbert
                                </li>
                                <li>
                                    <i>Neuromancer</i>, William Gibson
                                </li>
                                <li>
                                    <i>A Game of Thrones</i>, George R.R. Martin
                                </li>
                                <li>
                                    <i>
                                        For Whom the Bell Tolls, Ernest
                                        Hemingway
                                    </i>
                                </li>
                            </ol>
                        </div>
                        <div className="Ugly-red-rectangle"></div>
                    </Col>
                    <Col>
                        <div className="Bootstrap-button">
                            <Button onClick={() => console.log("Hello World!")}>
                                Log Hello World
                            </Button>
                        </div>
                        <div className="Ugly-red-rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
