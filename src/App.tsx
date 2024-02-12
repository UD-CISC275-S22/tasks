import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Rahul UD CISC275 with React Hooks and TypeScript Hello World
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1>There is a header</h1>;
            <img
                src="https://media.istockphoto.com/id/1069137796/photo/toggenburg-goat-against-white-background.jpg?s=612x612&w=0&k=20&c=_jx3Njj9zDhxj0_38NWHN4p570DNmU5rz_KIOKiPGW4="
                alt="A picture of a goat"
            />
            Unorderd List:
            <ul>
                <li>item one</li>
                <li> another item </li>
                <li> last item </li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First column.
                        <div className="red-rectangle"> </div>
                    </Col>
                    <Col>
                        Second column
                        <div className="red-rectangle"> </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
