/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { FilteringSearch } from "../../FilteringSearch/FilteringSearch";
import realData from "../../data/camelData.json";
import { useState } from "react";

export function AddSemesterModal({
    handleClose,
    show
}: {
    handleClose: () => void;
    show: boolean;
}) {
    const [searchAttribute, setSearchAttribute] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(realData);
    const [visible, setVisible] = useState<boolean>(false);

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchAttribute(searchValue);

        const filteredClasses = realData.filter((course) =>
            course.courseCode
                .replace(" ", "")
                .toLowerCase()
                .startsWith(searchValue.toLowerCase())
        );
        setFilteredCourses(filteredClasses);
    };

    const handleClick = (cID: string) => {
        setSearchAttribute(cID);
    };

    const flipVisibility = () => {
        setVisible(!visible);
    };

    function closingModal() {
        const findCourse = realData.find(
            (course) => course.courseCode.replace(" ", "") === searchAttribute
        );
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Semester Name:</Form.Label>
                        <Form.Group controlId="SemesterName">
                            <Form.Control
                                type="text"
                                placeholder="Provide a name for the semester"
                            />
                        </Form.Group>
                        <hr></hr>
                        <Form.Label>Course:</Form.Label>
                        <Form.Group controlId="formFilterSearch">
                            <Form.Control
                                type="text"
                                value={searchAttribute.replace(" ", "")}
                                onChange={inputChange}
                                placeholder="Search by Course Code"
                                onClick={flipVisibility}
                            />
                        </Form.Group>
                        {visible && (
                            <div
                                style={{
                                    backgroundColor: "gold",
                                    height: "auto",
                                    overflowY: "scroll",
                                    maxHeight: "125px"
                                }}
                            >
                                {filteredCourses.map((course) => {
                                    return (
                                        <div
                                            onClick={() =>
                                                handleClick(course.courseCode)
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            key={course.courseCode}
                                        >
                                            {course.courseCode.replace(" ", "")}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => {
                            handleClose();
                            closingModal();
                        }}
                    >
                        Close
                    </Button>
                    <Button> Done</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
