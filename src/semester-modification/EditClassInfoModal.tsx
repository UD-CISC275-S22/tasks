import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { useState } from "react";
//import { EditClass } from "./EditClass";
export function EditClassInfoModal({
    handleClose,
    show,
    courseToEdit
}: {
    handleClose: () => void;
    show: boolean;
    courseToEdit: classes;
}): JSX.Element {
    const [newCode, setNewCode] = useState(courseToEdit.code);
    const [newTitle, setNewTitle] = useState(courseToEdit.title);
    const [newCredits, setNewCredits] = useState(courseToEdit.credits);
    //const [newPrereqs, setNewPrereqs] = useState(courseToEdit.preReq);

    const inputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue1 = event.target.value;
        const firstFour = searchValue1.substring(0, 4).toUpperCase();
        const last = searchValue1.substring(4, searchValue1.length);
        setNewCode(firstFour + last);
    };
    const inputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue2 = event.target.value;
        setNewTitle(searchValue2);
    };
    const inputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue3 = event.target.value;
        setNewCredits(parseInt(searchValue3));
    };
    /*const inputChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue4 = event.target.list;
        setNewPrereqs(searchValue4);
    };
    */
    function editClass(classToEdit: classes): void {
        classToEdit.code = newCode;
        classToEdit.title = newTitle;
        classToEdit.credits = newCredits;
    }
    function closingInfoModal() {
        handleClose();
        const course: classes = courseToEdit;
        editClass(course);
    }

    /*function doneEditing(
        newCode: string,
        newTitle: string,
        newCredits: string
    ): void {
        courseToEdit.code = newCode;
        courseToEdit.title = newTitle;
        courseToEdit.credits.toString = newCredits.toString;
    }*/
    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Course Code:</Form.Label>
                        <Form.Group controlId="courseCode">
                            <Form.Control
                                type="text"
                                placeholder="Edit Course Code"
                                onChange={inputChange1}
                                data-testid="input1"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Course Title</Form.Label>
                        <Form.Group controlId="courseTitle">
                            <Form.Control
                                type="text"
                                placeholder="Edit Course Title"
                                onChange={inputChange2}
                                data-testid="input2"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Group controlId="courseCredits">
                            <Form.Control
                                type="text"
                                placeholder="Edit Course Credits"
                                onChange={inputChange3}
                                data-testid="input3"
                            />
                        </Form.Group>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handleClose();
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            closingInfoModal();
                        }}
                    >
                        Done
                    </Button>
                    {/*<EditClass
                        classToEdit={courseToEdit}
                        newCode={newCode}
                        newTitle={newTitle}
                        newCredits={newCredits}
                    ></EditClass>*/}
                </Modal.Footer>
            </Modal>
        </div>
    );
}
