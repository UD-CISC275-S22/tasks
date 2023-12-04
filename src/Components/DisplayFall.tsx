/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
import { Semester } from "../Interfaces/semester";
import { Form } from "react-bootstrap";
import CourseEdit from "./CourseEdit";

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
    editedCourse: Course | null;
    handleSaveChanges(editedCourse: Course): void;
    handleResetToDefault(editedCourse: Course): void;
    handleEditClose(): void;
    handleEditShow(course: Course | undefined): void;
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
    index,
    editedCourse,
    handleSaveChanges,
    handleResetToDefault,
    handleEditClose,
    handleEditShow
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
                (course: Course, index: number): JSX.Element => (
                    <div className="Course" key={index}>
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
                    <DropAdd
                        dropClass={dropClass}
                        addClass={addClass}
                        updateCurrCourse={updateCurrCourse}
                        currCourse={currCourse}
                        Course_List={fallCourses}
                        handleEditShow={handleEditShow}
                    ></DropAdd>
                    <ClearSemester
                        clearSemesterCourses={clearSemesterCourses}
                        show={clicked}
                        handleClose={handleClose}
                        handleShow={handleShow}
                    ></ClearSemester>
                    {/* CourseEdit modal */}
                    {editedCourse && (
                        <CourseEdit
                            editedCourse={editedCourse}
                            onSaveChanges={handleSaveChanges}
                            onResetToDefault={handleResetToDefault}
                            onClose={handleEditClose}
                        />
                    )}
                </Form.Group>
            </>
        </div>
    );
}
