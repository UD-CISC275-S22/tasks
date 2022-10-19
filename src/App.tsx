import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <>
            <>
                <h1>Jessica-Howleys-Header</h1>
                <div className="App">
                    <header className="App-header">
                        React Hooks and TypeScript- Jess Howley Hello World
                    </header>
                    <img
                        alt="DOG"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg"
                    ></img>
                    <ul id="list 1">
                        <li>Red</li>
                        <li>Green</li>
                        <li>Blue</li>
                    </ul>
                    <div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                    </div>
                    <p>
                        Edit <code>src/App.tsx</code> and save. This page will
                        automatically reload Hello World
                    </p>
                </div>
                <div>
                    <Container>
                        <Row>
                            <Col>
                                First column.
                                <div>
                                    width:4px; height:2px; backgroundColor:red;
                                </div>
                            </Col>
                            <Col>
                                Second column.
                                <div>
                                    width:4px; height:2px; backgroundColor:red;
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
            <div className="App">
                <header>UD CISC275 with React Hooks and TypeScript</header>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr></hr>
                <ChangeType></ChangeType>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript
                </header>
                <hr></hr>
                {/* <DoubleHalf></DoubleHalf> */}
                <hr></hr>
                <ChooseTeam></ChooseTeam>
                <hr></hr>
                <ColoredBox></ColoredBox>
                <hr></hr>
                <ShoveBox></ShoveBox>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
        </>
    );
}
export default App;
