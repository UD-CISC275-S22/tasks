import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 React Hooks TypeScript , Nafisa Maryam
            </header>
            <h1>This is another header added for testing, Hello World</h1>
            <img
                src="C:\Users\NM\Documents\cute_Cat_for_275.png"
                alt="A picture of a cute ginger cat"
            />
            Things I love about cats:
            <ul>
                <li>They are cute </li>
                <li>They are soo lovable </li>
                <li>They are majestically superior ;| </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col>
                        First column. <div id="rectangle"></div>
                    </Col>
                    <Col>
                        Second column. <div id="rectangle"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
