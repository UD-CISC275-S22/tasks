import React, { useState } from "react";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

export function SemesterView({
    semester,
    clearSemester,
    setDragCourse,
    handleOnDrop,
    handleOnDragOver
}: {
    semester: semester;
    clearSemester: (id: number) => void;
    setDragCourse: (classes: classes) => void;
    handleOnDrop: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
    handleOnDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
}): JSX.Element {
    const [currentSemester, setSemester] = useState<semester>(semester);
    function clearCourses(semester: semester): void {
        setSemester({ ...semester, classList: [] });
    }
    const handleDragStart = (
        event: React.DragEvent<HTMLTableRowElement>,
        course: classes
    ) => {
        console.log("Enter");
        console.log(course);
        setDragCourse(course);
    };
    return (
        <div
            onDrop={(e) => handleOnDrop(e, currentSemester.id)}
            onDragOver={(e) => handleOnDragOver(e)}
        >
            <div>
                <h3>{currentSemester.season}</h3>
            </div>
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Title</th>
                        <th scope="col">Credits</th>
                        <th scope="col">Prerequisites</th>
                    </tr>
                </thead>
                <tbody>
                    {currentSemester.classList.map((classItem) => {
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
                        clearCourses(currentSemester);
                    }}
                >
                    Clear Courses
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => {
                        clearSemester(currentSemester.id);
                    }}
                >
                    Clear Semester
                </button>
            </div>
        </div>
    );
}
