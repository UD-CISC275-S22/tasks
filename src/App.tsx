import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <div>
                <h1>Hello World</h1>
                <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.computerhope.com%2Fjargon%2Fd%2Fdesktopc.htm&psig=AOvVaw1DMQo2OekdIuCIRyYy30VA&ust=1694879818062000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCNCm5739rIEDFQAAAAAdAAAAABAK"
                    alt="This is a Computer"
                />
            </div>

            <div>
                <ol>
                    <li>one</li>
                    <li>two</li>
                    <li>three</li>
                </ol>
            </div>

            <div>
                <Button> Log Hello World</Button>
            </div>

            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>

            <div>
                <Container>
                    <Row>
                        <Col>
                            Shape
                            <div className="shape"></div>
                        </Col>
                        <Col>
                            <div className="shape"></div>
                            Hello world
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;