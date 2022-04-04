import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Quizzerinter } from "../Quizzer-interfaces/Quizzerinter";

interface Quizzers {
    quizer1: Quizzerinter;
    editquiz: (quizs: Quizzerinter) => void;
    deleteCounter: (questionsort: string) => void;
}

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
export function Quizzer({
    quizer1,
    editquiz,
    deleteCounter
}: Quizzers): JSX.Element {
    const [published, ispublished] = useState<boolean>(quizer1.published);
    const [answer, setanswer] = useState<string>(quizer1.options[0]);
    const [getanswer, setanswers] = useState<string>("");

    function clearAnswer() {
        setanswers("");
    }
    function deletedit() {
        deleteCounter(quizer1.question);
    }
    function ClearChoice() {
        setanswer(quizer1.options[0]);
    }

    function Check(event: ChangeEvent) {
        setanswers(event.target.value);
    }

    function open(): void {
        ispublished(!published);
    }

    function updatechoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setanswer(event.target.value);
    }

    return (
        <div>
            <h3>{quizer1.questionsort}</h3>
            {!published && (
                <div>
                    <Button onClick={open}>Take Quiz</Button>
                </div>
            )}
            {published && (
                <div>
                    <div>Score:{quizer1.score}</div>
                    <Form.Group controlId="userChoice">
                        <Form.Label>{quizer1.question}</Form.Label>
                        <Form.Select value={answer} onChange={updatechoice}>
                            {quizer1.options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    {answer === quizer1.expectedanswer ? (
                        <span>✔️</span>
                    ) : (
                        <span>❌</span>
                    )}
                    <Button onClick={ClearChoice}>Clear Choice</Button>
                    <div>
                        <Form.Group controlId="Answer">
                            <Form.Label>Retype the name!</Form.Label>
                            <Form.Control
                                size="sm"
                                value={getanswer}
                                onChange={Check}
                            />
                        </Form.Group>
                        <div>
                            {getanswer === quizer1.expectedanswer ? "✔️" : "❌"}
                        </div>
                        <Button onClick={clearAnswer}>Clear</Button>
                    </div>
                </div>
            )}
            <div>
                {published && (
                    <div>
                        <Button onClick={open}>End Quiz</Button>
                    </div>
                )}
            </div>
            <div>
                <Button onClick={deletedit}>delete</Button>
            </div>
        </div>
    );
}
