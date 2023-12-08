import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import { AddingCoursetoCurrSem } from "./AddingCoursetoCurrSem";
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
            currentSemesterDisplayed.courseList.map((courseP: Course) => ({
                ...courseP
            }))
    );
    const allPools: string[][] = currentCoursesPool.map(
        (courseLst2: Course[]) =>
            courseLst2.map(
                (currentCoursesDisplay: Course) => currentCoursesDisplay.title
            )
    );

    const changingDimensions = [] as string[];
    const flattenCurrentCoursesPool = changingDimensions.concat(...allPools);

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
            AddingCoursetoCurrSem(
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
            AddingCoursetoCurrSem(
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
        <div>
            <Modal show={show} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Course Dropdown</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="options">
                        <Form.Label>
                            <b>Select a Course: </b>
                        </Form.Label>
                        <Form.Select
                            value={course.title}
                            onChange={courseOrder}
                            data-testid="poolingCoursesLst"
                        >
                            {Object.entries(courses).map(
                                ([, grouping]: [
                                    string,
                                    Record<string, Course>
                                ]) =>
                                    Object.entries(grouping).map(
                                        ([, cValue]: [string, Course]) =>
                                            !flattenCurrentCoursesPool.includes(
                                                cValue.title
                                            ) && (
                                                <option
                                                    key={cValue.title}
                                                    value={cValue.title}
                                                >
                                                    {cValue.title}
                                                </option>
                                            )
                                    )
                            )}
                        </Form.Select>

                        <div>
                            <div>
                                <b>ID: </b>
                                {course.title}
                            </div>
                            <div>
                                <b>Name: </b>
                                {course.name}
                            </div>
                            <div>
                                <b>Description: </b>
                                {course.description}
                            </div>
                            <div>
                                <b>Credits: </b>
                                {course.credits}
                            </div>
                            <div>
                                <b>Offered: </b>
                                {course.semester}
                            </div>
                            <div>
                                <b>Department: </b>
                                {course.department}
                            </div>
                            <div>
                                <b>Prerequisite: </b>
                                {course.prereq}
                            </div>
                            <div>
                                <b>Corequisite: </b>
                                {course.coreq}
                            </div>
                            <div>
                                <b>Requirements: </b>
                                {course.requirements}
                            </div>
                        </div>
                    </Form.Group>
                    {plan.semesters.length != 0 && (
                        <Modal.Body>
                            <Form.Group controlId="options">
                                <Form.Label>
                                    <b>Transfer to Semester of Choice: </b>
                                </Form.Label>
                                <Form.Select
                                    value={semesterPooling}
                                    onChange={semesterOrder}
                                    data-testid="semesterOrderVP"
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
                                    variant="link"
                                    onClick={cancelEdits}
                                    data-testid="cancelModVP"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    variant="success"
                                    onClick={saveEdits}
                                    data-testid="savingPoolingMod"
                                >
                                    Transfer
                                </Button>
                            </Modal.Footer>
                        </Modal.Body>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}
