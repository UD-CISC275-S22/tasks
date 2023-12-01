import React from "react";
import { CoursePlan, SemesterI } from "./interfaces/semester";
import { Degree } from "./interfaces/degree";
import { Course } from "./interfaces/course";
import { Table } from "react-bootstrap";
/*import coursePlanData from "./data/couresplans.json";
import degreeData from "./data/degrees.json";*/

export function degreeRequirementCheck(
    currentDegree: Degree,
    currentPlan: CoursePlan
): JSX.Element {
    const coreRequirements = currentDegree.coreCourses;

    const requirements = [
        ...coreRequirements,
        ...currentDegree.generalRequirements
    ];

    let courses: Course[] = [];
    for (let i = 0; i < currentPlan.years.length; i++) {
        if (currentPlan.years[i].winter) {
            const semester = currentPlan.years[i].winter as SemesterI;
            courses = [...courses, ...semester.courses];
        }
        if (currentPlan.years[i].spring) {
            const semester = currentPlan.years[i].spring as SemesterI;
            courses = [...courses, ...semester.courses];
        }
        if (currentPlan.years[i].summer) {
            const semester = currentPlan.years[i].summer as SemesterI;
            courses = [...courses, ...semester.courses];
        }
        if (currentPlan.years[i].fall) {
            const semester = currentPlan.years[i].fall as SemesterI;
            courses = [...courses, ...semester.courses];
        }
    }

    const reqCheck: boolean[] = [];
    for (const requirement of requirements) {
        let count = 0;
        for (const course of courses) {
            if (requirement === course.ticker) {
                count++;
            }
        }
        if (count > 0) {
            reqCheck.push(true);
        } else {
            reqCheck.push(false);
        }
    }

    return createTable(requirements, reqCheck);
}

export function createTable(
    requirements: string[],
    checks: boolean[]
): JSX.Element {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Requirement</th>
                    <th>Fulfilled?</th>
                </tr>
            </thead>
            <tbody>
                {requirements.map((requirement, index): JSX.Element => {
                    return (
                        <tr key={index}>
                            <td>{requirement}</td>
                            <td>{checks[index]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
