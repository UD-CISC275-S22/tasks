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

    const [displayCourseCategory, setDisplayCourseCategory] =
        useState<string>("AllCourses");

    //update the state of the dsiplay course categoery
    function updateDisplayCourseCat(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDisplayCourseCategory(event.target.value);
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

            <>
                <Form.Group controlId="currentCourse">
                    <Form.Label>Select Course Variety</Form.Label>
                    <Form.Check
                        type="radio"
                        name="displayCourse1"
                        onChange={updateDisplayCourseCat}
                        id="disp-course-all"
                        label="AllCourses"
                        value="AllCourses"
                        checked={displayCourseCategory === "AllCourses"}
                    />
                    <Form.Check
                        type="radio"
                        name="displayCourse2"
                        onChange={updateDisplayCourseCat}
                        id="disp-course-free"
                        label="FreeElective"
                        value="FreeElective"
                        checked={displayCourseCategory === "FreeElective"}
                    />
                    <Form.Check
                        type="radio"
                        name="displayCourse3"
                        onChange={updateDisplayCourseCat}
                        id="disp-course-restricted"
                        label="RestrictiveElective"
                        value="RestrictiveElective"
                        checked={
                            displayCourseCategory === "RestrictiveElective"
                        }
                    />
                    <Form.Label>Select A Course</Form.Label>
                </Form.Group>
            </>
        </div>
    );
}
