import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
    return <h1></h1>;
    return (
        <div>
            <h1>Hello World</h1>
            <img
                src="../assets/images/pet-ada.jpg"
                alt="A picture of my dog Ada"
            />
        </div>
    );
    return (
        <div>
            <Button>Log Hello World</Button>
        </div>
    );
    return (
        <div>
            Ordered List:
            <ol>
                <li>chair</li>
                <li>books</li>
                <li>ice</li>
            </ol>
        </div>
    );
    return (
        <div>
            <Button onClick={() => console.log("Hello World!")}>
                Click Me
            </Button>
        </div>
    );
    return (
        <div>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>Column</Col>
                </Row>
            </Container>
        </div>
    );
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
