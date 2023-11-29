/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export interface valueProps {
    //function below acts like the display both function except it returns either a DisplayFall or DisplaySpring component
    //it only returns one or the other to avoid rendering confusion of the site. The id parameter is for the key for the component (just an identifier)
    indivPlanSem(year: number, sem: string, id: number): JSX.Element;
    changeSemCount(): void;
    changeSemester(): void;
}

export function DisplayPlan({
    indivPlanSem,
    changeSemCount,
    changeSemester
}: valueProps): JSX.Element {
    //makes individual components of DisplayFall and DisplaySpring for each year
    //first number is the year, second is the type and the third is the key value for the component
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
