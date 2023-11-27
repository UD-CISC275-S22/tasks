/* eslint-disable no-extra-parens */
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import realData from "../data/corrected_data.json";
import { semester } from "../Interface/semester";
import { useState } from "react";
import { classes } from "../Interface/classes";
import { AddClass } from "./AddClass";

export function AddToSemester({
    handleClose,
    show,
    semesters,
    onAddClass
}: {
    handleClose: () => void;
    show: boolean;
    semesters: semester[];
    onAddClass: (updatedSchedule: semester[]) => void;
}) {
    const [searchAttribute, setSearchAttribute] = useState("");
    const [filteredCourses, setFilteredCourses] = useState(realData);
    const [visible, setVisible] = useState<boolean>(false);
    const [changeSemester, setChangeSemester] = useState<semester>(
        semesters[0]
    );

    function setPlan(updatedSchedule: semester[]): void {
        onAddClass(updatedSchedule);
        handleClose();
    }

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchAttribute(searchValue);

        const filteredClasses = realData.filter((course) =>
            course.code.toLowerCase().startsWith(searchValue.toLowerCase())
        );
        setFilteredCourses(filteredClasses);
    };

    const inputChangeSemester = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const wantedSemester = event.target.value;
        setChangeSemester(
            semesters[
                semesters.findIndex(
                    (sem: semester) => sem.season === wantedSemester
                )
            ]
        );
    };

    const handleClick = (cID: string) => {
        setSearchAttribute(cID);
    };

    const flipVisibility = () => {
        setVisible(!visible);
    };

    function getRealClass(): classes {
        const findIndexCourse: number = realData.findIndex(
            (course) => course.code === searchAttribute
        );
        const foundCourse: classes = realData[findIndexCourse];
        return foundCourse;
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Semester</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <div>
                            {semesters.map((sem: semester) => (
                                <Form.Check
                                    key={sem.season}
                                    type="radio"
                                    label={sem.season}
                                    value={sem.season}
                                    checked={
                                        changeSemester.season === sem.season
                                    }
                                    onChange={inputChangeSemester}
                                ></Form.Check>
                            ))}
                        </div>
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
                    <AddClass
                        schedule={semesters}
                        semester={changeSemester}
                        newClass={getRealClass()}
                        onAddClass={function (
                            updatedSchedule: semester[]
                        ): void {
                            setPlan(updatedSchedule);
                        }}
                    ></AddClass>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
