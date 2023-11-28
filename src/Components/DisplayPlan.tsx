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
    