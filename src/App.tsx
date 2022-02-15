import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <>
            <div className="App">
                <div className="App-header">
                    <h1> Welcome to my website, home of my precious dogs!</h1>
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
                    {" "}
                    <li>1. People</li>
                    <li>2. Licking everything</li>
                    <li>
                        3. Splooting (if you are unfamiliar with this term you
                        will not regret looking it up)
                    </li>
                </ol>
                <h3>Alfie&apos;s Favorite Things:</h3>
                <ol>
                    {" "}
                    <li>1. Food</li>
                    <li>2. Receiving pets</li>
                    <li>3. Being lazy</li>
                </ol>
                <h4>Maggie&apos;s Favorite Things:</h4>
                <ol>
                    {" "}
                    <li>1. Cuddling</li>
                    <li>2. Playing with her frisbee</li>
                    <li>3. Ripping the bark off of trees in the backyard</li>
                </ol>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <Container>
                    <Row>
                        <div className="App-rect">
                            <Col>First Column</Col>
                        </div>
                        <div className="App-rect">
                            <Col>Second Column</Col>
                        </div>
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
