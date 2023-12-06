import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { addingCoursetoCurrSem } from "./addingCoursetoCurrSem";

import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import AllCourseList from "../data/AllCourseList.json";
import "../App.css";

export function AddingCourse({
    show,
    handleClose,
    currentSemester,
    plan,
    settingPlan
}: {
    show: boolean;
    handleClose: () => void;
    currentSemester: Semester;
    plan: Plan;
    settingPlan: (t: Plan) => void;
}) {
    const [courseTitles, settingCourseTitle] = useState<string>("");
    type CourseRecord = Record<string, Record<string, Course>>;
    const ALLCOURSELST: CourseRecord = AllCourseList;

    function saveEdits() {
        if (courseTitles.search(" ") === -1) {
            const regularExpression = /\d+/g;
            const expressionsMatch = courseTitles.match(regularExpression);

            if (expressionsMatch) {
                const firstTitleIndex = expressionsMatch[0].charAt(0);
                const firstTitleIndexing =
                    courseTitles.indexOf(firstTitleIndex);
                const titleID = courseTitles.substring(0, 0 + firstTitleIndex);
                const titleCode = courseTitles.substring(firstTitleIndexing);

                if (ALLCOURSELST[titleID]) {
                    if (ALLCOURSELST[titleID][titleID + " " + titleCode]) {
                        const addedCourseCheck =
                            ALLCOURSELST[titleID + " " + titleCode];
                        const courseIndexing =
                            currentSemester.courseList.findIndex(
                                (c: Course): boolean =>
                                    c.title === addedCourseCheck.title
                            );
                        const newSemester = { ...currentSemester };
                        if (courseIndexing > -1) {
                            newSemester.courseList.splice(courseIndexing, 1);
                        }
                        addingCoursetoCurrSem(
                            addedCourseCheck,
                            currentSemester,
                            plan,
                            settingPlan
                        );
                        settingPlan({
                            ...plan,
                            semesters: plan.semesters.map(
                                (semester: Semester): Semester =>
                                    semester.id === newSemester.id
                                        ? newSemester
                                        : semester
                            )
                        });
                        plan.credits += parseInt(addedCourseCheck.credits);
                    }
                }
                settingCourseTitle("");
                handleClose();
            }
        } else {
            const courseCheck = courseTitles.split(" ", 1);
            if (ALLCOURSELST[courseCheck[0].toUpperCase()]) {
                if (
                    ALLCOURSELST[courseCheck[0].toUpperCase()][
                        courseTitles.toUpperCase()
                    ]
                ) {
                    const addedCourseCheck =
                        ALLCOURSELST[courseCheck[0]][
                            courseTitles.toUpperCase()
                        ];
                    const courseIndexing = currentSemester.courseList.findIndex(
                        (c: Course): boolean =>
                            c.title === addedCourseCheck.title
                    );
                    const newSemester = { ...currentSemester };
                    if (courseIndexing > -1) {
                        newSemester.courseList.splice(courseIndexing, 1);
                    }
                    addingCoursetoCurrSem(
                        addedCourseCheck,
                        currentSemester,
                        plan,
                        settingPlan
                    );
                    settingPlan({
                        ...plan,
                        semesters: plan.semesters.map(
                            (semester: Semester): Semester =>
                                semester.id === newSemester.id
                                    ? newSemester
                                    : semester
                        )
                    });
                    plan.credits += parseInt(addedCourseCheck.credits);
                }
            }
            settingCourseTitle("");
            handleClose();
        }
    }
    return (
        <Modal show={show} close={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title> Add Course </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="courseTitle" as={Row}>
                    <Form.Label column sm={3}>
                        Title: (Ex. CISC 108)
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={courseTitles}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => settingCourseTitle(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={handleClose}
                    variant="primary"
                    data-testid="closeModAC"
                >
                    Close
                </Button>
                <Button
                    onClick={saveEdits}
                    variant="success"
                    data-testid="saveModAC"
                >
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
