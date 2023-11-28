import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { SemesterI, seasonT, yearI } from "./interfaces/semester";

interface AddSemesterModalProps {
    show: boolean;
    handleClose: () => void;
    addSemester: (semester: SemesterI) => void;
    year: yearI; // Make sure this matches the type from your interfaces
}

export const AddSemesterModal: React.FC<AddSemesterModalProps> = ({
    show,
    handleClose,
    addSemester,
    year
}) => {
    const [season, setSeason] = useState<seasonT>("winter");

    const handleAddSemester = () => {
        const newSemester: SemesterI = {
            // Adjust fields as per your SemesterI interface
            season: season,
            name: `${season} ${year.name}`, // Use year.name for the year part
            year: year.name, // Assuming this is how you reference the year in SemesterI
            courses: [] // Initialize with an empty array or as required
        };
        addSemester(newSemester);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formSemesterSeason">
                        <Form.Label>Semester Season:</Form.Label>
                        <Form.Control
                            as="select"
                            value={season}
                            onChange={(e) =>
                                setSeason(e.target.value as seasonT)
                            }
                        >
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="fall">Fall</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleAddSemester}>
                    Add Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
