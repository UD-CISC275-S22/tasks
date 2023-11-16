/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Class } from "../interfaces/class";
import QuickAdd from "./QuickAdd";
import SlowAdd from "./SlowAdd";
import DeleteCourse from "./DeleteCourses";

import { Button } from "react-bootstrap";

function EditCourses(): JSX.Element {
    const [courses, setCourses] = useState<Class[]>([]);
    const [editCourseCode, setEditCourseCode] = useState<string | null>(null);

    const handleCourseInfo = (courseInfo: Class) => {
        if (editCourseCode) {
            // Edit existing course
            setCourses((prevCourses) =>
                prevCourses.map((course) =>
                    course.courseCode === editCourseCode
                        ? { ...courseInfo }
                        : course
                )
            );
            setEditCourseCode(null);
        } else {
            // Add new course here
            setCourses([...courses, courseInfo]);
        }
    };

    const handleDeleteCourse = (courseCode: string) => {
        setCourses(
            courses.filter((course) => course.courseCode !== courseCode)
        );
        setEditCourseCode(null);
    };

    const handleEditCourse = (courseCode: string) => {
        setEditCourseCode(courseCode);
        //pre-filling the form with existing course data
    };

    return (
        <div>
            <SlowAdd onCourseInfo={handleCourseInfo} />
            <QuickAdd onCourseInfo={handleCourseInfo} />
            <DeleteCourse onDeleteCourse={handleDeleteCourse} />

            {/* course components here */}
            <h2>Courses</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.courseCode}>
                        {course.courseTitle} - {course.courseCode}
                        <Button
                            onClick={() => handleEditCourse(course.courseCode)}
                        >
                            Edit
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default EditCourses;
