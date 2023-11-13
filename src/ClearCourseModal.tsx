import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

interface ClearCourseModalProps {
    show: boolean;
    handleClose: () => void;
    clearCourses: (semester: "firstsemester" | "secondsemester") => void;
}

export const ClearCourseModal: React.FC<ClearCourseModalProps> = ({
    show,
    handleClose,
    clearCourses
}) => {
    const [semester, setSemester] = useState<
        "firstsemester" | "secondsemester" | ""
    >("");

    const handleClear = () => {
        if (semester) {
            clearCourses(semester);
            handleClose();
        }
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Clear Courses</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Select the semester you want to clear:</p>
                <select
                    value={semester}
                    onChange={(e) =>
                        setSemester(
                            e.target.value as "firstsemester" | "secondsemester"
                        )
                    }
                >
                    <option value="">Select Semester</option>
                    <option value="firstsemester">First Semester</option>
                    <option value="secondsemester">Second Semester</option>
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClear}>
                    Clear
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
