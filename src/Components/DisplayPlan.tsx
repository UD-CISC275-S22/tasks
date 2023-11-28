/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

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
    targetYear: number;
    setTargetYear: (expression: number) => void;
    /*
    dropClass(): void;
    addClass(): void;
    updateCurrCourse(event: React.ChangeEvent<HTMLSelectElement>): void;
    clearSemesterCourses(): void;
    handleClose(): void;
    handleShow(): void;
    index(): number;
    */
    displayBoth(): JSX.Element;
}

export function DisplayPlan({
    setTargetYear,
    displayBoth
}: valueProps): JSX.Element {
    setTargetYear(1);
    const firstYear = displayBoth();
    setTargetYear(2);
    const secondYear = displayBoth();
    setTargetYear(3);
    const thirdYear = displayBoth();
    setTargetYear(4);
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
