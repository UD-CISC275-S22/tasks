/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";
import { courseList } from "./courseList";

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
    const [selectedSemesterId, setSelectedSemesterId] = useState<number | null>(
        null
    );

    const [selectedCourseCode, setSelectedCourseCode] = useState<string>("");
    const [newCourse, setNewCourse] = useState<Course>({
        title: "",
        courseCode: "",
        credits: 0,
        degreeRequirements: [],
        coursePrereq: [],
        courseCoreq: [],
        courseDescription: ""
    });

    const handleSelectSemester = (semesterId: number) => {
        setSelectedSemesterId(semesterId);
        setSelectedCourseCode(""); // Reset the selected course code
        setNewCourse({
            courseCode: "",
            title: "",
            credits: 0,
            degreeRequirements: [],
            coursePrereq: [],
            courseCoreq: [],
            courseDescription: ""
        });
    };

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
        if (selectedSemesterId !== null && selectedCourseCode) {
            const selectedCourse = courseList.find(
                (course) => course.courseCode === selectedCourseCode
            );
            if (selectedCourse) {
                updateSemesterCredits(semesterId, selectedCourse.credits);
                setSemesters((prevSemesters) =>
                    prevSemesters.map((semester) =>
                        semester.id === semesterId
                            ? {
                                  ...semester,
                                  courses: [...semester.courses, selectedCourse]
                              }
                            : semester
                    )
                );
                setSelectedCourseCode(""); // Reset the selected course code
            }
        }
    };

    const deleteSemester = (id: number) => {
        const updatedSemesters = semesters.filter(
            (semester) => semester.id !== id
        );
        setSemesters(updatedSemesters);
    };

    const deleteCourse = (
        semesterId: number,
        courseIndex: number,
        credits: number
    ) => {
        updateSemesterCredits(semesterId, -credits);
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

    const semesterOptions = ["Fall", "Winter", "Spring", "Summer"];

    const handleCloseModal = () => {
        setTitle("Example Title");
        setSelectedSemester("Fall");
        setSelectedSemesterId(null);
        setSemesters([]);
        setSelectedCourseCode(""); // Reset the selected course code
        setNewCourse({
            title: "",
            courseCode: "",
            credits: 0,
            degreeRequirements: [],
            coursePrereq: [],
            courseCoreq: [],
            courseDescription: ""
        });
        handleClose();
    };

    const saveChanges = () => {
        const newDp: DegreePlan = {
            title: title,
            id: 0,
            totalCredits: totDpSemesterCredits(),
            semestersList: semesters
        };
        addDp(newDp);
        handleCloseModal();
    };

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
                                defaultValue={"Fall"}
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
                                                                courseIndex,
                                                                course.credits
                                                            )
                                                        }
                                                    >
                                                        Delete Course
                                                    </button>
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <button
                                        onClick={() =>
                                            handleSelectSemester(semester.id)
                                        }
                                    >
                                        Add Course
                                    </button>
                                    {selectedSemesterId === semester.id && (
                                        <div>
                                            <select
                                                value={selectedCourseCode}
                                                onChange={(e) =>
                                                    setSelectedCourseCode(
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select a course
                                                </option>
                                                {courseList.map((course) => (
                                                    <option
                                                        key={course.courseCode}
                                                        value={
                                                            course.courseCode
                                                        }
                                                    >
                                                        {course.title}
                                                    </option>
                                                ))}
                                            </select>
                                            <button
                                                onClick={() =>
                                                    addCourse(semester.id)
                                                }
                                            >
                                                Enter
                                            </button>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
