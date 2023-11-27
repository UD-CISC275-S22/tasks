import React from "react";
import { Button, Modal } from "react-bootstrap";
import "../App.css";
import { Semester } from "../Interfaces/semester";
// import courseListAll from "../data/AllCourseList.json";
import { Course } from "../Interfaces/course";
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
        <Modal show={show} close={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {" "}
                    You are deleting this current course, do you confirm?{" "}
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="warning" onClick={saveEdits}>
                    Clear
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
