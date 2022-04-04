import React, { useState } from "react";
import "./App.css";
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
import { Quizzer } from "./quizzer/Quizzer";
import { Quizzerinter } from "./Quizzer-interfaces/Quizzerinter";
import { Button, Stack } from "react-bootstrap";
import ApplicationSketch from "./image/Applicationlayout.jpeg";

const QUIZZERINTER: Quizzerinter[] = [
    {
        questionsort: "First question",
        question: "what's your frist name?",
        options: ["Evan", "Eason"],
        expectedanswer: "Eason",
        score: 0,
        published: false
    },
    {
        questionsort: "second question",
        question: "what's your middle name?",
        options: ["hh", "kk"],
        expectedanswer: "kk",
        score: 0,
        published: false
    },
    {
        questionsort: "third question",
        question: "what's your lastname?",
        options: ["Guan", "Chuan"],
        expectedanswer: "Chuan",
        score: 0,
        published: false
    }
];

function App(): JSX.Element {
    const [quiz, setquiz] = useState<Quizzerinter[]>(QUIZZERINTER);

    function zeroscore(): void {
        setquiz(
            quiz.map((f) => {
                return { ...f, score: 0 };
            })
        );
    }

    function editquiz(quizs: Quizzerinter) {
        const newquiz = quiz.map((f) =>
            quizs.question === f.question ? quizs : f
        );
        setquiz(newquiz);
    }
    function deleteCounter(question: string) {
        setquiz(
            quiz.filter((f: Quizzerinter): boolean => f.question !== question)
        );
    }
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>This is also a header</h1>
            </header>
            <Stack gap={3}>
                {quiz.map((f: Quizzerinter) => (
                    <div key={f.question}>
                        <div style={{ textAlign: "center" }}>
                            <Quizzer
                                quizer1={f}
                                editquiz={editquiz}
                                deleteCounter={deleteCounter}
                            ></Quizzer>
                        </div>
                    </div>
                ))}
            </Stack>
            <div style={{ textAlign: "center" }}>
                <Button onClick={zeroscore}>Zero</Button>
            </div>
            <img src={ApplicationSketch}></img>
            <div>
                <li>
                    Users can see a list of quizzes, including the quizzes
                    title, description, and how many questions it has
                </li>
                <li>
                    Users can select a specific quiz to see the questions,
                    including the question’s name, body, and points
                </li>
                <li>
                    Quiz questions can be of AT LEAST two types: a short answer
                    question or multiple choice question
                </li>
                <li>
                    Users can enter or choose an answer for a quiz question, and
                    be told if they are correct
                </li>
                <li>Users can clear out their existing answers for a quiz</li>
                <li>Users can publish or unpublish a question</li>
                <li>
                    Users can filter the questions in a list so that only
                    published questions are shown
                </li>
            </div>
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
