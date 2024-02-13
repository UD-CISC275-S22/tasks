import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
            <p>
                Justin Burger, Hello World<></>
            </p>

            <h1 style={{ backgroundColor: "turquoise" }}>My Top 3 Movies</h1>
            <ol>
                <li>Raiders of the Lost Ark</li>
                <li>Revenge of the Sith</li>
                <li>Indiana Jones and the Last Crusade</li>
            </ol>

            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>

            <Container>
                <Row>
                    <Col>
                        Column 1!
                        <div
                            style={{
                                width: 250,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>

                    <Col>
                        <Col>
                            Column 2!
                            <div
                                style={{
                                    width: 250,
                                    height: 100,
                                    backgroundColor: "red"
                                }}
                            />
                        </Col>
                    </Col>
                </Row>
            </Container>

            <img
                src="https://cdn.vox-cdn.com/thumbor/WR9hE8wvdM4hfHysXitls9_bCZI=/0x0:1192x795/1400x1400/filters:focal(596x398:597x399)/cdn.vox-cdn.com/uploads/chorus_asset/file/22312759/rickroll_4k.jpg"
                alt="Image failed to load, you escaped the rickroll"
            />
        </div>
    );
}

export default App;
