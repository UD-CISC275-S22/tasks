import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Course } from "./interfaces/course";

interface DeleteCourseModalProps {
    show: boolean;
    handleClose: () => void;
    handleDelete: () => void;
    courseToDelete: Course;
}

export const DeleteCourseModal = ({
    show,
    handleClose,
    handleDelete,
    courseToDelete
}: DeleteCourseModalProps) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Course</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {`Are you sure you want to delete the course "${courseToDelete.name}" (${courseToDelete.ticker})?`}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
