//import React, { useState } from "react";
//import { Button, Form } from "react-bootstrap";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../Interfaces/question";

export function QuestionRecordControls({
    question,
    filterQuestions,
    changePublished,
    updateAnswer,
    changeEditing,
    updateMC,
    mc
}: {
    question: Question;
    filterQuestions: () => JSX.Element;
    changePublished: () => void;
    updateAnswer: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    changeEditing: () => void;
    updateMC: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    mc: string;
}): JSX.Element {
    return (
        <div>
            <Button className="float-right" size="sm" onClick={changeEditing}>
                Edit
            </Button>
            <div>
                {question.type === "short_answer_question" ? (
                    <Form.Group controlId="">
                        <Form.Label>Short Answer</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            onChange={updateAnswer}
                        />
                    </Form.Group>
                ) : (
                    <Form.Group controlId="multipleChoice">
                        <Form.Label>Select an Answer</Form.Label>
                        <Form.Select value={mc} onChange={updateMC}>
                            {question.options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                )}
            </div>
            <div>
                {question.published ? (
                    <Button
                        className="float-right"
                        size="sm"
                        onClick={changePublished}
                    >
                        unpublish
                    </Button>
                ) : (
                    <Button
                        className="float-right"
                        size="sm"
                        onClick={changePublished}
                    >
                        publish
                    </Button>
                )}
            </div>
            <div>
                
            </div>
        </div>
    );
}
