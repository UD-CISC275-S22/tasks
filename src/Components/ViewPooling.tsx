import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { addingCoursetoCurrSem } from "./addingCoursetoCurrSem";
import { Course } from "../Interfaces/course";
import { Semester } from "../Interfaces/semester";
import { Plan } from "../Interfaces/plan";
import { PoolingObjects } from "../Interfaces/poolingObjects";

export function ViewPooling({
    show,
    handleClose,
    plan,
    settingPlan,
    pooling
}: {
    show: boolean;
    handleClose: () => void;
    plan: Plan;
    settingPlan: (t: Plan) => void;
    pooling: PoolingObjects;
}): JSX.Element {
    const [semesterPooling, settingSemesterPooling] = useState("");
    const currentCoursesPool: Course[][] = plan.semesters.map(
        (currentSemesterDisplayed: Semester) =>
            currentSemesterDisplayed.courseList.map(
                (currentCoursesPool: Course) => ({
                    ...currentCoursesPool
                })
            )
    );
    const allCoursesPool: string[][] = currentCoursesPool.map(
        (courseLst2: Course[]) =>
            courseLst2.map(
                (currentCoursesDisplay: Course) => currentCoursesDisplay.title
            )
    );

    const changingDimensions = [] as string[];
    const currentCoursesPoolDim = changingDimensions.concat(...allCoursesPool);

    const [courses] = useState<Record<string, Record<string, Course>>>(
        pooling.courses
    );

    const coursesOrdered = [] as Course[];
    Object.entries(courses).map(
        ([, grouping]: [string, Record<string, Course>]) =>
            Object.entries(grouping).map(
                ([, cValue]: [string, Course]) =>
                    !changingDimensions.includes(cValue.title) &&
                    coursesOrdered.push(cValue as Course)
            )
    );

    const [course, settingCourse] = useState(coursesOrdered[0]);

    function courseOrder(event: React.ChangeEvent<HTMLSelectElement>) {
        const courseCheck = event.target.value.split(" ", 1);
        settingCourse(pooling.courses[courseCheck[0]][event.target.value]);
    }

    function semesterOrder(event: React.ChangeEvent<HTMLSelectElement>) {
        settingSemesterPooling(event.target.value);
    }

    function saveEdits() {
        if (semesterPooling === "") {
            settingSemesterPooling(plan.semesters[0].title);
            const courseCheck = course.title.split(" ", 1);
            const newCourse: Course =
                pooling.courses[courseCheck[0]][course.title];
            addingCoursetoCurrSem(
                newCourse,
                plan.semesters[0],
                plan,
                settingPlan
            );
        } else {
            const semesterIndexing = plan.semesters.findIndex(
                (s: Semester): boolean => s.title === semesterPooling
            );
            const currentSemesterView = plan.semesters[semesterIndexing];
            const courseCheck = course.title.split(" ", 1);
            const newCourse: Course =
                pooling.courses[courseCheck[0]][course.title];
            addingCoursetoCurrSem(
                newCourse,
                currentSemesterView,
                plan,
                settingPlan
            );
        }

        if (course.title === coursesOrdered[0].title)
            settingCourse(coursesOrdered[1]);
        else settingCourse(coursesOrdered[0]);
        handleClose();
    }

    function cancelEdits() {
        settingSemesterPooling(plan.semesters[0].title);
        handleClose();
    }

    return (
        <Modal show={show} onClose={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Course Pool: </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="options">
                    <Form.Label>
                        <b>Select Course: </b>
                    </Form.Label>
                    <Form.Select
                        title="poolingCourseslst"
                        value={course.title}
                        onChange={courseOrder}
                        data-testid="poolingCoursesLst"
                    >
                        {Object.entries(courses).map(
                            ([, grouping]: [string, Record<string, Course>]) =>
                                Object.entries(grouping).map(
                                    ([, cValue]: [string, Course]) =>
                                        !currentCoursesPoolDim.includes(
                                            cValue.title
                                        ) && (
                                            <option
                                                key={cValue.title}
                                                value={cValue.title}
                                            >
                                                {" "}
                                                {cValue.title}{" "}
                                            </option>
                                        )
                                )
                        )}
                    </Form.Select>

                    <div>
                        <div>Title: {course.title}</div>
                        <div>Name: {course.name}</div>
                        <div>Description: {course.description}</div>
                        <div>Credits: {course.credits}</div>
                        <div>Offered: {course.semester}</div>
                        <div>Department: {course.department}</div>
                        <div>Prerequisite: {course.prereq}</div>
                        <div>Corequisite: {course.coreq}</div>
                        <div>Requirements: {course.requirements}</div>
                    </div>
                </Form.Group>
                {plan.semesters.length != 0 && (
                    <Modal.Body>
                        <Form.Group controlId="options">
                            <Form.Label>
                                <b>Transfer to Current Semester: </b>
                            </Form.Label>
                            <Form.Select
                                title="semesterOrder/updating"
                                value={semesterPooling}
                                onChange={semesterOrder}
                                data-testid="semesterOrder/Updating"
                            >
                                {plan.semesters.map((s: Semester) => (
                                    <option
                                        key={s.title}
                                        value={s.title}
                                    ></option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Modal.Footer>
                            <Button
                                variant="warning"
                                onClick={cancelEdits}
                                data-testid="cancelPoolingMod"
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="success"
                                onClick={saveEdits}
                                data-testid="savingPoolingMod"
                            >
                                Add
                            </Button>
                        </Modal.Footer>
                    </Modal.Body>
                )}
            </Modal.Body>
        </Modal>
    );
}
