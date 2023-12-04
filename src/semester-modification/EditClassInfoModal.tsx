import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { classes } from "../Interface/classes";
import { useState } from "react";
import { semester } from "../Interface/semester";
//import realData from "../data/corrected_data.json";

//import { semester } from "../Interface/semester";
//import { EditClass } from "./EditClass";
export function EditClassInfoModal({
    courseToEdit,
    semester,
    updateSemester
}: {
    courseToEdit: classes;
    semester: semester;
    updateSemester: (semester: semester) => void;
}): JSX.Element {
    const [newCode, setNewCode] = useState(courseToEdit.code);
    const [newTitle, setNewTitle] = useState(courseToEdit.title);
    const [newCredits, setNewCredits] = useState(courseToEdit.credits);
    const [ogCode] = useState(courseToEdit.originalCode);
    const [ogTitle] = useState(courseToEdit.originalTitle);
    const [ogCredits] = useState(courseToEdit.originalCredits);
    const [modalView, setModalView] = useState(false);
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
    const flipModalView = () => {
        setModalView(!modalView);
    };
    function editClass(classToEdit: classes) {
        //const ogCode: string[] = [];
        //ogCode.push(classToEdit.code);
        const updatedClass = {
            ...classToEdit,
            code: newCode,
            title: newTitle,
            credits: newCredits
        };
        const classIndex = semester.classList.findIndex(
            (classes: classes): boolean => classToEdit.code === classes.code
        );
        const updatedClasses = [...semester.classList];
        updatedClasses.splice(classIndex, 1, updatedClass);
        const totalCredits = updatedClasses.reduce(
            (total: number, currentClass: classes) =>
                total + currentClass.credits,
            0
        );
        const updatedSemester = {
            ...semester,
            classList: [...updatedClasses],
            totalCredits: totalCredits
        };
        updateSemester(updatedSemester);
        //console.log(classToEdit.originalCode);
    }

    function revertClass(classToEdit: classes) {
        const updatedClass = {
            ...classToEdit,
            code: ogCode !== undefined ? ogCode : classToEdit.code,
            title: ogTitle !== undefined ? ogTitle : classToEdit.title,
            credits: ogCredits !== undefined ? ogCredits : classToEdit.credits
        };
        const classIndex = semester.classList.findIndex(
            (classes: classes): boolean => classToEdit.code === classes.code
        );
        const updatedClasses = [...semester.classList];
        updatedClasses.splice(classIndex, 1, updatedClass);
        const totalCredits = updatedClasses.reduce(
            (total: number, currentClass: classes) =>
                total + currentClass.credits,
            0
        );
        const updatedSemester = {
            ...semester,
            classList: [...updatedClasses],
            totalCredits: totalCredits
        };
        updateSemester(updatedSemester);
        flipModalView();
    }

    function closingInfoModal() {
        const course: classes = courseToEdit;
        const noInput =
            newCode === courseToEdit.code &&
            newTitle === courseToEdit.title &&
            newCredits === courseToEdit.credits;
        if (!noInput) {
            flipModalView();
            editClass(course);
        }
    }
    function closingRevertModal() {
        const course: classes = courseToEdit;
        flipModalView();
        revertClass(course);
    }
    return (
        <div>
            <Button onClick={flipModalView}>Edit Course</Button>
            <Modal show={modalView} onHide={flipModalView} animation={false}>
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
                                data-testid="input4"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Course Title</Form.Label>
                        <Form.Group controlId="courseTitle">
                            <Form.Control
                                type="text"
                                placeholder="Edit Course Title"
                                onChange={inputChange2}
                                data-testid="input5"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Course Credits</Form.Label>
                        <Form.Group controlId="courseCredits">
                            <Form.Control
                                type="text"
                                placeholder="Edit Course Credits"
                                onChange={inputChange3}
                                data-testid="input6"
                            />
                        </Form.Group>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            closingRevertModal();
                        }}
                    >
                        Revert
                    </Button>
                    <Button
                        onClick={() => {
                            flipModalView();
                        }}
                        disabled={
                            courseToEdit.code === "" ||
                            courseToEdit.title === "" ||
                            courseToEdit.credits === null
                        }
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
                </Modal.Footer>
            </Modal>
        </div>
    );
}
