import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "./IMG_0146.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <p>Victor Ezekiel Umoren-Udo</p>
            <h1>Hello World</h1>

            <Container>
                <Row>
                    <Col>
                        <img
                            src={
                                "https://en.meming.world/images/en/thumb/d/df/There_Is_Another.jpg/300px-There_Is_Another.jpg"
                            }
                            alt="yoda"
                            width="250"
                            height="150"
                        />
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "100px"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Jedi</li>
                            <li>Grandmaster</li>
                            <li>Yoda</li>
                        </ul>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "200px",
                                height: "100px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
/* Add a header
Add an image with alt text
Add a list with at least three elements
Change the background color of the header area
Add a bootstrap button with the text Log Hello World
Make the button log Hello World! when clicked
*/
export default App;
