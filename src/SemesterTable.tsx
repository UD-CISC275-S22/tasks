/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
///import { Button } from "react-bootstrap";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";
import { course } from "./PlannerInterfaces/course";
import { plan } from "./PlannerInterfaces/plan";
import { semester } from "./PlannerInterfaces/semester";
import { DisplayCourse } from "./CoursePlan";
import * as catalogData from "./catalog.json";
//Courses to be used to for the datalist autofill
interface currentSemester {
    semester: semester;
    plan: plan;
    updatePlan: (plan: plan) => void;
}
interface CourseCatalog {
    [department: string]: {
        [courseID: string]: {
            id: string;
            name: string;
            descr: string;
            credits: string;
            preReq: string;
            restrict: string;
            breadth: string;
            typ: string;
        };
    };
}
interface CatalogItem {
    id: string;
    name: string;
    descr: string;
    credits: number;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
}
const catalog: CatalogItem[] = Object.values(catalogData).flatMap(
    (department: CourseCatalog) => {
        const courses = Object.values(department).flatMap(Object.values);
        return courses;
    }
);

const courseList = catalog.map((course) => ({
    id: course.id,
    name: course.name,
    descr: course.descr,
    credits: +course.credits,
    courseID: course.id,
    preReq: course.preReq,
    restrict: course.restrict,
    breadth: course.breadth,
    typ: course.typ
}));
export function DisplaySemester({
    semester,
    plan,
    updatePlan
}: currentSemester): JSX.Element {
    //For the modal
    const [isOnScreen, setOnScreen] = useState(false);
    function toggleModal() {
        setOnScreen(!isOnScreen);
    }
    const [edit, setEdit] = useState<boolean>(false);
    const [courseID, setcourseID] = useState<string>("");
    const [credits, setCredits] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [preReq, setPreReq] = useState<string>("");

    //Find the course with the ID and delete it
    function deleteCourse(id: string): void {
        const newCourses = semester.courses.filter(
            (course: course): boolean => course.id !== id
        );
        const newSem = plan.semesters.map(
            (sem: semester): semester =>
                sem.id === semester.id
                    ? { ...sem, courses: newCourses }
                    : { ...sem }
        );
        updatePlan({ ...plan, semesters: newSem });
    }

    //Deletes all courses in a semester
    function removeAllCourses() {
        const newSemester = plan.semesters.map(
            (semester: semester): semester =>
                semester.id === semester.id
                    ? { ...semester, courses: [] }
                    : { ...semester }
        );
        updatePlan({ ...plan, semesters: newSemester });
    }
    //Updates the course ID
    function updatecourseID(event: React.ChangeEvent<HTMLInputElement>) {
        const newCourse = catalog.find(
            (course) => course.id === event.target.value
        );
        if (!newCourse) {
            // If not in the pool of courses, use null values
            setcourseID(event.target.value);
            setCredits(0);
            setName("");
            setPreReq("");
        } else {
            setcourseID(event.target.value);
            setCredits(newCourse.credits);
            setName(newCourse.name);
            setPreReq(newCourse.preReq);
        }
    }

    function chooseCourse(): JSX.Element {
        return (
            <div className=".app">
                <Button
                    className="btnadd"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    type="button"
                    onClick={toggleModal}
                >
                    Add Course
                </Button>
                <Modal
                    show={isOnScreen}
                    animation={false}
                    onRequestClose={toggleModal}
                >
                    <Form.Group className="mb-3" id="courseID">
                        <datalist id="courseIDs">
                            {courseList.map((course: course) => (
                                <option key={course.id}>{course.id}</option>
                            ))}
                        </datalist>
                        <Form.Label placeholder="Enter Course ID">
                            Please Enter The Course ID, then find your course
                            from the dropdown:
                        </Form.Label>
                        <Form.Control
                            list="courseIDs"
                            value={courseID}
                            onChange={updatecourseID}
                        />
                    </Form.Group>
                    <ModalFooter>
                        <div>
                            <Button
                                className="btnadd"
                                type="submit"
                                onClick={addCourse}
                            >
                                Add Course
                            </Button>

                            <Button
                                className="btncancel"
                                type="button"
                                onClick={toggleModal}
                            >
                                Cancel
                            </Button>
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

    function makeID(): string {
        return courseID;
    }
    function addCourse() {
        const newCourse: course = {
            id: makeID(),
            name: name,
            credits: credits,
            courseID: courseID,
            preReq: preReq
        };

        const updatedPlan: plan = {
            ...plan,
            semesters: plan.semesters.map((sem: semester) =>
                sem.id === semester.id
                    ? { ...sem, courses: [...sem.courses, newCourse] }
                    : { ...sem }
            )
        };
        updatePlan(updatedPlan);
        toggleModal();
        setcourseID("");
        setCredits(0);
        setName("");
    }
    //Edits the name of the semester
    function editSemName(event: React.ChangeEvent<HTMLInputElement>) {
        const newSemester = plan.semesters.map(
            (semester: semester): semester =>
                semester.id === semester.id
                    ? { ...semester, name: event.target.value }
                    : { ...semester }
        );
        updatePlan({ ...plan, semesters: newSemester });
    }
    return (
        <>
            <div>
                <select>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>Summer</option>
                    <option>Fall</option>
                </select>
                <select>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                </select>
            </div>
            <table className="Table-Header">
                {edit ? (
                    <div>
                        <Form.Group
                            className="dropdownWidth"
                            controlId="semName"
                        >
                            <Form.Label>Name of Semester: </Form.Label>
                            <Form.Control
                                value={semester.name}
                                onChange={editSemName}
                            />
                        </Form.Group>
                        <Button onClick={() => setEdit(false)}>
                            Stop Editing
                        </Button>
                    </div>
                ) : (
                    <div>
                        <h4>
                            {semester.name}{" "}
                            <Button
                                className="btntransparent"
                                onClick={() => setEdit(true)}
                            >
                                Edit Semester Name
                            </Button>
                        </h4>
                    </div>
                )}
                <tr>
                    <th>Course</th>
                    <th>Course Name</th>
                    <th>Credits</th>
                    <th>Edit Course</th>
                    <th>Delete Course</th>
                </tr>
                {semester.courses.map((course: course) => {
                    return (
                        <tr key={course.id}>
                            <DisplayCourse
                                defaultCourse={course}
                                semester={semester}
                                plan={plan}
                                updatePlan={updatePlan}
                            ></DisplayCourse>
                            <td>
                                <Button
                                    className="btncancel"
                                    onClick={() => deleteCourse(course.id)}
                                >
                                    Remove Course
                                </Button>
                            </td>
                        </tr>
                    );
                })}
                {chooseCourse()}
                <Button
                    className="btncancel"
                    onClick={() => removeAllCourses()}
                >
                    Remove All Courses
                </Button>
            </table>
        </>
    );
}
