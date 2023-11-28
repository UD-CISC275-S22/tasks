/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Semester } from "../Interfaces/semester";

export interface valueProps {
    /*
    semesters: Semester[];
    setSemesters: (expression: Semester[]) => void;
    targetSem: string;
    setTargetSem: (expression: string) => void;
    currCourse: string;
    setCurrCourse: (expression: string) => void;
    clicked: boolean;
    setClicked: (expression: boolean) => void;
    */
    /*
    dropClass(): void;
    addClass(): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    clearSemesterCourses(): void;
    handleClose(): void;
    handleShow(): void;
    index(): number;
    */
    setTargetYear: (expression: number) => void;
    targetYear: number;
    displayBoth(): JSX.Element;
}

export function DisplayPlan({
    displayBoth,
    setTargetYear,
    targetYear
}: valueProps): JSX.Element {
    React.useEffect(() => {
        setTargetYear(1);
    });
    const firstYear = displayBoth();
    React.useEffect(() => {
        setTargetYear(2);
    });
    const secondYear = displayBoth();
    React.useEffect(() => {
        setTargetYear(3);
    });
    const thirdYear = displayBoth();
    React.useEffect(() => {
        setTargetYear(4);
    });
    const fourthYear = displayBoth();

    return (
        <div>
            {firstYear}
            {secondYear}
            {thirdYear}
            {fourthYear}
        </div>
    );
}
