// Semester.tsx
import React, { useState } from "react";
import Course from "./Course";

function Semester({ semester, deleteSemester }) {
    const [newCourse, setNewCourse] = useState<Course>({
        code: "",
        title: "",
        credits: 0
    });

    const addCourse = () => {
        // Add the course to the semester
        // You can implement this logic here
    };

    return (
        <li>
            {semester.id}. {semester.name}
            <ul>
                {semester.courses.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={newCourse.code}
                    onChange={(e) =>
                        setNewCourse({ ...newCourse, code: e.target.value })
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
