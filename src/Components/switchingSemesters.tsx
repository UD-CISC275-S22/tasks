import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { AddingCoursetoCurrSem } from "./AddingCoursetoCurrSem";

import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import "../App.css";

export function SwitchingSemesters({
    show,
    handleClose,
    currentPlan,
    settingPlan,
    course,
    courseSemester
}: {
    show: boolean;
    handleClose: () => void;
    currentPlan: Plan;
    settingPlan: (t: Plan) => void;
    course: Course;
    courseSemester: Semester;
}) {
    const [currentSemester, settingCurrentSemester] = useState(
        courseSemester.title
    );
    function savingSemester(event: React.ChangeEvent<HTMLSelectElement>) {
        settingCurrentSemester(event.target.value);
    }

    function savingEdits() {
        if (currentSemester != courseSemester.title) {
            if (currentSemester === "PoolingObjects") {
                const courseIndexing = courseSemester.courseList.findIndex(
                    (c: Course): boolean => c.title === course.title
                );
                const newSemester = { ...courseSemester };
                if (courseIndexing > -1) {
                    newSemester.courseList.splice(courseIndexing, 1);
                }
                settingPlan({
                    ...currentPlan,
                    semesters: currentPlan.semesters.map(
                        (semester: Semester): Semester =>
                            semester.id === newSemester.id
                                ? newSemester
                                : semester
                    )
                });

                settingCurrentSemester("");
            } else {
                const courseIndexing = courseSemester.courseList.findIndex(
                    (c: Course): boolean => c.title === course.title
                );
                const newSemester = { ...courseSemester };

                if (courseIndexing > -1) {
                    newSemester.courseList.splice(courseIndexing, 1);
                }

                const semesterIndexing = currentPlan.semesters.findIndex(
                    (s: Semester): boolean => s.title === currentSemester
                );

                if (semesterIndexing > -1) {
                    AddingCoursetoCurrSem(
                        course,
                        currentPlan.semesters[semesterIndexing],
                        currentPlan,
                        settingPlan
                    );
                    settingCurrentSemester(
                        currentPlan.semesters[semesterIndexing].title
                    );
                    settingPlan({
                        ...currentPlan,
                        semesters: currentPlan.semesters.map(
                            (semester: Semester): Semester =>
                                semester.id === newSemester.id
                                    ? newSemester
                                    : semester
                        )
                    });
                }
            }
        }
        handleClose();
    }

    function cancelEdits() {
        settingCurrentSemester(courseSemester.title);
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <b>Select Session for Course:</b>
                    </Modal.Title>
                </Modal.Header>
                <Form.Group controlId="options">
                    <Form.Select
                        value={currentSemester}
                        onChange={savingSemester}
                    >
                        {currentPlan.semesters.map((s: Semester) => (
                            <option key={s.title} value={s.title}>
                                {s.title}
                            </option>
                        ))}
                        <option key={"PoolingObjects"} value={"PoolingObjects"}>
                            {"All Courses Info"}
                        </option>
                    </Form.Select>
                </Form.Group>
                <Modal.Footer>
                    <Button onClick={cancelEdits} variant="link">
                        Cancel
                    </Button>
                    <Button onClick={savingEdits} variant="success">
                        Move
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
