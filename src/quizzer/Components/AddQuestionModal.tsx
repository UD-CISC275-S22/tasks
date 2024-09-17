import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Question } from "../Interfaces/question";

export function AddQuestionModal({
    show,
    handleClose,
    addQuestion
}: {
    show: boolean;
    handleClose: () => void;
    addQuestion: (newQuestion: Question) => void;
}) {
    const [name, setName] = useState<string>("");

    function saveChanges() {
        addQuestion({
            id: 0,
            name: name,
            points: 0,
            body: "",
            correctAns: "",
            published: false,
            options: [],
            type: "",
            correct: false,
            answered: false,
            inputAns: ""
        });
        handleClose();
    }
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add new Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Name*/}
                <Form.Group controlId="formQuestionName" as={Row}>
                    <Form.Label column sm={3}>
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
