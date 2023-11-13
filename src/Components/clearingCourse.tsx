import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
import { Semester } from "../Interfaces/semester";
import courseListAll from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";

export function clearCourse({
    clicked,
    closed,
    currentCourse,
    currentSemester
}: {
    clicked: boolean;
    closed: () => void;
    currentCourse: Course;
    currentSemester: Semester;
}) {
    function saveEdits() {
        const indexing = currentSemester.courseList.findIndex(
            (course: Course): boolean => course === currentCourse
        );
        if (indexing > -1) {
            currentSemester.courseList.splice(indexing, 1);
        }
        closed();
    }
    return (
        <Modal onClicked={clicked} onClose={close} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {" "}
                    You are deleting this current semester, do you confirm?{" "}
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="delete" onClick={saveEdits}>
                    Clear
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
