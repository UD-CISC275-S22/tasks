import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome!</h1>
            Grace OLeary
            <p>Hello World</p>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Hello_%28yellow%29.svg"
                alt="A picture that says hello is yellow cursive lettering"
            />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                <ul>
                    <li>Hey!</li>
                    <li>This webpage is a work in progress.</li>
                    <li>Thanks for visiting!</li>
                </ul>
            </p>
            <div id="rectangle">
                <Container
                    style={{
                        width: "75%",
                        height: "65%",
                        backgroundColor: "red"
                    }}
                >
                    <Row>
                        <Col>First column</Col>
                        <Col>Second column</Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
