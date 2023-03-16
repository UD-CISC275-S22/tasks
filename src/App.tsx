import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import cmc from "./bloodmeridian.jpeg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">My CISC275 Webpage</header>
            <h1>by Jonathan Ma</h1>
            <img className="Image" src={cmc} alt="Blood Meridian Fan Art" />
            <Container>
                <Row>
                    <Col>
                        <div className="Book-list">
                            My favorite books which I&apos;ve read this year:
                            <ol>
                                <li>
                                    <i>Blood Meridian</i>, Cormac McCarthy
                                </li>
                                <li>
                                    <i>Dune Messiah</i>, Frank Herbert
                                </li>
                                <li>
                                    <i>Neuromancer</i>, William Gibson
                                </li>
                                <li>
                                    <i>A Game of Thrones</i>, George R.R. Martin
                                </li>
                                <li>
                                    <i>
                                        For Whom the Bell Tolls, Ernest
                                        Hemingway
                                    </i>
                                </li>
                            </ol>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
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
            <DoubleHalf></DoubleHalf>
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
    );
}

export default App;
