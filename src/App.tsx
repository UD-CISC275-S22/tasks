import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            {
                //Did you know if you reference CISC275 more than once the test fails? Fun
            }
            <h1>HTML and CSS</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Zachary Pruett</p>
            <p>Hello World!</p>
            <p>
                This is just a paragraph of text. It can go onto multiple lines,
                if you want.
            </p>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8lgDc1gGlVqn3UjDqKslOP6HrrUissH8xw&usqp=CAU"
                    alt="I take risks"
                />
            </div>
            <div>
                List of numbers:
                <ol>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li>
                </ol>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <Container>
                <Row>
                    <Col>First Half</Col>
                    <Col>Second Half</Col>
                </Row>
            </Container>
            <div className="rectangle"> </div>
            <p>All squares are rectangles but not all rectangles are squares</p>
        </div>
    );
}

export default App;
