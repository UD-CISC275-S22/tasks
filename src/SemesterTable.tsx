/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
///import { Button } from "react-bootstrap";
import { data } from "./classData";
import { Button, Form, Modal, ModalFooter } from "react-bootstrap";
import { course } from "./PlannerInterfaces/course";
import { plan } from "./PlannerInterfaces/plan";
import { semester } from "./PlannerInterfaces/semester";
import { DisplayCourse } from "./CoursePlan";
//Courses to be used to for the datalist autofill
interface currentSemester {
    semester: semester;
    plan: plan;
    updatePlan: (plan: plan) => void;
}
const courseList = data.map(
    (course): course => ({
        id: course.id,
        name: course.name,
        credits: course.credits,
        courseID: course.courseID,
        preReq: course.preReq
    })
);
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
        const newCourse = courseList.findIndex(
            (course: course) => course.id === event.target.value
        );
        if (newCourse === -1) {
            //If not in the pool of courses use null values
            setcourseID(event.target.value);
            setCredits(0);
            setName("");
            setPreReq("");
        } else {
            setcourseID(event.target.value);
            setCredits(courseList[newCourse].credits);
            setName(courseList[newCourse].name);
            setPreReq(courseList[newCourse].preReq);
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
                            ;
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

    function addCourse() {
        // const newCourse = {
        //     id: courseID,
        //     name: name,
        //     credits: credits,
        //     courseId: courseID,
        //     preReq: preReq
        // };
        // const newSemester = plan.semesters.map(
        //     (semester: semester): semester =>
        //         semester.id === semester.id
        //             ? { ...semester, courses: [...semester.courses, newCourse] }
        //             : { ...semester }
        // );
        // updatePlan({ ...plan, semesters: newSemester });
        // toggleModal();
        // setcourseID("");
        // setCredits(0);
        // setName("");
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
