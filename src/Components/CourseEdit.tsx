import React, { useState } from "react";
import "../App.css";
// import courseListAll from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";
import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface CourseEditProps {
    editedCourse: Course;
    onSaveChanges: (editedCourse: Course) => void;
    onResetToDefault: (editedCourse: Course) => void;
    onClose: () => void;
}

const CourseEdit: React.FC<CourseEditProps> = ({
    editedCourse,
    onSaveChanges,
    onResetToDefault,
    onClose
}) => {
    const [newTitle, setNewTitle] = useState<string>(editedCourse.title);
    const [newName, setNewName] = useState<string>(editedCourse.name);
    const [newCredits, setNewCredits] = useState<number>(editedCourse.credits);

    const handleSaveChanges = () => {
        onSaveChanges({
            ...editedCourse,
            title: newTitle,
            name: newName,
            credits: newCredits
        });
        onClose();
    };

    const handleResetToDefault = () => {
        onResetToDefault({
            ...editedCourse
        });
        onClose();
    };

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="newTitle">
                    <Form.Label>New Course Title</Form.Label>
                    <Form.Control
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newName">
                    <Form.Label>New Course Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="newCredits">
                    <Form.Label>New Course Credits</Form.Label>
                    <Form.Control
                        type="number"
                        value={newCredits}
                        onChange={(e) => setNewCredits(Number(e.target.value))}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
                <Button variant="secondary" onClick={handleResetToDefault}>
                    Reset to Default
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CourseEdit;
