import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <header>
                        Hello World and CISC275! Welcome to my website, home of
                        dogs!
                    </header>
                </div>
                <img
                    src="https://i.postimg.cc/tC2qF95N/E30-BA202-970-B-47-E4-A82-F-07-B992-B5-A896-1-201-a.jpg"
                    alt="A picture of my dogs"
                />
                <p>
                    Bruno, Alphonso and Maggie are the best dogs on the planet.
                    <br />
                    Bruno and Alfie are Newfoundlands and Maggie is a border
                    collie.
                </p>
                <h2>Bruno&apos;s Favorite Things:</h2>
                <ol>
                    <li>People</li>
                    <li>Licking everything</li>
                    <li>
                        Splooting (if you are unfamiliar with this term you
                        regret looking it up)
                    </li>
                </ol>
                {/* <h3>Alfie&apos;s Favorite Things:</h3>
                <ol>
                    <li>Food</li>
                    <li>Receiving pets</li>
                    <li>Being lazy</li>
                </ol>
                <h4>Maggie&apos;s Favorite Things:</h4>
                <ol>
                    <li>Cuddling</li>
                    <li>Playing with her frisbee</li>
                    <li>Ripping the bark off of trees in the backyard</li>
                </ol> */}
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container fluid>
                    <br />
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    alignContent: "center"
                                }}
                            >
                                First Rectangle
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    width: "500px",
                                    height: "100px",
                                    backgroundColor: "red",
                                    alignContent: "center"
                                }}
                            >
                                Second Rectangle
                            </div>
                        </Col>
                    </Row>
                </Container>
                <p>
                    <br />
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </div>
        </>
    );
}

export default App;
