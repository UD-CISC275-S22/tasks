/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable needed in order for code to work porperly
import React, { useState } from "react";
import { Course } from "../../Interfaces/course";
import { DropAdd } from "../Buttons/dropAdd";
import { Semester } from "../../Interfaces/semester";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { SkipSemester } from "../Buttons/SkipSemester";
import CourseEdit from "../CourseEdit";

//displays the fall semesters
export interface valueProps {
    semesters: Semester[];
    courseList: Course[];
    targetSem: string;
    currCourse: number;
    clicked: boolean;
    targetYear: number;
    fifthYearClicked: boolean;
    containsPrereq: boolean;
    dropClass: (targetYear: number, targetSem: string) => void;
    addClass: (targetYear: number, targetSem: string) => void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    skipSemester(targetYear: number, targetSem: string): void;
    handleClose(): void;
    handleShow(): void;
    handleFifthShow(): void;
    handleFifthClose(): void;
    index(targetYear: number, targetSem: string): number;
    editedCourse: Course | null;
    handleSaveChanges(
        editedCourse: Course,
        targetYear: number,
        targetSem: string
    ): void;
    handleResetToDefault(editedCourse: Course): void;
    handleEditClose(): void;
    handleEditShow(course: Course | undefined): void;
}

// function to display ONLY the fall semester
export function DisplayFall({
    semesters,
    courseList,
    targetSem,
    currCourse,
    clicked,
    targetYear,
    fifthYearClicked,
    containsPrereq,
    dropClass,
    addClass,
    updateCurrCourse,
    skipSemester,
    handleClose,
    handleShow,
    handleFifthClose,
    handleFifthShow,
    index,
    editedCourse,
    handleSaveChanges,
    handleResetToDefault,
    handleEditClose,
    handleEditShow
}: valueProps): JSX.Element {
    const idx = index(targetYear, targetSem);
    const fallCourses = semesters[idx].courseList;
    console.log("fall courses: ", fallCourses);
    const creditsArray = fallCourses.map((course: Course) => course.credits);
    const totalCredits = creditsArray.reduce(
        (total: number, credVal: number) => total + credVal,
        0
    );

    const [displayCourseCategory, setDisplayCourseCategory] =
        useState<string>("AllCourses");

    //update the state of the display course category
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
                        <OverlayTrigger
                            key={course.id}
                            placement="right"
                            overlay={
                                <Tooltip id={`tooltip-${course.id}`}>
                                    {`Title: ${course.title}, Name: ${
                                        course.name
                                    }, Credits: ${
                                        course.credits
                                    }, Description: ${
                                        course.description
                                    }, Prerequisites: ${course.prereq.join(
                                        ", "
                                    )}`}
                                </Tooltip>
                            }
                        >
                            <span key={course.id}>
                                {course.title}
                                {" - "}
                                {course.name}
                            </span>
                        </OverlayTrigger>
                    </div>
                )
            )}
            <>
                <div>Total Credits: {totalCredits}</div>
                <DropAdd
                    dropClass={dropClass}
                    addClass={addClass}
                    targetYear={targetYear}
                    containsPrereq={containsPrereq}
                    handleEditShow={handleEditShow}
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
                {/* CourseEdit modal */}
                {
                    //eslint-disable-next-line no-extra-parens
                    editedCourse && (
                        <CourseEdit
                            editedCourse={editedCourse}
                            onSaveChanges={handleSaveChanges}
                            targetYear={targetYear}
                            targetSem={targetSem}
                            onResetToDefault={handleResetToDefault}
                            onClose={handleEditClose}
                        />
                    )
                }
            </>
        </div>
    );
}
