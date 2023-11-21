/* eslint-disable no-extra-parens */
import React from "react";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";
import { RemoveClass } from "../semester-modification/RemoveClass";
import { EditClassInfoModal } from "../semester-modification/EditClassInfoModal";
//import { EditClass } from "../semester-modification/EditClass";
import { useState } from "react";
import { Button } from "react-bootstrap";

export function SemesterView({
    semester,
    clearSemester,
    setDragCourse,
    handleOnDrop,
    handleOnDragOver,
    clearCourses,
    clearCourseFromSemester
}: {
    semester: semester;
    clearSemester: (id: number) => void;
    setDragCourse: (classes: classes) => void;
    handleOnDrop: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleOnDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
    clearCourses: (sems: semester) => void;
    clearCourseFromSemester: (semester: semester) => void;
}): JSX.Element {
    //This grabs the info of the course being dragged.
    //TODO: Doesn't properly render on its own.
    const [modalView, setModalView] = useState(false);
    const handleDragStart = (
        event: React.DragEvent<HTMLTableRowElement>,
        course: classes
    ) => {
        console.log("Enter");
        console.log(course);
        setDragCourse(course);
    };
    const flipModalView = () => {
        console.log("hello");
        setModalView(!modalView);
        //console.log("hello");
    };
    return (
        <div
            onDrop={(e) => handleOnDrop(e, semester.id)}
            onDragOver={(e) => handleOnDragOver(e)}
        >
            <div>
                <h3>{semester.season}</h3>
            </div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Prerequisites</th>
                        <th scope="col">Remove Class</th>
                        <th scope="col">Edit Course</th>
                        {/*<th scope="col">Schedule</th>
                        <th scope="col">Location</th>
                        <th scope="col">Instructor</th>
    */}
                    </tr>
                </thead>
                <tbody>
                    {semester.classList.map((classItem) => {
                        return (
                            <tr
                                draggable={true}
                                onDragStart={(e) =>
                                    handleDragStart(e, classItem)
                                }
                                key={classItem.code}
                            >
                                <td>{classItem.code}</td>
                                <td>{classItem.title}</td>
                                <td>{classItem.credits}</td>
                                <td>
                                    {classItem.preReq.length === 0
                                        ? "None"
                                        : classItem.preReq}
                                </td>
                                <td>
                                    <RemoveClass
                                        schedule={semester}
                                        classToDelete={classItem}
                                        onRemoveClass={function (
                                            updatedSchedule: semester
                                        ): void {
                                            clearCourseFromSemester(
                                                updatedSchedule
                                            );
                                        }}
                                    ></RemoveClass>
                                </td>
                                <td>
                                    <Button onClick={flipModalView}>
                                        Edit Course
                                    </Button>
                                    {modalView && (
                                        <EditClassInfoModal
                                            handleClose={flipModalView}
                                            show={modalView}
                                            courseToEdit={classItem}
                                        />
                                    )}
                                    {/*<EditClassInfoModal
                                        handleClose={flipModalView}
                                        show={modalView}
                                        courseToEdit={classItem}
                                    />*/}
                                </td>
                                {/*<td>
                                    {classItem.schedule.day.join(", ")},{" "}
                                    {classItem.schedule.time}
                                </td>
                                <td>{classItem.location}</td>
                                <td>{classItem.instructor}</td>
                                    */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div>
                {" "}
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                        clearCourses(semester);
                    }}
                >
                    Clear Courses
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                        clearSemester(semester.id);
                    }}
                >
                    Clear Semester
                </button>
            </div>
        </div>
    );
}
