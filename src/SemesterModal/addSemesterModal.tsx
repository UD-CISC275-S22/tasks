/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
//import { FilteringSearch } from "../../FilteringSearch/FilteringSearch";
import realData from "../data/corrected_data.json";
import { semester } from "../Interface/semester";
import { useState } from "react";
import { classes } from "../Interface/classes";

export function AddSemesterModal({
    handleClose,
    show,
    semesterExamples,
    addSemester
}: {
    handleClose: () => void;
    show: boolean;
    semesterExamples: semester[];
    addSemester: (
        id: number,
        fullTime: boolean,
        classList: classes[],
        totalCredits: number,
        season: string
    ) => void;
}) {
    const [searchAttribute, setSearchAttribute] = useState("");
    const [season, setSeason] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(realData);
    const [visible, setVisible] = useState<boolean>(false);

    const inputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSeason(searchValue);
    };

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchAttribute(searchValue);

        const filteredClasses = realData.filter((course) =>
            course.code.toLowerCase().startsWith(searchValue.toLowerCase())
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
        const findIndexCourse: number = realData.findIndex(
            (course) => course.code === searchAttribute
        );
        const foundCourse: classes = realData[findIndexCourse];
        const lastSemester: semester =
            semesterExamples[semesterExamples.length - 1];
        const newId: number = lastSemester.id + 1;
        addSemester(newId, true, [foundCourse], foundCourse.credits, season);
        handleClose();
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
                                onChange={inputChange1}
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
                                                handleClick(course.code)
                                            }
                                            style={{
                                                cursor: "pointer"
                                            }}
                                            key={course.code}
                                        >
                                            {course.code.replace(" ", "")}
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
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        onClick={() => {
                            closingModal();
                        }}
                    >
                        Done
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
