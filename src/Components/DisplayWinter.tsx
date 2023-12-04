/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
import { Semester } from "../Interfaces/semester";
import { courseList } from "./course";

export interface valueProps {
    semesters: Semester[];
    targetSem: string;
    currCourse: string;
    clicked: boolean;
    targetYear: number;
    dropClass(targetYear: number, targetSem: string): void;
    addClass(targetYear: number, targetSem: string): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    clearSemesterCourses(targetYear: number, targetSem: string): void;
    handleClose(): void;
    handleShow(): void;
    index(targetYear: number, targetSem: string): number;
}

// function to display ONLY the fall semester
export function DisplayWinter({
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
    const winterCourses = semesters[idx].courseList;

    return (
        <div className="Winter">
            <h1>Winter Year {targetYear}</h1>
            {winterCourses.map(
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
            <div>
                <DropAdd
                    dropClass={dropClass}
                    addClass={addClass}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    updateCurrCourse={updateCurrCourse}
                    currCourse={currCourse}
                    Course_List={courseList}
                ></DropAdd>
                <ClearSemester
                    clearSemesterCourses={clearSemesterCourses}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    show={clicked}
                    handleClose={handleClose}
                    handleShow={handleShow}
                ></ClearSemester>
            </div>
        </div>
    );
}
