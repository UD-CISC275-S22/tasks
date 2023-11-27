import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import AllCourseList from "../data/AllCourseList.json";
import { courseOrigin } from "./courseOrigin";
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
    const [courseIDs, settingCourseID] = useState<string>("");
    type CourseRecord = Record<string, Record<string, Course>>;
    const AllCourseLst: CourseRecord = AllCourseList;

    function saveEdits() {
        const courseCheck = courseIDs.split(" ", 1);
        if (AllCourseLst[courseCheck[0].toUpperCase()]) {
            if (
                AllCourseLst[courseCheck[0].toUpperCase()][
                    courseIDs.toUpperCase()
                ]
            ) {
                const addingCourseCheck =
                    AllCourseLst[courseCheck[0].toUpperCase()][
                        courseIDs.toUpperCase()
                    ];
                const courseIndexing = currentSemester.courseList.findIndex(
                    (c: Course): boolean => c.title === addingCourseCheck.title
                );
                const newSemester = { ...currentSemester };
                if (courseIndexing > -1) {
                    newSemester.courseList.splice(courseIndexing, 1);
                }
                //plan.credits += parseInt(addingCourseCheck.credits);
            }
        }
        settingCourseID("");
        handleClose();
    }
    return (
        <Modal show={show} close={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title> Add Course </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="courseID" as={Row}>
                    <Form.Label column sm={3}>
                        Course ID: (Ex. CISC108)
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={courseIDs}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => settingCourseID(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}> Close </Button>
                <Button onClick={saveEdits}> Save </Button>
            </Modal.Footer>
        </Modal>
    );
}
