/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
///import { Button } from "react-bootstrap";
import { data } from "./classData";
import { Button, Form } from "react-bootstrap";
import { course } from "./PlannerInterfaces/course";
import { plan } from "./PlannerInterfaces/plan";
import { semester } from "./PlannerInterfaces/semester";
//Courses to be used to for the datalist autofill
const courseList = data.map(
    (course): course => ({
        id: course.id,
        name: course.name,
        credits: course.credits,
        courseID: course.id,
        preReq: course.preReq
    })
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function DisplayCourse({
    defaultCourse,
    semester,
    plan,
    updatePlan
}: {
    defaultCourse: course;
    semester: semester;
    plan: plan;
    updatePlan: (plan: plan) => void;
}): JSX.Element {
    //set/edit courseID
    const [courseID, setCourseID] = useState<string>(defaultCourse.courseID);
    const [isEditing, setIsEditing] = useState<boolean>(false); //If editing course info or not
    const [credits, setCredits] = useState<number>(defaultCourse.credits); //Credit editing
    const [name, setName] = useState<string>(defaultCourse.name); //name editing
    const [preReqs, setPreReqs] = useState<string>(defaultCourse.preReq); //PreReq editing

    //Saves changes to use for Plan
    function editCourse(course: course) {
        const replace = semester.courses.findIndex(
            (course2: course) => course2.id === course.id
        );
        const newCourses = [...semester.courses];
        newCourses.splice(replace, 1, course);
        const newSem = plan.semesters.map(
            (semester: semester): semester =>
                semester.id === semester.id
                    ? { ...semester, courses: newCourses }
                    : { ...semester }
        );
        updatePlan({ ...plan, semesters: newSem });
    }

    //Updates info based on autofill
    function updateCourseIdentity(event: React.ChangeEvent<HTMLInputElement>) {
        const newCourse = courseList.findIndex(
            (course: course) => course.id === event.target.value
        );
        setCourseID(event.target.value);
        setCredits(courseList[newCourse].credits);
        setName(courseList[newCourse].name);
        setPreReqs(courseList[newCourse].preReq);
    }

    //Called if save changes selected (will hopefully save changes)
    function updateEditing() {
        setIsEditing(false);
        editCourse({
            id: defaultCourse.id,
            name: name,
            credits: credits,
            courseID: courseID,
            preReq: preReqs
        });
    }

    //Called if cancel clicked when editing (won't save changes)
    function cancelEdit() {
        setIsEditing(false);
        setCourseID(defaultCourse.courseID);
        setCredits(defaultCourse.credits);
        setName(defaultCourse.name);
        setPreReqs(defaultCourse.preReq);
    }

    function updateCourseName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(parseInt(event.target.value));
    }
    function updatePreReqs(event: React.ChangeEvent<HTMLInputElement>) {
        setPreReqs(event.target.value);
    }

    return (
        <>
            {
                // eslint-disable-next-line no-extra-parens, prettier/prettier
            }{" "}
            {isEditing ? ( //If editing displays textboxes and 2 buttons to allow for edits to the course to be made
                <>
                    <td>
                        <Form.Group className="mb-3" id="courseID">
                            <datalist id="courseIDs">
                                {
                                    // eslint-disable-next-line no-extra-parens, prettier/prettier
                                }{" "}
                                {courseList.map((course: course) => (
                                    <option key={course.id}>{course.id}</option>
                                ))}
                            </datalist>
                            <Form.Label htmlFor="courseID">
                                CourseID:{" "}
                            </Form.Label>
                            <Form.Control
                                list="courseIDs"
                                value={courseID}
                                onChange={updateCourseIdentity}
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3" controlId="courseName">
                            <Form.Label>Name of Course: </Form.Label>
                            <Form.Control
                                value={name}
                                onChange={updateCourseName}
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3" controlId="courseCredits">
                            <Form.Label>Number of Credits: </Form.Label>
                            <Form.Control
                                type="number"
                                value={credits}
                                onChange={updateCredits}
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Form.Group className="mb-3" controlId="coursePreReqs">
                            <Form.Label>PreReqs: </Form.Label>
                            <Form.Control
                                value={preReqs}
                                onChange={updatePreReqs}
                            />
                        </Form.Group>
                    </td>
                    <td>
                        <Button onClick={updateEditing} className="btnadd">
                            Save Changes
                        </Button>
                        <br></br>
                        <Button onClick={cancelEdit} className="btncancel">
                            Cancel
                        </Button>
                    </td>
                </>
            ) : (
                <>
                    <td>{courseID}</td>
                    <td>{name}</td>
                    <td>{credits}</td>
                    <td>
                        <Button
                            onClick={() => setIsEditing(true)}
                            className="btn"
                        >
                            Edit Course
                        </Button>
                    </td>
                </>
            )}
        </>
    );
}
