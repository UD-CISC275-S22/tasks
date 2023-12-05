import React from "react";
import { Button, Modal } from "react-bootstrap";

export const SkipSemester = ({
    skipSemester,
    handleFifthClose,
    handleFifthShow,
    fifthYearClicked,
    targetYear,
    targetSem
}: {
    skipSemester: (targetYear: number, targetSem: string) => void;
    handleFifthShow(): void;
    handleFifthClose(): void;
    fifthYearClicked: boolean;
    targetYear: number;
    targetSem: string;
}) => {
    return (
        <>
            <div className="clear_sem">
                <Button onClick={handleFifthShow}>Skip Semester</Button>
            </div>
            <div>
                <Modal
                    show={fifthYearClicked}
                    onHide={handleFifthClose}
                    animation={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            You are skipping this current semester, do you
                            confirm?
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            onClick={() => skipSemester(targetYear, targetSem)}
                        >
                            Yes
                        </Button>
                        <Button onClick={handleFifthClose}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
