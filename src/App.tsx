import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from 'react-bootstrap';

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <h1 className="header-one">This is header text</h1>
            <img src="./GAN_cross_view.drawio.png" alt="GAN" />
            <div>
                <Button onClick={() => console.log("Hello World!")}>Log Hello World</Button>
            </div>;
            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>
                        Second column.
                        You can put whatever you want in here, and it will be on the right side.
                        Maybe try adding an image?
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
