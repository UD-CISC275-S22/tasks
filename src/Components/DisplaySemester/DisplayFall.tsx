/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../../Interfaces/course";
import { ClearSemester } from "../Buttons/clearingSemester";
import { DropAdd } from "../Buttons/dropAdd";
import { Semester } from "../../Interfaces/semester";
import { courseList } from "../course";
import { Button, Form, Modal } from "react-bootstrap";
import { SkipSemester } from "../Buttons/SkipSemester";

export interface valueProps {
    semesters: Semester[];
    targetSem: string;
    currCourse: string;
    clicked: boolean;
    targetYear: number;
    fifthYearClicked: boolean;
    dropClass(targetYear: number, targetSem: string): void;
    addClass(targetYear: number, targetSem: string): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    //clearSemesterCourses(idx: number): void;
    skipSemester(targetYear: number, targetSem: string): void;
    handleClose(): void;
    handleShow(): void;
    handleFifthShow(): void;
    handleFifthClose(): void;
    index(targetYear: number, targetSem: string): number;
}

// function to display ONLY the fall semester
export function DisplayFall({
    semesters,
    targetSem,
    currCourse,
    clicked,
    targetYear,
    fifthYearClicked,
    dropClass,
    addClass,
    updateCurrCourse,
    //clearSemesterCourses,
    skipSemester,
    handleClose,
    handleShow,
    handleFifthClose,
    handleFifthShow,
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
                <DropAdd
                    dropClass={dropClass}
                    addClass={addClass}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    updateCurrCourse={updateCurrCourse}
                    currCourse={currCourse}
                    Course_List={courseList}
                ></DropAdd>
                <SkipSemester
                    skipSemester={skipSemester}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    fifthYearClicked={fifthYearClicked}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                ></SkipSemester>
            </>
        </div>
    );
}
