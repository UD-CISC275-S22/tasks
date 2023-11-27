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
                id: 0,
                title: session,
                year: year,
                description: "",
                courseList: [] as Course[]
            });
        } else {
            settingSemester({
                id: 0,
                title: session,
                year: year,
                description: "",
                courseList: [] as Course[]
            });
        }
        handleClose();
    }

    const changingSession = (event: ChangeEvent) => {
        settingSessions(event.target.value);
    };

    return (
        <Modal show={show} close={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Semester Edits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="semesterTitle" as={Row}>
                    <Form.Label column sm={3}>
                        Session:
                    </Form.Label>
                    <Col>
                        <Form.Select
                            value={session}
                            onChange={changingSession}
                            data-testid="sessionBox"
                        >
                            {courseSessions.map((choice: string) => (
                                <option key={choice} value={choice}>
                                    {" "}
                                    {choice}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group controlId="semesterID" as={Row}>
                    <Form.Label column sm={3}>
                        Session Term:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => settingYear(parseInt(event.target.value))}
                            data-testid="termBox"
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}> Close </Button>
                <Button onClick={saveEdits}> Save </Button>
            </Modal.Footer>
        </Modal>
    );
}
