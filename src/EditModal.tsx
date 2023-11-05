import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { dbMangement } from "./DBmanage";
import { Course } from "./interfaces/course";
import { updateCourse } from "./DBmanage";

export const EditCourseModal = ({
    show,
    handleClose,
    currentCourse,
    cRUD
}: {
    show: boolean;
    handleClose: () => void;
    currentCourse: Course;
    cRUD: dbMangement;
}) => {
    const [ticker, setTicker] = useState<string>(currentCourse.ticker);
    const [name, setName] = useState<string>(currentCourse.name);
    const [credits, setCredits] = useState<number>(currentCourse.credits);
    const [prereq, setPrereq] = useState<string>(currentCourse.prereq);
    useEffect(() => {
        setTicker(currentCourse.ticker);
        setName(currentCourse.name);
        setCredits(currentCourse.credits);
        setPrereq(currentCourse.prereq);
    }, [currentCourse]);

    const saveChanges = () => {
        updateCourse(
            cRUD,
            { ticker: ticker, name: name, credits: credits, prereq: prereq },
            currentCourse.ticker
        );
        handleClose();
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Tcker: </Form.Label>
                        <Form.Control
                            value={ticker}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTicker(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Credits: </Form.Label>
                        <Form.Control
                            value={credits}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setCredits(Number(e.target.value))}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveChanges}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
