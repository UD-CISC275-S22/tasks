import React from "react";
import { Button, Modal } from "react-bootstrap";

export const ClearAllSemesters = ({
    clearAll,
    handleShow,
    handleClose,
    show
}: {
    clearAll: () => void;
    handleShow: () => void;
    handleClose: () => void;
    show: boolean;
}) => {
    return (
        <>
            <div>
                <Button
                    onClick={handleShow}
                    style={{
                        backgroundColor: "#99B2DD",
                        borderColor: "#4D7298",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    Clear ALL Semesters
                </Button>
            </div>
            <div>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Warning</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>You are clearing ALL semesters. Do you confirm?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={clearAll}>Yes</Button>
                        <Button onClick={handleClose}>No</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
};
