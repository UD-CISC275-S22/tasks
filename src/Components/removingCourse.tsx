import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
// import courseListAll from "../data/AllCourseList.json";

import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";

export function ClearCourse({
    show,
    handleClose,
    currentCourse,
    currentSemester,
    plan,
    settingPlan
}: {
    show: boolean;
    handleClose: () => void;
    currentCourse: Course;
    currentSemester: Semester;
    plan: Plan;
    settingPlan: (t: Plan) => void;
}) {
    function saveEdits() {
        const indexing = currentSemester.courseList.findIndex(
            (course: Course): boolean => course === currentCourse
        );
        const newSemester = { ...currentSemester };
        if (indexing > -1) {
            newSemester.courseList.splice(indexing, 1);
        }
        settingPlan({
            ...plan,
            semesters: plan.semesters.map(
                (semester: Semester): Semester =>
                    semester.id === newSemester.id ? newSemester : semester
            )
        });
        handleClose();
    }
    return (
        <Modal show={show} onClose={handleClose}>
            <Modal.Header>
                <Modal.Title>
                    <b>Warning!</b>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p> You are deleting this course, do you confirm?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="link" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={saveEdits}>
                    Clear
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
