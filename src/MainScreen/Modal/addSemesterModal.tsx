import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function AddSemesterModal({
    handleClose,
    show
}: {
    handleClose: () => void;
    show: boolean;
}) {
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Semester Name:</Form.Label>
                        <hr></hr>
                        <Form.Label>Course:</Form.Label>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button> Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
