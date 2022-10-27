import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Question, QuestionType } from "../interfaces/question";

import "./QuestionEdit.css";

export const QuestionEdit = ({
    index,
    lastIndex,
    question,
    editQuestion,
    removeQuestion,
    swapQuestion
}: {index: number, lastIndex: number, question: Question, editQuestion: (q1: number, q2: Question) => void, removeQuestion: (ind: number) => void, swapQuestion: (q1: number, q2: number) => void}) => {
    const [a, b] = useState<number>(
        question.options.findIndex((s: string) => question.expected === s)
    );

    const handleNumOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
        b(0);
        const newNum =
            parseInt(e.target.value) < 1 ? 1 : parseInt(e.target.value);
        editQuestion(question.id, {
            ...question,
            type: "multiple_choice_question",
            expected: "Example Answer",
            options: Array(newNum).fill("Example Answer")
        });
    };

    const switchMulti = () => {
        b(0);
        editQuestion(question.id, {
            ...question,
            type: "multiple_choice_question",
            expected: "Example Answer",
            options: Array(3).fill("Example Answer")
        });
    };

    const handlePoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    	question.points = parseInt(e.target.value)
        editQuestion(question.id, question);
    };

    const handleChoiceChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        i: number
    ) => {
        const newOptions = [...question.options];
        newOptions.splice(i, 1, e.target.value);
        editQuestion(question.id, {
            ...question,
            options: newOptions,
            expected: a === i ? e.target.value : question.expected
        });
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const idx = parseInt(e.target.value);
        b(idx);
        editQuestion(question.id, {
            ...question,
            expected: question.options[idx]
        });
    };

    return (
        <>
            <hr />
            <div className="edit_question">
                <div className="edit_title_row">
                    <div className="edit_title_box">
                        <h4>{index + 1}. </h4>
                        <Form.Group
                            className="title_input"
                            controlId="editTitleFormId"
                        >
                            <Form.Control
                                value={question.body}
                                data-testid="edit_question_title"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                    editQuestion(question.id, {
                                        ...question,
                                        body: e.target.value
                                    });
                                }}
                            ></Form.Control>
                        </Form.Group>
                    </div>
                    <div className="edit_title_box">
                        <Form.Group
                            className="points_input"
                            controlId="editPointsFormId"
                        >
                            <Form.Control
                                value={question.points}
                                type="number"
                                onChange={handlePoints}
                            ></Form.Control>
                        </Form.Group>
                        <h4>pt{question.points !== 1 ? "s" : ""}</h4>
                    </div>
                </div>
                <div className="center_section">
                    <div className="edit_answer_box">
                        <div className="type_form">
                            <Form.Group controlId="questionTypeFormId">
                                <Form.Label>Type: </Form.Label>
                                <Form.Select
                                    className="type_dropdown"
                                    value={question.type}
                                    onChange={switchMulti}
                                >
                                    <option
                                        data-testid={
                                            "question_type_dropdown_" + index
                                        }
                                        value="multiple_choice_question"
                                    >
                                        Multiple Choice
                                    </option>
                                    <option
                                        data-testid={
                                            "question_type_dropdown_" + index
                                        }
                                        value="short_answer_question"
                                    >
                                        Short Answer
                                    </option>
                                </Form.Select>
                            </Form.Group>
                            {question.type === "multiple_choice_question" && (
                                <>
                                    <Form.Group controlId="editNumChoicesId">
                                        <Form.Label>Choices: </Form.Label>
                                        <Form.Control
                                            className="num_choices"
                                            value={question.options.length}
                                            type="number"
                                            onChange={handleNumOptions}
                                        ></Form.Control>
                                    </Form.Group>
                                </>
                            )}
                        </div>
                        <div>
                            {question.type === "short_answer_question" && (
                                <Form.Group controlId="formEditShortExpectedBox">
                                    <Form.Label>Answer:</Form.Label>
                                    <Form.Control
                                        value={question.expected}
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => {
                                            editQuestion(question.id, {
                                                ...question,
                                                expected: e.target.value
                                            });
                                        }}
                                    ></Form.Control>
                                </Form.Group>
                            )}
                            {question.type === "multiple_choice_question" && (
                                <Form.Group controlId="formEditMultipleExpectedBox">
                                    <Form.Label>Answer:</Form.Label>
                                    {question.options.map(
                                        (option: string, i: number) => (
                                            <div
                                                key={i}
                                                className="radio_question_box"
                                            >
                                                <Form.Check
                                                    type="radio"
                                                    name={
                                                        "questionChoice" + index
                                                    }
                                                    value={i}
                                                    checked={a === i}
                                                    onChange={handleRadioChange}
                                                />
                                                <Form.Control
                                                    name={
                                                        "questionChoice" + index
                                                    }
                                                    value={option}
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) => {
                                                        handleChoiceChange(
                                                            e,
                                                            i
                                                        );
                                                    }}
                                                ></Form.Control>
                                            </div>
                                        )
                                    )}
                                </Form.Group>
                            )}
                        </div>
                    </div>
                    <div className="swap_button_container">
                        <Button
                            disabled={index === 0}
                            className="swap_button"
                            onClick={() => {
                                swapQuestion(index, index - 1);
                            }}
                        >
                            ▲
                        </Button>
                        <Button
                            disabled={index === lastIndex}
                            className="swap_button"
                            onClick={() => {
                                swapQuestion(index, index + 1);
                            }}
                        >
                            ▼
                        </Button>
                    </div>
                </div>
                <div className="edit_question_footer">
                    <Form.Check
                        className="published_question_check"
                        data-testid="question_published_check"
                        type="checkbox"
                        id="is_question_published_check"
                        label="Published"
                        checked={question.published}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            editQuestion(question.id, {
                                ...question,
                                published: e.target.checked
                            });
                        }}
                    ></Form.Check>
                    <Button
                        variant="danger"
                        onClick={() => {
                            removeQuestion(question.id);
                        }}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </>
    );
};
