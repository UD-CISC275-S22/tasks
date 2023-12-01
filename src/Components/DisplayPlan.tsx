/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { blankCourse } from "./plan";

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
    const firstYearWinter = indivPlanSem(1, "Winter", 2);
    const firstYearSpring = indivPlanSem(1, "Spring", 3);
    const firstYearSummer = indivPlanSem(1, "Summer", 4);

    const secondYearFall = indivPlanSem(2, "Fall", 5);
    const secondYearWinter = indivPlanSem(2, "Winter", 6);
    const secondYearSpring = indivPlanSem(2, "Spring", 7);
    const secondYearSummer = indivPlanSem(2, "Summer", 8);

    const thirdYearFall = indivPlanSem(3, "Fall", 9);
    const thirdYearWinter = indivPlanSem(3, "Winter", 10);
    const thirdYearSpring = indivPlanSem(3, "Spring", 11);
    const thirdYearSummer = indivPlanSem(3, "Summer", 12);

    const fourthYearFall = indivPlanSem(4, "Fall", 13);
    const fourthYearWinter = indivPlanSem(4, "Winter", 14);
    const fourthYearSpring = indivPlanSem(4, "Spring", 15);

    //these next ones are extra semesters in case someone needs them but will not display
    const fourthYearSummer = indivPlanSem(4, "Summer", 16);
    const fifthYearFall = indivPlanSem(5, "Fall", 17);
    const fifthYearWinter = indivPlanSem(5, "Winter", 18);
    const fifthYearSpring = indivPlanSem(5, "Spring", 19);

    //for toggling which semesters they want to see
    const blankSem: Semester = {
        type: [""],
        year: {} as number,
        totalCredits: {} as number,
        courseList: [blankCourse]
    };

    const [selectedYear1, setSelectedYear1] = useState<string[]>([""]);

    const toggleYear1 = (option: string, index: number) => {
        if (selectedYear1.includes(option)) {
            setSelectedYear1(selectedYear1.filter((item) => item !== option));
        } else {
            setSelectedYear1([...selectedYear1, option]);
        }
    };

    const year = ["Fall", "Winter", "Spring", "Summer"];

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle id="dropdown1">Select Options</Dropdown.Toggle>
                <Dropdown.Menu>
                    {year.map((option, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => toggleYear1(option, index)}
                            active={selectedYear1.includes(option)}
                        >
                            {option}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <div className="Semester">
                {selectedYear1.includes("Fall") && firstYearFall}
                {firstYearWinter}
                {firstYearSpring}
                {firstYearSummer}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {secondYearFall}
                {secondYearWinter}
                {secondYearSpring}
                {secondYearSummer}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {thirdYearFall}
                {thirdYearWinter}
                {thirdYearSpring}
                {thirdYearSummer}
            </div>
            <Button onClick={changeSemCount}>Show One Semester</Button>
            <Button onClick={changeSemester}>Show Different Semester</Button>
            <div className="Semester">
                {fourthYearFall}
                {fourthYearWinter}
                {fourthYearSpring}
                {fourthYearWinter}
            </div>
        </div>
    );
}
