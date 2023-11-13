import React from "react";
import { Modal } from "react-bootstrap";

export function Welcome({
    clicked,
    closed
}: {
    clicked: boolean;
    closed: () => void;
}): JSX.Element {
    return (
        <div>
            <Modal onClicked={clicked} onClose={closed} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Degree Planner</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <header>
                        Welcome to your personal Degree Planner! Some basic
                        tools have been designed to make your visit accessible
                        to your needs; this includes creating new plans from
                        scratch and/or compiling data from a csv file. You will
                        be able to add, remove, edit, and save various
                        courses/semesters in a multitude of plans. Scroll to the
                        bottom of the page for more instructions (will enhance
                        this later by making an expandable/disposable button
                        near the top of the page).
                    </header>
                </Modal.Body>
            </Modal>
        </div>
    );
}
