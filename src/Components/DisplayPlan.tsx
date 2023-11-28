/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Semester } from "../Interfaces/semester";
import { Button } from "react-bootstrap";

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
    indivPlanSem(year: number, sem: string, id: number): JSX.Element;
    SemCount: number;
    SemesterType: string;
    changeSemCount(): void;
    changeSemester(): void;
}

export function DisplayPlan({
    indivPlanSem,
    SemCount,
    SemesterType,
    changeSemCount,
    changeSemester
}: valueProps): JSX.Element {
    const firstYearFall = indivPlanSem(1, "Fall", 1);
    const firstYearSpring = indivPlanSem(1, "Spring", 2);
    const secondYearFall = indivPlanSem(2, "Fall", 3);
    const secondYearSpring = indivPlanSem(2, "Spring", 4);
    const thirdYearFall = indivPlanSem(3, "Fall", 5);
    const thirdYearSpring = indivPlanSem(3, "Spring", 6);
    const fourthYearFall = indivPlanSem(4, "Fall", 7);
    const fourthYearSpring = indivPlanSem(4, "Spring", 8);

    return (
        <div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {firstYearFall}
                {firstYearSpring}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {secondYearFall}
                {secondYearSpring}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {thirdYearFall}
                {thirdYearSpring}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {fourthYearFall}
                {fourthYearSpring}
            </div>
        </div>
    );
}
