import React from "react";
import "./App.css";
import SemesterCourses from "./SemesterCourses";

function App(): JSX.Element {
    const semesters = [
        {
            name: "Fall 2022",
            courses: [
                {
                    code: "CISC101",
                    name: "Introduction to Computer Science",
                    credits: 3
                },
                { code: "MATH201", name: "Calculus I", credits: 4 },
                { code: "ENGL101", name: "English Composition", credits: 3 }
            ],
            skip: true
        },
        {
            name: "Spring 2023",
            courses: [
                { code: "CISC201", name: "Data Structures", credits: 3 },
                { code: "MATH202", name: "Calculus II", credits: 4 },
                { code: "PHYS101", name: "Physics I", credits: 4 }
            ],
            skip: false
        }
        // Add more semesters and courses as needed
    ];

    return (
        <div>
            <p>
                Andrew Fonseca, Shrey Patel, Mann Patel, Thiago Vazquez, Devlan
                Horner
            </p>
            <SemesterCourses semesters={semesters} />
        </div>
    );
}

export default App;
