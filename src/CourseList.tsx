/* eslint-disable no-extra-parens */
import React from "react";
import { Course } from "./interfaces/Course";

interface CourseListProps {
    courses: Course[];
    onCourseSelected: (selectedCourse: Course) => void;
}

const CourseList: React.FC<CourseListProps> = ({
    courses,
    onCourseSelected
}) => {
    const handleItemClick = (course: Course) => {
        onCourseSelected(course);
    };
    return (
        <div>
            <h2>Course Catalog</h2>
            <strong>
                To add a course, click on the course you want to add.
            </strong>
            <ul>
                {courses.map(course => (
                    <li
                        key={course.code}
                        onClick={() => handleItemClick(course)}
                    >
                        {course.code} - {course.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
