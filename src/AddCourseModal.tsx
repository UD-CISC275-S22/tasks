import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
//import { dbMangement } from "./DBmanage";
import { Course } from "./interfaces/course";

interface AddCourseModalProps {
    show: boolean;
    handleClose: () => void;
    addCourse: (
        course: Course,
        semester: "firstsemester" | "secondsemester"
    ) => void;
}

export function AddCourseModal({
    show,
    handleClose,
    addCourse
}: AddCourseModalProps) {
    const [name, setName] = useState<string>("");
    const [ticker, setTicker] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [prereq, setPrereq] = useState<string>("");
    const [semester, setSemester] = useState<string>("");

    const handleAddCourse = () => {
        if (semester !== "firstsemester" && semester !== "secondsemester") {
            console.error("Invalid semester selected");
            return;
        }
        const newCourse = { ticker, name, credits, prereq };
        addCourse(newCourse, semester);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formCourseName">
                        <Form.Label>Course Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCourseTicker">
                        <Form.Label>Course Ticker:</Form.Label>
                        <Form.Control
                            type="text"
                            value={ticker}
                            onChange={(e) => setTicker(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCourseCredits">
                        <Form.Label>Credits:</Form.Label>
                        <Form.Control
                            type="number"
                            value={credits}
                            onChange={(e) => setCredits(Number(e.target.value))}
                        />
                    </Form.Group>
                    <Form.Group controlId="formCoursePrereqs">
                        <Form.Label>Prerequisites:</Form.Label>
                        <Form.Control
                            type="text"
                            value={prereq}
                            onChange={(e) => setPrereq(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formSemesterSelect">
                        <Form.Label>Semester:</Form.Label>
                        <Form.Control
                            as="select"
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                        >
                            <option value="">Select Semester</option>
                            <option value="firstsemester">
                                First Semester
                            </option>
                            <option value="secondsemester">
                                Second Semester
                            </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddCourse}>
                    Add Course
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
