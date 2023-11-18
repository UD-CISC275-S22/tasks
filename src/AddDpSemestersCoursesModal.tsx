/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

export function AddDpSemestersCoursesModal({
    show,
    handleClose,
    addDp
}: {
    show: boolean;
    handleClose: () => void;
    addDp: (newdp: DegreePlan) => void;
}): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [selectedSemester, setSelectedSemester] = useState<string>("Fall");
    const [title, setTitle] = useState<string>("Example Title");

    const [newCourse, setNewCourse] = useState<Course>({
        title: "",
        courseCode: "",
        credits: 0,
        degreeRequirements: [],
        coursePrereq: [],
        courseCoreq: [],
        courseDescription: ""
    });

    const addSemester = () => {
        const newSemesterObj: Semester = {
            id: semesters.length + 1,
            title: selectedSemester,
            courses: [],
            totalCredits: 0
        };
        setSemesters([...semesters, newSemesterObj]);
    };

    function updateSemesterCredits(semesterId: number, credits: number) {
        const modifiedSemester = semesters.map(
            (semester: Semester): Semester =>
                semester.id === semesterId
                    ? {
                          ...semester,
                          totalCredits: semester.totalCredits + credits
                      }
                    : { ...semester }
        );
        setSemesters(modifiedSemester);
    }

    const addCourse = (semesterId: number) => {
        if (newCourse.courseCode && newCourse.title && newCourse.credits > 0) {
            updateSemesterCredits(semesterId, newCourse.credits);
            setSemesters((prevSemesters) =>
                prevSemesters.map((semester) =>
                    semester.id === semesterId
                        ? {
                              ...semester,
                              // eslint-disable-next-line indent
                              courses: [...semester.courses, newCourse]
                          }
                        : semester
                )
            );
            setNewCourse({
                courseCode: "",
                title: "",
                credits: 0,
                degreeRequirements: [],
                coursePrereq: [],
                courseCoreq: [],
                courseDescription: ""
            });
        }
    };

    const deleteSemester = (id: number) => {
        const updatedSemesters = semesters.filter(
            (semester) => semester.id !== id
        );
        setSemesters(updatedSemesters);
    };

    const deleteCourse = (semesterId: number, courseIndex: number) => {
        setSemesters((prevSemesters) =>
            prevSemesters.map((semester) =>
                semester.id === semesterId
                    ? {
                          ...semester,
                          courses: semester.courses.filter(
                              (_, index) => index !== courseIndex
                          )
                      }
                    : semester
            )
        );
    };
    function totDpSemesterCredits(): number {
        const totSemestersCredits: number = semesters.reduce(
            (currentTot: number, semester: Semester) =>
                currentTot + semester.totalCredits,
            0
        );
        return totSemestersCredits;
    }
    const saveChanges = () => {
        const newDp: DegreePlan = {
            title: title,
            id: 0,
            totalCredits: totDpSemesterCredits(),
            semestersList: semesters
        };
        addDp(newDp);
        handleClose();
        setSemesters([]); //added this to set up a clean slate for semester tracker whenever we go to add a new dp
    };

    const semesterOptions = ["Fall", "Winter", "Spring", "Summer"];

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Degree Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        defaultValue="Example Title"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setTitle(e.target.value)
                        }
                    ></Form.Control>
                    <div>
                        <h5>Add Semesters and Courses</h5>
                        <div>
                            <select
                                defaultValue={"Fall"} //changed from value={selectedSemester} to defaultValue={"Fall"}
                                onChange={(e) =>
                                    setSelectedSemester(e.target.value)
                                }
                            >
                                {semesterOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                            <button onClick={addSemester}>Add Semester</button>
                        </div>
                        <ul>
                            {semesters.map((semester) => (
                                <li key={semester.id}>
                                    <div>
                                        Semester: {semester.title}
                                        <button
                                            onClick={() =>
                                                deleteSemester(semester.id)
                                            }
                                        >
                                            Delete Semester
                                        </button>
                                    </div>
                                    <div className="courses">
                                        {semester.courses.map(
                                            (course, courseIndex) => (
                                                <div
                                                    key={courseIndex}
                                                    className="course"
                                                >
                                                    <span>
                                                        Course Code:{" "}
                                                        {course.courseCode}
                                                        <br />
                                                        Course Title:{" "}
                                                        {course.title}
                                                        <br />
                                                        Credits:{" "}
                                                        {course.credits}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            deleteCourse(
                                                                semester.id,
                                                                courseIndex
                                                            )
                                                        }
                                                    >
                                                        Delete Course
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            value={newCourse.courseCode}
                                            onChange={(e) =>
                                                setNewCourse({
                                                    ...newCourse,
                                                    courseCode: e.target.value
                                                })
                                            }
                                            placeholder="Course Code"
                                        />
                                        <input
                                            type="text"
                                            value={newCourse.title}
                                            onChange={(e) =>
                                                setNewCourse({
                                                    ...newCourse,
                                                    title: e.target.value
                                                })
                                            }
                                            placeholder="Course Title"
                                        />
                                        <input
                                            type="number"
                                            value={newCourse.credits}
                                            onChange={(e) =>
                                                setNewCourse({
                                                    ...newCourse,
                                                    credits: +e.target.value
                                                })
                                            }
                                            placeholder="Credits"
                                        />
                                        <button
                                            onClick={() =>
                                                addCourse(semester.id)
                                            }
                                        >
                                            Add Course
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
