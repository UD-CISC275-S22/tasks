// Semester.tsx
import React, { useState } from "react";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

function Semester({
    semester,
    deleteSemester
}: {
    semester: Semester;
    deleteSemester: (semesterID: number) => void;
}) {
    const [newCourse, setNewCourse] = useState<Course>({
        title: "",
        courseCode: -1,
        credits: 0,
        degreeRequirements: [""],
        coursePrereq: [""],
        courseCoreq: [""],
        courseDescription: ""
    });

    const addCourse = () => {
        // Add the course to the semester
        // You can implement this logic here
    };

    return (
        <li>
            {semester.id}. {semester.title}
            <ul>
                {/*eslint-disable-next-line no-extra-parens*/}
                {semester.courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCourse.courseCode}
                    onChange={(e) =>
                        setNewCourse({
                            ...newCourse,
                            courseCode: Number(e.target.value)
                        })
                    }
                    placeholder="Course Code"
                />
                <input
                    type="text"
                    value={newCourse.title}
                    onChange={(e) =>
                        setNewCourse({ ...newCourse, title: e.target.value })
                    }
                    placeholder="Course Title"
                />
                <input
                    type="number"
                    value={newCourse.credits}
                    onChange={(e) =>
                        setNewCourse({ ...newCourse, credits: +e.target.value })
                    }
                    placeholder="Credits"
                />
                <button onClick={addCourse}>Add Course</button>
                <button onClick={() => deleteSemester(semester.id)}>
                    Delete Semester
                </button>
            </div>
        </li>
    );
}

export default Semester;
