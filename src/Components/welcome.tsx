import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../App.css";

export function Welcome() {
    const [show, settingDisplay] = useState(true);
    const handleClose = () => settingDisplay(false);
    const handleShow = () => settingDisplay(true);

    return (
        <div>
            <Button onClick={handleShow} className="Welcome">
                Need Help❓
            </Button>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Degree Planner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Welcome to your personal Degree Planner! Some basic tools
                    tools have been designed to make your visit accessible to
                    your needs; this includes creating new plans from scratch
                    and/or compiling data from a csv file. You will be able to
                    add, remove, edit, and save various courses/semesters in a
                    multitude of plans. Scroll to the bottom of the page for
                    more instructions (will enhance this later by making an
                    expandable/disposable button near the top of the page).
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} data-testid="closeModWelcome">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
