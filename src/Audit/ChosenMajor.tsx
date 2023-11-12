/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const majors = [
    "Artificial Intelligence and Robotics Concentration",
    "Bioinformatics Concentration",
    "Cybersecurity Concentration",
    "Data Science Concentration",
    "High Performance Computing Concentration",
    "Systems and Networks Concentration",
    "Theory and Computation Concentration",
    "Traditional Program with Custom Focus Area"
];

export function ChosenMajor({
    handleClose,
    show
}: {
    handleClose: () => void;
    show: boolean;
}) {
    const [selectedMajor, setSelectedMajor] = useState<string>(" ");

    function updateMajor(event: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedMajor(event.target.value);
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Major</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Select
                            value={selectedMajor}
                            onChange={updateMajor}
                            style={{ textAlign: "center" }}
                        >
                            {majors.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
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
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        TBD
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
