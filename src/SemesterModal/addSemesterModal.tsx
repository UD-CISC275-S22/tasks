/* eslint-disable no-extra-parens */

import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import realData from "../data/corrected_data.json";
import { semester } from "../Interface/semester";
import { useState } from "react";
import { classes } from "../Interface/classes";

export function AddSemesterModal({
    handleClose,
    show,
    semesters,
    settingSemester
}: {
    handleClose: () => void;
    show: boolean;
    semesters: semester[];
    settingSemester: (Sems: semester[]) => void;
}): JSX.Element {
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

    function addSemester(
        id: number,
        fullTime: boolean,
        classList: classes[],
        totalCredits: number,
        season: string
    ): void {
        const newSemester: semester = {
            id: id,
            fullTime: fullTime,
            classList: classList,
            totalCredits: totalCredits,
            season: season
        };
        settingSemester([...semesters, newSemester]);
        console.log([...semesters, newSemester]);
    }

    function closingModal() {
        const findIndexCourse: number = realData.findIndex(
            (course) => course.code === searchAttribute
        );
        const foundCourse: classes = realData[findIndexCourse];
        if (semesters.length === 0) {
            const newId = 0;
            addSemester(
                newId,
                true,
                [foundCourse],
                foundCourse.credits,
                season
            );
            handleClose();
        } else {
            const lastSemester: semester = semesters[semesters.length - 1];
            const newId: number = lastSemester.id + 1;
            addSemester(
                newId,
                true,
                [foundCourse],
                foundCourse.credits,
                season
            );
            handleClose();
        }
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
                                data-testid="input1"
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
                                data-testid="input2"
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
                                            className="searchResult"
                                            onClick={() =>
                                                handleClick(course.code)
                                            }
                                            style={{
                                                cursor: "pointer",
                                                color: "white",
                                                textAlign: "center",
                                                borderBottom: "solid",
                                                borderBottomColor: "white",
                                                fontWeight: "bold"
                                            }}
                                            key={course.code}
                                        >
                                            {course.code}
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
                        data-testid="Done"
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

/* 

This component is used to create pop which allows users to 
add a semester to thier degree plan. (Currently demo data is being 
used to display the table, and show that you can add a semester to the plan.) 
The component allows the user to write the name of the semester and also search 
through the courses with the help of filtering search. From there, the information about
the course is extracted and the displayed on the plan, alongside the name of the semester

I have a linter issue currently due to parans issue but it should be fixed before final submission

*/
