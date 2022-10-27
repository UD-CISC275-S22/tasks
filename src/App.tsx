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
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";
function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Jessica-Howleys-Header CISC275</h1>
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
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr />
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
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
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
export default App;
