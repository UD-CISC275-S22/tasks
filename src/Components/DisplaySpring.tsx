/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { ClearSemester } from "./clearingSemester";
import { DropAdd } from "./dropAdd";
import { Semester } from "../Interfaces/semester";
import { Button, Form, Modal } from "react-bootstrap";
import { courseList } from "./course";
import { SkipSemester } from "./SkipSemester";

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
export function DisplaySpring({
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
    const springCourses = semesters[idx].courseList;

    const [displayCourseCategory, setDisplayCourseCategory] =
        useState<string>("AllCourses");

    //update the state of the dsiplay course categoery
    function updateDisplayCourseCat(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setDisplayCourseCategory(event.target.value);
    }

    return (
        <div className="Spring">
            <h1>Spring Year {targetYear}</h1>
            {springCourses.map(
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
                {/*
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
                    </Form.Group> */}
                <DropAdd
                    dropClass={dropClass}
                    addClass={addClass}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    updateCurrCourse={updateCurrCourse}
                    currCourse={currCourse}
                    Course_List={courseList}
                ></DropAdd>
                {/*
                <ClearSemester
                    key={idx}
                    clearSemesterCourses={clearSemesterCourses}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    show={clicked}
                    handleClose={handleClose}
                    handleShow={handleShow}
                    CourseLIST={courseList}
                ></ClearSemester> */}
                <SkipSemester
                    skipSemester={skipSemester}
                    targetYear={targetYear}
                    targetSem={targetSem}
                    fifthYearClicked={fifthYearClicked}
                    handleFifthShow={handleFifthShow}
                    handleFifthClose={handleFifthClose}
                ></SkipSemester>
            </div>
        </div>
    );
}
