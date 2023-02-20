import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
//import dogs from "C:UsersShawn\taskssrcimagesMJL.JPG";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div>
                <h1>
                    <span className="hbackground">
                        This is the best header ever!
                    </span>
                </h1>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Shawn Dempsey! Hello World.
                </p>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="redrect">
                                <img
                                    src="C:UsersShawn\taskssrcimagesMJL.JPG"
                                    alt="Picture of the 3 Greatest Dogs"
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="redrect">
                                <p text-align="left">Best Dogs in Order:</p>
                                <ol>
                                    <li>Molly</li>
                                    <li>Jax</li>
                                    <li>Lila</li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br></br>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
