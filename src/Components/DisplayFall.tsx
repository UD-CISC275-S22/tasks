/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Course } from "../Interfaces/course";
import { ClearSemester } from "./clearingSemester";
import { displayCourse } from "./course";
import { DropAdd } from "./dropAdd";
import { Semester } from "../Interfaces/semester";

export interface valueProps {
    semesters: Semester[];
    setSemesters: (expression: Semester[]) => void;
    targetSem: string;
    setTargetSem: (expression: string) => void;
    currCourse: string;
    setCurrCourse: (expression: string) => void;
    clicked: boolean;
    setClicked: (expression: boolean) => void;
    targetYear: number;
    dropClass(): void;
    addClass(): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    clearSemesterCourses(): void;
    handleClose(): void;
    handleShow(): void;
    index(): number;
}

// function to display ONLY the fall semester
export function DisplayFall({
    semesters,
    setSemesters,
    targetSem,
    setTargetSem,
    currCourse,
    setCurrCourse,
    clicked,
    setClicked,
    targetYear,
    dropClass,
    addClass,
    updateCurrCourse,
    clearSemesterCourses,
    handleClose,
    handleShow,
    index
}: valueProps): JSX.Element {
    //setTargetSem("Fall");
    //an array of courses in the plan's semester (ex. fall of year 1)
    React.useEffect(() => {
        setTargetSem("Fall");
    }, [targetSem]);

    const idx = index();

    const fallCourses = semesters[idx].courseList;
    console.log("idx in Fall returned is");
    console.log(idx);

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
                            {/* {displayCourse(course)} */}
                        </span>
                    </div>
                )
            )}
            <div>
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
