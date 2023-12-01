/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
import { Semester } from "../Interfaces/semester";
import { Form } from "react-bootstrap";

export interface valueProps {
    semesters: Semester[];
    targetSem: string;
    currCourse: string;
    clicked: boolean;
    targetYear: number;
    dropClass(): void;
    addClass(): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    clearSemesterCourses(): void;
    handleClose(): void;
    handleShow(): void;
    index(targetYear: number, targetSem: string): number;
}

// function to display ONLY the fall semester
export function DisplayFall({
    semesters,
    targetSem,
    currCourse,
    clicked,
    targetYear,
    dropClass,
    addClass,
    updateCurrCourse,
    clearSemesterCourses,
    handleClose,
    handleShow,
    index
}: valueProps): JSX.Element {
    //index now takes in two parameters (targetYear - this is NOT the state and it's already passed in from the Semester.tsx file)
    //targetSem is also NOT the state and it's already passed in from the Semester.tsx file. So both variables are already declared in the indivPlanSem function
    const idx = index(targetYear, targetSem);
    const fallCourses = semesters[idx].courseList;
    const [displayFallCourseCategory, setDisplayFallCourseCategory] =
        useState<string>("AllCourses");

    function updateDisplayFallCourseCat(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDisplayFallCourseCategory(event.target.value);
    }

    return (
        <div className="Fall">
            <h1>Fall Year {targetYear}</h1>
            {fallCourses.map(
                // eslint-disable-next-line no-extra-parens
                (course: Course): JSX.Element => (
                    <div className="Course" key={course.id}>
                        <span key={course.id}>
                            {course.title}
                            {" - "}
                            {course.name}
                        </span>
                    </div>
                )
            )}
            <div>
                <Form.Label>Select Course Variety</Form.Label>
                <Form.Check
                    type="radio"
                    name="displayCourseFall1"
                    onChange={updateDisplayFallCourseCat}
                    id="disp-course-all"
                    label="AllCourses"
                    value="AllCourses"
                    checked={displayFallCourseCategory === "AllCourses"}
                />
                <Form.Check
                    type="radio"
                    name="displayCourseFall2"
                    onChange={updateDisplayFallCourseCat}
                    id="disp-course-free"
                    label="FreeElective"
                    value="FreeElective"
                    checked={displayFallCourseCategory === "FreeElective"}
                />
                <Form.Check
                    type="radio"
                    name="displayCourseFall3"
                    onChange={updateDisplayFallCourseCat}
                    id="disp-course-restricted"
                    label="RestrictiveElective"
                    value="RestrictiveElective"
                    checked={
                        displayFallCourseCategory === "RestrictiveElective"
                    }
                />
                <DropAdd
                    dropClass={dropClass}
                    addClass={addClass}
                    updateCurrCourse={updateCurrCourse}
                    currCourse={currCourse}
                    Course_List={fallCourses}
                ></DropAdd>
                <ClearSemester
                    clearSemesterCourses={clearSemesterCourses}
                    show={clicked}
                    handleClose={handleClose}
                    handleShow={handleShow}
                ></ClearSemester>
            </div>
        </div>
    );
}
