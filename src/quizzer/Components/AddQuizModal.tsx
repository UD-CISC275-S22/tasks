import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../Interfaces/question";
import { Quiz } from "../Interfaces/quiz";
//import { Question } from "../Interfaces/question";
//import { setSyntheticLeadingComments } from "typescript";

export function AddQuizModal({
    show,
    handleClose,
    addQuiz
}: {
    show: boolean;
    handleClose: () => void;
    addQuiz: (newQuiz: Quiz) => void;
}) {
    const [title, setTitle] = useState<string>("");
    const [questions] = useState<string[]>([]);

    function saveChanges() {
        addQuiz({
            id: 0,
            title: title,
            numQuest: 0,
            description: "",
            questions: questions.map(
                (question: string): Question => ({
                    id: 0,
                    name: question,
                    points: 0,
                    type: "",
                    published: false,
                    options: [],
                    correctAns: "",
                    body: ""
                })
            )
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Quiz</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Title*/}
                <Form.Group controlId="fromQuizTitle" as={Row}>
                    <Form.Label column sm={3}>
                        Title:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={title}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*QUESTIONS*/}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
