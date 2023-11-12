import React, { useState } from "react";

interface Course {
    code: string;
    title: string;
    credits: number;
}

interface Semester {
    id: number;
    name: string;
    courses: Course[];
}

export function App() {
    const [semesters, setSemesters] = useState<Semester[]>([]);
    const [selectedSemester, setSelectedSemester] = useState<string>("Fall");
    const [newCourse, setNewCourse] = useState<Course>({
        code: "",
        title: "",
        credits: 0
    });

    const addSemester = () => {
        const newSemesterObj: Semester = {
            id: semesters.length + 1,
            name: selectedSemester,
            courses: []
        };
        setSemesters([...semesters, newSemesterObj]);
    };

    const addCourse = (semesterId: number) => {
        if (newCourse.code && newCourse.title && newCourse.credits > 0) {
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

    const semesterOptions = ["Fall", "Winter", "Spring", "Summer"];

    return (
        <div>
            <h1>Semester Tracker</h1>
            <div>
                <select
                    value={selectedSemester}
                    onChange={(e) => setSelectedSemester(e.target.value)}
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
                            Semester: {semester.name}
                            <button onClick={() => deleteSemester(semester.id)}>
                                Delete Semester
                            </button>
                        </div>
                        <div className="courses">
                            {semester.courses.map((course, courseIndex) => (
                                <div key={courseIndex} className="course">
                                    <span>
                                        Course Code: {course.code}
                                        <br />
                                        Course Title: {course.title}
                                        <br />
                                        Credits: {course.credits}
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
                            ))}
                        </div>
                        <div>
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
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
