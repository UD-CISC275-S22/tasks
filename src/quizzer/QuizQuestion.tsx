import React from "react";
import { Question } from "../interfaces/questioncopy";
import { Form, Button } from "react-bootstrap";

import "./QuizQuestion.css";
type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

export const QuizQuestion = ({
    index,
    question,
    submitted,
    handleSubmit,
    addPoints,
    editQuestionSub
}: {
    index: number;
    question: Question;
    submitted: boolean;
    handleSubmit: (index: number) => void;
    addPoints: (points: number) => void;
    editQuestionSub: (questionId: number, sub: string) => void;
}) => {
    const handleClick = (e: ChangeEvent) => {
        if (!submitted) {
            editQuestionSub(question.id, e.target.value);
        }
    };

    const handleSubmitClick = () => {
        handleSubmit(index);
        if (question.submission === question.expected) {
            addPoints(5);
        }
    };

    return (
        <>
            <hr />
            <div className="question">
                <div className="question_header">
                    <h4 data-testid="question_body">
                        {index + 1}. {question.body}
                    </h4>
                    <h4>
                        {question.points} pt{question.points !== 1 ? "s" : ""}
                    </h4>
                </div>
                f
                <div className="answer_box">
                    {question.type === "short_answer_question" && (
                        <Form.Group controlId="formShortAnswerBox">
                            <Form.Control
                                data-testid="select-option"
                                value={question.submission}
                                onChange={handleClick}
                            ></Form.Control>
                        </Form.Group>
                    )}
                    {question.type === "multiple_choice_question" && (
                        <div>
                            {question.options.map(
                                (option: string, i: number) => (
                                    <Form.Check
                                        type="checkbox"
                                        name={"questionChoice" + index}
                                        key={option + " | " + i}
                                        label={option}
                                        value={option}
                                        checked={question.submission === option}
                                        onChange={handleClick}
                                    />
                                )
                            )}
                        </div>
                    )}
                    <div className="sub_check">
                        <h2 className={submitted ? "" : "hidden"}>
                            {question.submission === question.expected
                                ? "✔️"
                                : "❌"}
                        </h2>
                        <Button
                            disabled={submitted}
                            className="submit_btn"
                            onClick={handleSubmitClick}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};
