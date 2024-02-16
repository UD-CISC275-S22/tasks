import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";

export function App(): JSX.Element {
    return (
        <>
            <>
                <>
                    <>
                        <>
                            <>
                                <>
                                    <>
                                        <>
                                            <div>
                                                <Button>Click Me</Button>
                                            </div>
                                            <div>
                                                <Button
                                                    onClick={() =>
                                                        console.log(
                                                            "I am logged"
                                                        )
                                                    }
                                                >
                                                    Click Me
                                                </Button>
                                            </div>
                                        </>
                                        <>
                                            <h1>This is header text</h1>
                                            <p>
                                                This is just a paragraph of
                                                text. It can go onto multiple
                                                lines, if you want.
                                            </p>
                                        </>
                                    </>
                                    <>
                                        <div>
                                            <h1>Hello World</h1>
                                            <p>How are you doing today?</p>
                                        </div>
                                    </>
                                </>
                                <div>
                                    Unordered List:
                                    <ul>
                                        <li>First thing</li>
                                        <li>Another thing</li>
                                        <li>A third item</li>
                                    </ul>
                                    Ordered List:
                                    <ol>
                                        <li>First thing</li>
                                        <li>Another thing</li>
                                        <li>A third item</li>
                                    </ol>
                                </div>
                            </>
                            <div>
                                <h1>Hello World</h1>
                                <img
                                    src="Users\skysw\tasks\src\assets\swagicon.png"
                                    alt="waddle dee"
                                />
                            </div>
                        </>
                        <div
                            style={{ border: "1px solid blue", padding: "4px" }}
                        >
                            this will be surrounded by a border and padding.
                        </div>
                    </>
                    <div>
                        This is{" "}
                        <span style={{ color: "red" }}>colored text</span>.
                    </div>
                </>
                <div>
                    <Container>
                        <Row>
                            <Col>First column.</Col>
                            <Col>
                                Second column. You can put whatever you want in
                                here, and it will be on the right side. Maybe
                                try adding an image?
                                <img
                                    src="Users\skysw\tasks\src\assets\swagicon.png"
                                    alt="waddle dee 2"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript - Hello world -
                    Created by Tolu Akin
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
            </div>
        </>
    );
}

export default App;
