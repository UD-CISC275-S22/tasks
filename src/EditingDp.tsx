/* eslint-disable indent */
/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import "./App.css";
import { DegreePlan } from "./interfaces/degreeplan";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

//Todo: Editing a Dp will be very similar to adding a Dp.
//      One of the main things that should happen is there should be an edit button in DpViewer that triggers this code
//      We will basically trigger a popup modal with all the previous information pre attached and the user can then
//      delete and add courses/semesters.

//      Maybe what I can do is have some code run in the beginning of this file that stores all the current data
//      into the states and then from there we can parse and change things as we want.

export function EditingDp({
    show,
    handleClose,
    dp,
    editDp
}: {
    show: boolean;
    handleClose: () => void;
    dp: DegreePlan;
    editDp: (id: number, newdp: DegreePlan) => void;
}): JSX.Element {
    //todo: what we need to do is generate all the exisiting to the user before they can edit it
    const [semesters, setSemesters] = useState<Semester[]>(dp.semestersList);
    const [selectedSemester, setSelectedSemester] = useState<string>("Fall");
    const [title, setTitle] = useState<string>(dp.title);
    const [selectedSemesterId, setSelectedSemesterId] = useState<number | null>(
        null
    );

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
        // Reset the course input fields when selecting a new semester
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
        if (
            selectedSemesterId !== null &&
            newCourse.courseCode &&
            newCourse.title &&
            newCourse.credits > 0
        ) {
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
        setSemesters(dp.semestersList);
        setTitle(dp.title);
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
            id: dp.id,
            totalCredits: totDpSemesterCredits(),
            semestersList: semesters
        };
        setNewCourse({
            title: "",
            courseCode: "",
            credits: 0,
            degreeRequirements: [],
            coursePrereq: [],
            courseCoreq: [],
            courseDescription: ""
        });
        editDp(dp.id, newDp);
        handleClose();
    };
    //todo: down he we need to first generate all of the users data that is in their dp
    //      You can do things like defaultValue = {dp.title} possibly
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Degree Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        defaultValue={title}
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
                                            <input
                                                type="text"
                                                value={newCourse.courseCode}
                                                onChange={(e) =>
                                                    setNewCourse({
                                                        ...newCourse,
                                                        courseCode:
                                                            e.target.value
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

//bugs:
// - I have a bug where if i edited something and it takes me back to the dp viewer and i go to click edit again it
// does not load in the data in from the dp becauuse it does not recognize it for some reason i have to go back
// into the main page and reclick the dp and the edit button for it to recognize.
// solutiion: i think to fix it we have to remove the handleCloseModal function or at least change it since it is
// essentially overwritting the modal to a fresh start
//- I have a bug where once i hit close on the edit modal and i created courses and semesters the data is saved
//  the next time i open the edit modal instead of reverting back to its old state
// solution: i think i fixed the issue by changing the states back to their old state using the imported dp
//- I have a bug where the textboxes for adding a course will still have the data from before after closing
// and reopening the edit button without saving
// i can prob fix it by adding a defuault when the handleCloseModal runs
// Solution: I fixed it by adding a default course in handleCloseModal function
// - I have a bug where when I edit and delete a course, if i stay on the page and repress the edit button the modal
//  will still show the course i deleted but when i repress the edit button it fixes itself
// i may need to also add a defualt to the saveChanges function to update the modal when presses
