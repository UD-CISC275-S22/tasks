import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import "./StyleSavvy.css";
//import Hamster from "./images/hamsterposting.jpg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>WOAHHH</h1>
            {/* <img src={Hamster} alt="da funny hampster doe" /> */}
            <img
                src="https://cdn.myanimelist.net/r/360x360/images/anime/10/27428.jpg?s=b357a474d645269c66680e709a78394d"
                alt="Hamster CLub Promotional Art"
            ></img>
            <Button
                className="buttony"
                onClick={() => console.log("Hello World!")}
            >
                Log Hello World
            </Button>
            <p>
                Edit<code> src/App.tsx</code> and save. This page will
                automatically reload. Blade was here B] and Hello World
            </p>
            Reasons you should play Petz Hamsterz Life 2 for the GBA:
            <ul className="listy">
                <li>The hamsters are very cute</li>
                <li>
                    I have never felt more joy than when I am playing this game
                </li>
                <li>The hamsters cannot die tragically</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div className="redrect">omg wow</div>
                    </Col>
                    <Col>
                        <img src="https://i.gifer.com/taB.gif" />
                        <div className="redrect">hampter</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
