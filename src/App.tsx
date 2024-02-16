import React from "react";
import "./App.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <header className="App-header">
                            UD CISC275 with NATHAN ROWELL, React Hooks, and
                            TypeScript
                        </header>
                        <p>Hello World again</p>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div className="Rectangle"></div>
                    </Col>
                    <Col>
                        <h1 className="App-header2">TAYLOR SWIFT</h1>
                        <img
                            src="https://media.pitchfork.com/photos/64c28ffcc526dd3929136bfd/16:9/w_2656,h_1494,c_limit/Taylor%20Swift.jpg"
                            alt="TAYLOR SWIFT"
                            width="400"
                            height="300"
                        />
                        <p> My Favorite Taylor Swift Songs:</p>
                        <ol>
                            <li>Cardigan</li>
                            <li>Enchanted</li>
                            <li>You Belong With Me</li>
                        </ol>
                        <div className="Rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
