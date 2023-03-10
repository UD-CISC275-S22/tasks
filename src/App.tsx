import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import pickle from "./pickle.jpeg";
type QuestionType = "multiple_choice_question" | "short_answer_question";

// Maps the Old state -> New State
const QUESTIONTYPE_TRANSITIONS: Record<QuestionType, QuestionType> = {
    multiple_choice_question: "short_answer_question",
    short_answer_question: "multiple_choice_question"
};
const ALPHAHOL: Record<string, string> = {
    "🎄": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🎉",
    "🎉": "☘️",
    "☘️": "🎄"
};
const DATEHOL: Record<string, string> = {
    "🎉": "☘️",
    "☘️": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🎄",
    "🎄": "🎉"
};
function App(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    const [d1, setD1] = useState<number>(-1);
    const [d2, setD2] = useState<number>(0);
    const [questionType, setQuestionType] = useState<QuestionType>(
        "multiple_choice_question"
    );
    const [quiz, setQuiz] = useState<boolean>(false);
    const [mulligan, setMulligan] = useState<number>(4);
    const [holidayA, setHolidayA] = useState<string>("🎄");
    const [holidayD, setHolidayD] = useState<string>("🎉");

    function addOne(): void {
        setCounter(counter + 1);
    }
    function flipVisibility(): void {
        setVisible(!visible);
    }
    function changeQuestionType(): void {
        const newQuestionType = QUESTIONTYPE_TRANSITIONS[questionType];
        setQuestionType(newQuestionType);
    }
    function addOneMulligan(): void {
        setMulligan(mulligan + 1);
    }
    function subOneMulligan(): void {
        setMulligan(mulligan - 1);
    }
    function stopAndSub(): void {
        subOneMulligan();
        setQuiz(false);
    }
    function randomDiceRoll(x: number) {
        return 1 + Math.floor(Math.random() * x);
    }
    function newAlphaHol(): void {
        const hol = ALPHAHOL[holidayA];
        setHolidayA(hol);
    }
    function newDateHol(): void {
        const hol = DATEHOL[holidayD];
        setHolidayD(hol);
    }
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>Website belongs to Gavin Caulfield! Hello World!</p>
            <div>
                <h1>Im really bout to geet yo pickle cheen ahh</h1>
                <img src={pickle} alt="the man himself" />
                <p>Things im about to do</p>
                <ul>
                    <li>What: geet a pickle chin ahh</li>
                    <li>Who: yo</li>
                    <li>When: in a moment, im about to</li>
                </ul>
            </div>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <div>
                <Button onClick={() => addOne()}>Add One</Button>
                {counter}
            </div>
            <div>
                <Button onClick={() => flipVisibility()}>Reveal Answer</Button>
                {visible && <div>42</div>}
            </div>
            <div>
                <Button onClick={() => changeQuestionType()}>
                    Change Type
                </Button>
                {<span>{questionType}</span>}
            </div>
            <div>
                <Button onClick={() => setQuiz(true)} disabled={quiz}>
                    Start Quiz
                </Button>
                <Button onClick={() => stopAndSub()} disabled={!quiz}>
                    Stop Quiz
                </Button>
                <Button onClick={() => addOneMulligan()} disabled={quiz}>
                    mulligan
                </Button>
                {<div> Attempts left: {mulligan}</div>}
            </div>
            <div>
                <span data-testid="left-die">
                    <Button onClick={() => setD1(randomDiceRoll(6))}>
                        Roll Dice 1
                    </Button>
                    {d1}
                </span>
                <span data-testid="right-die">
                    <Button onClick={() => setD2(randomDiceRoll(6))}>
                        Roll Dice 2
                    </Button>
                    {d2}
                </span>
                {d1 === d2 && d1 !== 1 ? (
                    <span> Win</span>
                ) : d1 === 1 && d2 === 1 ? (
                    <span> Lose</span>
                ) : (
                    <span></span>
                )}
            </div>
            <div>
                <span>
                    <Button onClick={newAlphaHol}>Advance by Alphabet</Button>
                </span>
                Holiday: {holidayA}
                <span>
                    <Button onClick={newDateHol}>Advance by Date</Button>
                </span>
                <span>Holiday: {holidayD}</span>
            </div>
            <div>
                <Container>
                    <Row>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                height: "30px",
                                width: "200px"
                            }}
                        >
                            <Col>Collum 1 babyyyyyyy</Col>
                        </div>
                        <div
                            style={{
                                border: "1px solid red",
                                padding: "4px",
                                height: "500px",
                                width: "200px"
                            }}
                        >
                            <Col>COLUMN 2 BAYYYYYY</Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
