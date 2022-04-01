import React from "react";
import { Button, ListGroup, Form, Col, Row } from "react-bootstrap";

export function EditableQuestionList({
    questions,
    setQuestions
}: {
    questions: string[];
    setQuestions: (questions: string[]) => void;
}): JSX.Element {
    function addQuestion() {
        setQuestions([...questions, ""]);
    }

    function deleteQuestion(id: number) {
        const copiedQuestions = [...questions];
        copiedQuestions.splice(id, 1);
        setQuestions(copiedQuestions);
    }

    return (
        <div>
            <Button size="sm" variant="success" onClick={addQuestion}>
                Add Question
            </Button>
            <ListGroup as="ol" numbered>
                {questions.map((question: string, id: number) => (
                    <ListGroup.Item
                        as="li"
                        key={id}
                        className="d-flex align-items-start"
                    >
                        <div className="ms-3 me-auto">
                            <Form.Group controlId="formQuestionName" as={Row}>
                                <Col sm={1}>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={() => deleteQuestion(id)}
                                    >
                                        Delete
                                    </Button>
                                </Col>
                            </Form.Group>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}

