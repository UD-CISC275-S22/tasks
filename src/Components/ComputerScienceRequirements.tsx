import React from "react";
//import { Class } from "../interfaces/class";
import { degreePlan } from "../interfaces/degreePlan";

interface ComputerScienceRequirementsProps {
    currentDegreePlan: degreePlan;
}

const ComputerScienceRequirements: React.FC<
    ComputerScienceRequirementsProps
> = ({ currentDegreePlan }) => {
    const cisCoreRequirements = [
        "CISC108",
        "CISC181",
        "CISC210",
        "CISC220",
        "CISC260"
    ];

    const capstoneRequirements = ["CISC498", "CISC499"] || [
        "UNIV401",
        "UNIV402"
    ];

    const isClassInDegreePlan = (courseCode: string): boolean => {
        let isInDegreePlan = false;
        currentDegreePlan.semesters.forEach((semester) => {
            semester.classes.forEach((course) => {
                if (course.courseCode === courseCode) {
                    isInDegreePlan = true;
                }
            });
        });
        return isInDegreePlan;
    };

    const dropDown = (requirement: string[]) => (
        <select>
            {requirement.map((courseCode) => (
                <option
                    key={courseCode}
                    value={courseCode}
                    style={{
                        color: isClassInDegreePlan(courseCode)
                            ? "green"
                            : "black"
                    }}
                >
                    {courseCode}
                </option>
            ))}
        </select>
    );

    return (
        <div>
            <h2>Computer Science Degree Requirements</h2>
            <div>
                <p>CIS Core Requirements:</p>
                {dropDown(cisCoreRequirements)}
            </div>
            <div>
                <p>Capstone Requirements:</p>
                {dropDown(capstoneRequirements)}
            </div>
        </div>
    );
};

export default ComputerScienceRequirements;
