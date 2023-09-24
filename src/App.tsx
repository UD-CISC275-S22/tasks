import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header"> Matthew Conlon UD CISC275 </header>
            <h1> Generic Task 3 header</h1>
            <p> Hello World!</p>
            <Container>
                <Row>
                    <Col
                        style={{
                            border: "3px red",
                            height: "3px red",
                            backgroundColor: "solid red"
                        }}
                    >
                        yeah dog!
                    </Col>
                    <Col
                        style={{
                            border: "3px red",
                            height: "3px red",
                            backgroundColor: "solid red"
                        }}
                    >
                        <img
                            src="./Images/cyclohexane.jpg"
                            alt="A picture of a chair conformation of cyclohexane"
                        />
                    </Col>
                </Row>
            </Container>
            Top three breakfast cereals:
            <ul>
                <li>3: Oops! All Berries</li>
                <li>2: Captain Crunch</li>
                <li>1: Cinnamon Toast Crunch</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
