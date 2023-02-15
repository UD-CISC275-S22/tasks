import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pickle from "/Users/gavincaulfield/tasks/src/pickle.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Website belongs to Gavin Caulfield! Hello World!</p>
            <div>
                <h1>Im really bout to geet yo pickle cheen ahh</h1>
                <img src={pickle} alt="the man himself" />
                <p>Things im about to do</p>
                <ul>
                    <li>What: geet a pickle chin ahh</li>
                    <li>Who: yo</li>
                    <li>When: in a moment, im about to</li>
                </ul>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            {/* <Button
                onClick={() =>
                    "href = 'https://www.youtube.com/watch?v=Vh5TvoLRpt4'"
                }
            >
                Click for virus
            </Button> */}
            <div>
                <Container>
                    <Row>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                height: "30px",
                                width: "200px"
                            }}
                        >
                            <Col>Collum 1 babyyyyyyy</Col>
                        </div>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                height: "500px",
                                width: "200px"
                            }}
                        >
                            <Col>COLUMN 2 BAYYYYYY</Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
