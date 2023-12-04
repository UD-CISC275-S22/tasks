import React, { useState, useEffect } from "react";
import { CoursePlan, SemesterI } from "./interfaces/semester";
import { Degree } from "./interfaces/degree";
import { Course } from "./interfaces/course";
import { Table } from "react-bootstrap";

interface DegreeRequirementCheckProps {
    currentDegree: Degree;
    currentPlan: CoursePlan;
}

export function DegreeRequirementCheck({
    currentDegree,
    currentPlan
}: DegreeRequirementCheckProps): JSX.Element {
    const [reqCheck, setReqCheck] = useState<boolean[]>([]);

    useEffect(() => {
        const coreRequirements = currentDegree.coreCourses;
        const requirements = [
            ...coreRequirements,
            ...currentDegree.generalRequirements
        ];

        let courses: Course[] = [];
        currentPlan.years.forEach((year) => {
            ["winter", "spring", "summer", "fall"].forEach((season) => {
                const semester = year[season as keyof typeof year] as
                    | SemesterI
                    | undefined;
                if (semester) {
                    courses = [...courses, ...semester.courses];
                }
            });
        });

        const newReqCheck = requirements.map((requirement) => {
            const count = courses.filter(
                (course) => course.ticker === requirement
            ).length;
            return count > 0;
        });

        setReqCheck(newReqCheck);
    }, [currentDegree, currentPlan]);

    return CreateTable({
        requirements: currentDegree.coreCourses.concat(
            currentDegree.generalRequirements
        ),
        checks: reqCheck
    });
}

interface CreateTableProps {
    requirements: string[];
    checks: boolean[];
}

function CreateTable({ requirements, checks }: CreateTableProps): JSX.Element {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colSpan={2}>Degree Requirements</th>
                </tr>
                <tr>
                    <th>Requirement</th>
                    <th>Fulfilled?</th>
                </tr>
            </thead>
            <tbody>
                {requirements.map((requirement, index) => {
                    const rowClass = checks[index]
                        ? "fulfilled"
                        : "not-fulfilled";
                    return (
                        <tr key={index} className={rowClass}>
                            <td>{requirement}</td>
                            <td>{checks[index] ? "Yes" : "No"}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}
