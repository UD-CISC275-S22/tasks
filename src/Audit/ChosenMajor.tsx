/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const majors = [
    "Major1",
    "Major2",
    "Major3",
    "Major4",
    "Major5",
    "Major6",
    "Major7",
    "Major8"
];

export function ChosenMajor({
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
                    <Modal.Title>Choose Major</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Majors</Form.Label>
                        <Form.Label>Answer:</Form.Label>
                        <Form.Select style={{ textAlign: "center" }}>
                            {majors.map((options: string) => (
                                <option key={options} value={options}>
                                    {options}
                                </option>
                            ))}
                        </Form.Select>
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
