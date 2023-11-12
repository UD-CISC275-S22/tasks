//todo: create a very small modal that allows the user to create a dp and only allow them to enter the name
//it should essentially be form that the user fills out
import React from "react";
import { useState } from "react";
import { Button, Form, Modal, Col, Row } from "react-bootstrap";

export function AddDpModal({
    show,
    handleClose,
    addDp
}: {
    show: boolean;
    handleClose: () => void;
    addDp: (title: string) => void;
}): JSX.Element {
    const [title, setTitle] = useState<string>("Example Title");

    const saveChanges = () => {
        addDp(title);
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Degree Plan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
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
        </div>
    );
}
