import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Question } from "../Interfaces/question";

export function QuestionEditor({
    changeEditing,
    question,
    editQuestion,
    deleteQuestion
}: {
    changeEditing: () => void;
    question: Question;
    editQuestion: (id: number, newQuestion: Question) => void;
    deleteQuestion: (id: number) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(question.name);
    const [body, setBody] = useState<string>(question.body);
    const [points, setPoints] = useState<string>(question.points.toString());
    const [expected, setExpected] = useState<string>(question.correctAns);

    function save() {
        editQuestion(question.id, {
            ...question,
            name: name,
            points: parseInt(points) || 0,
            body: body,
            correctAns: expected
        });
        changeEditing();
    }

    function cancel() {
        changeEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/*TITLE*/}
                    <Form.Group controlId="formQuestionName" as={Row}>
                        <Form.Label column sm={2}>
                            Name:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/*Body*/}
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Body:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={body}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setBody(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/*Points*/}
                    <Form.Group controlId="formQuestionPoints" as={Row}>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setPoints(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/*Expected Answer*/}
                    <Form.Group controlId="formQuestionExpectedAnswer" as={Row}>
                        <Form.Label column sm={2}>
                            Expected Answer:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={expected}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setExpected(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    {/*Save/cancel*/}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
