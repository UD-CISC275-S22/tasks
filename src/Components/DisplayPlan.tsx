/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Semester } from "../Interfaces/semester";
import { blankCourse } from "./Plans/plan";
import { useSessionStorage } from "./useSessionStorage";

export interface valueProps {
    //function below acts like the display both function except it returns either a DisplayFall or DisplaySpring component
    //it only returns one or the other to avoid rendering confusion of the site. The id parameter is for the key for the component (just an identifier)
    indivPlanSem(year: number, sem: string, id: number): JSX.Element;
    fifthYear: boolean;
}

export function DisplayPlan({
    indivPlanSem,
    fifthYear
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
    const fourthYearSummer = indivPlanSem(4, "Summer", 16);

    //these next ones are extra semesters in case someone needs them but will not display
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
    const [selectedYear2, setSelectedYear2] = useState<string[]>([""]);
    const [selectedYear3, setSelectedYear3] = useState<string[]>([""]);
    const [selectedYear4, setSelectedYear4] = useState<string[]>([""]);
    const [selectedYear5, setSelectedYear5] = useState<string[]>([""]);

    const toggleYear1 = (option: string, index: number) => {
        if (selectedYear1.includes(option)) {
            setSelectedYear1(selectedYear1.filter((item) => item !== option));
        } else {
            setSelectedYear1([...selectedYear1, option]);
        }
    };

    const toggleYear2 = (option: string, index: number) => {
        if (selectedYear2.includes(option)) {
            setSelectedYear2(selectedYear2.filter((item) => item !== option));
        } else {
            setSelectedYear2([...selectedYear2, option]);
        }
    };

    const toggleYear3 = (option: string, index: number) => {
        if (selectedYear3.includes(option)) {
            setSelectedYear3(selectedYear3.filter((item) => item !== option));
        } else {
            setSelectedYear3([...selectedYear3, option]);
        }
    };

    const toggleYear4 = (option: string, index: number) => {
        if (selectedYear4.includes(option)) {
            setSelectedYear4(selectedYear4.filter((item) => item !== option));
        } else {
            setSelectedYear4([...selectedYear4, option]);
        }
    };

    const toggleYear5 = (option: string, index: number) => {
        if (selectedYear5.includes(option)) {
            setSelectedYear5(selectedYear5.filter((item) => item !== option));
        } else {
            setSelectedYear5([...selectedYear5, option]);
        }
    };

    const year = ["Fall", "Winter", "Spring", "Summer"];

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown4"
                    style={{
                        backgroundColor: "#71B48D",
                        borderColor: "#1d442d",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    View Year 1 Semesters:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line no-extra-parens
                        year.map((option, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => toggleYear1(option, index)}
                                active={selectedYear1.includes(option)}
                            >
                                {option}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <div className="Semester">
                {selectedYear1.includes("Fall") && firstYearFall}
                {selectedYear1.includes("Winter") && firstYearWinter}
                {selectedYear1.includes("Spring") && firstYearSpring}
                {selectedYear1.includes("Summer") && firstYearSummer}
            </div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown5"
                    style={{
                        backgroundColor: "#71B48D",
                        borderColor: "#1d442d",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    View Year 2 Semesters:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line no-extra-parens
                        year.map((option, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => toggleYear2(option, index)}
                                active={selectedYear2.includes(option)}
                            >
                                {option}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <div className="Semester">
                {selectedYear2.includes("Fall") && secondYearFall}
                {selectedYear2.includes("Winter") && secondYearWinter}
                {selectedYear2.includes("Spring") && secondYearSpring}
                {selectedYear2.includes("Summer") && secondYearSummer}
            </div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown6"
                    style={{
                        backgroundColor: "#71B48D",
                        borderColor: "#1d442d",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    View Year 3 Semesters:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line no-extra-parens
                        year.map((option, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => toggleYear3(option, index)}
                                active={selectedYear3.includes(option)}
                            >
                                {option}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <div className="Semester">
                {selectedYear3.includes("Fall") && thirdYearFall}
                {selectedYear3.includes("Winter") && thirdYearWinter}
                {selectedYear3.includes("Spring") && thirdYearSpring}
                {selectedYear3.includes("Summer") && thirdYearSummer}
            </div>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown7"
                    style={{
                        backgroundColor: "#71B48D",
                        borderColor: "#1d442d",
                        marginLeft: "5px",
                        marginRight: "5px",
                        marginTop: "5px",
                        marginBottom: "5px",
                        color: "black"
                    }}
                >
                    View Year 4 Semesters:
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {
                        // eslint-disable-next-line no-extra-parens
                        year.map((option, index) => (
                            <Dropdown.Item
                                key={index}
                                onClick={() => toggleYear4(option, index)}
                                active={selectedYear4.includes(option)}
                            >
                                {option}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
            <div className="Semester">
                {selectedYear4.includes("Fall") && fourthYearFall}
                {selectedYear4.includes("Winter") && fourthYearWinter}
                {selectedYear4.includes("Spring") && fourthYearSpring}
                {selectedYear4.includes("Summer") && fourthYearSummer}
            </div>
            {
                //eslint-disable-next-line no-extra-parens
                fifthYear && (
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle
                                id="dropdown7"
                                style={{
                                    backgroundColor: "#71B48D",
                                    borderColor: "#1d442d",
                                    marginLeft: "5px",
                                    marginRight: "5px",
                                    marginTop: "5px",
                                    marginBottom: "5px",
                                    color: "black"
                                }}
                            >
                                View Year 5 Semesters:
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {
                                    // eslint-disable-next-line no-extra-parens
                                    year.map((option, index) => (
                                        <Dropdown.Item
                                            key={index}
                                            onClick={() =>
                                                toggleYear5(option, index)
                                            }
                                            active={selectedYear5.includes(
                                                option
                                            )}
                                        >
                                            {option}
                                        </Dropdown.Item>
                                    ))
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="Semester">
                            {selectedYear5.includes("Fall") && fifthYearFall}
                            {selectedYear5.includes("Winter") &&
                                fifthYearWinter}
                            {selectedYear5.includes("Spring") &&
                                fifthYearSpring}
                        </div>
                    </div>
                )
            }
        </div>
    );
}
