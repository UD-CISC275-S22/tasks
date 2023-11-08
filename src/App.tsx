import React, { useState } from "react";

type Course = {
    code: string;
    title: string;
    credits: number;
};

type Semester = {
    id: number;
    name: string;
    courses: Course[];
};

export function App() {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [newSemester, setNewSemester] = useState<string>("");
    const [newCourse, setNewCourse] = useState<Course>({
        code: "",
        title: "",
        credits: 0
    });

    const addSemester = () => {
        if (newSemester) {
            const newSemesterObj: Semester = {
                id: semesters.length + 1,
                name: newSemester,
                courses: []
            };
            setSemesters([...semesters, newSemesterObj]);
            setNewSemester("");
        }
    };

    const addCourse = (semesterId: number) => {
        if (newCourse.code && newCourse.title && newCourse.credits > 0) {
            setSemesters((prevSemesters) =>
                prevSemesters.map((semester) =>
                    semester.id === semesterId
                        ? {
                              ...semester,
                              courses: [...semester.courses, newCourse]
                          }
                        : semester
                )
            );
            setNewCourse({ code: "", title: "", credits: 0 });
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

    return (
        <div>
            <h1>Semester Tracker</h1>
            <div>
                <input
                    type="text"
                    value={newSemester}
                    onChange={(e) => setNewSemester(e.target.value)}
                    placeholder="Add a semester"
                />
                <button onClick={addSemester}>Add Semester</button>
            </div>
            <ul>
                {semesters.map((semester) => (
                    <li key={semester.id}>
                        {semester.id}. {semester.name}
                        <ul>
                            {semester.courses.map((course, courseIndex) => (
                                <li key={courseIndex}>
                                    Course Code: {course.code}
                                    <br />
                                    Course Title: {course.title}
                                    <br />
                                    Credits: {course.credits}
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
                                </li>
                            ))}
                        </ul>
                        <input
                            type="text"
                            value={newCourse.code}
                            onChange={(e) =>
                                setNewCourse({
                                    ...newCourse,
                                    code: e.target.value
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
                        <button onClick={() => addCourse(semester.id)}>
                            Add Course
                        </button>
                        <button onClick={() => deleteSemester(semester.id)}>
                            Delete Semester
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
