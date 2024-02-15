/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Shamus Ellis CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <h1>This is my header for Task 3!</h1>
            <img src="https://www.google.com/search?q=mike+schimdt&tbm=isch&ved=2ahUKEwjczPOC46uEAxUPPlkFHfJ0BtIQ2-cCegQIABAA&oq=mike+schimdt&gs_lp=EgNpbWciDG1pa2Ugc2NoaW1kdDIFEAAYgAQyCRAAGIAEGBgYCjIJEAAYgAQYGBgKMgkQABiABBgYGAoyCRAAGIAEGBgYCjIJEAAYgAQYGBgKMgkQABiABBgYGAoyBxAAGIAEGBgyCRAAGIAEGBgYCkjWKFDFBli1J3ABeACQAQCYAVagAZMKqgECMjK4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCAMICDRAAGIAEGIoFGEMYsQPCAgoQABiABBiKBRhDwgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgIEEAAYHogGAQ&sclient=img&ei=cDDNZdzUD4_85NoP8umZkA0&bih=730&biw=1536#imgrc=P6yyFv4bEFli-M" alt="The Best Baseball Player" />
            <Button onClick={ () => console.log ("Hello World!") }>Log Hello World</Button>
            Unordered List:
            <ul>
                <li>My favorite sport is Baseball</li>
                <li>My favorite team is the Phillies</li>
                <li>My favorite Phillie is Mike Schimdt</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                    <Col>
                        <div
                            className= "App"
                            style={{
                                width: 100,
                                height: 100,
                                backgroundColor: "red"
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
