/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";
//todo: right now the modal is not reseting after adding semesters and courses when you click save and try and create a new dp.
//      what should happen is that the modal should be back in a default state but it is not for the semester tracker
//      adding semesters and courses should only be a one time thing then if the user chooses to go back and edit the dp then they can by clicking an edit button
//      for now, we are only focused on the one time use where the user open the modal to create a dp and they insert the title
//      and all the semesters and courses (with of course the functionality to delete semesters and courses within the modal)
//      after we press save the data shoould route back to the app.tsx where there should be a function that reads in all the data from the modal and
//      converts it into a dp that the user can then see with the help of dpviewer.tsx

//todo / complete: I want to reset the modal everytime so that it is in a clean slate every time you open it
//               Right now it is showing the previous semester tracker every time when it should be in a default state every time
//todo (current): make it so that the user can create their semesters and courses and then send that back to app.tsx where we create a dp of it so that dpviewer can use it
export function NewModal({
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
    //todo: find a way to track the amount of credits in total for the dp, probably parse the semester state before saving dp and add up the amount of credits in each semester.
    const [totalCredits, setTotCredits] = useState<number>(0);
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

    const addCourse = (semesterId: number) => {
        if (newCourse.courseCode && newCourse.title && newCourse.credits > 0) {
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

    //assuming semsters state is tracking the total credits for each semester this will total up all the semesters credits at the end
    const totSemestersCredits = semesters.reduce(
        (currentTot: number, semester: Semester) =>
            currentTot + semester.totalCredits,
        0
    );

    const saveChanges = () => {
        const newDp: DegreePlan = {
            title: title,
            id: 0,
            totalCredits: totSemestersCredits,
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
                        <h1>Semester Tracker</h1>
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
