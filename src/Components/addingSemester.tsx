import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function AddingSemester({
    show,
    handleClose,
    settingSemester
}: {
    show: boolean;
    handleClose: () => void;
    settingSemester: (newSemester: Semester) => void;
}): JSX.Element {
    const courseSessions = ["Fall", "Winter", "Spring", "Summer"];
    const [session, settingSessions] = useState<string>(courseSessions[0]);
    const [year, settingYear] = useState<number>(2023);

    function saveEdits() {
        if (session === "Fall") {
            settingSemester({
                id: session.slice(0, 3) + year,
                title: session + " " + year,
                notes: "",
                courseList: [] as Course[]
            });
        } else {
            settingSemester({
                id: session.slice(0, 3) + year,
                title: session + " " + year,
                notes: "",
                courseList: [] as Course[]
            });
        }
        handleClose();
    }

    const changingSession = (event: ChangeEvent) => {
        settingSessions(event.target.value);
    };

    return (
        <div>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Semester Edits</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="semesterTitle" as={Row}>
                        <Form.Label column sm={2}>
                            Session:
                        </Form.Label>
                        <Col>
                            <Form.Select
                                value={session}
                                onChange={changingSession}
                                data-testid="sessionBoxAS"
                            >
                                {courseSessions.map((choice: string) => (
                                    <option key={choice} value={choice}>
                                        {choice}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="semesterID" as={Row}>
                        <Form.Label column sm={2}>
                            Term:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={year}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => settingYear(parseInt(event.target.value))}
                                data-testid="termBoxAS"
                            />
                        </Col>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={handleClose}
                        data-testid="cancelModAS"
                        variant="link"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={saveEdits}
                        data-testid="saveModAS"
                        variant="success"
                    >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
