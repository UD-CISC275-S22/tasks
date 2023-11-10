import React from "react";
import { render, screen } from "@testing-library/react";
import { AddClass } from "./AddClass";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

const plan: semester[] = [
    {
        id: 1,
        fullTime: true,
        classList: [
            {
                code: "CISC108",
                title: "Introduction to Computer Science I",
                credits: 3,
                preReq: []
            },
            {
                code: "CISC181",
                title: "Introduction to Computer Science II",
                credits: 3,
                preReq: ["CISC108"]
            }
        ],
        totalCredits: 6,
        season: "Fall 2023"
    },
    {
        id: 2,
        fullTime: true,
        classList: [
            {
                code: "CISC210",
                title: "Introduction to Systems Programming",
                credits: 3,
                preReq: ["CISC108"]
            },
            {
                code: "CISC220",
                title: "Data Structures",
                credits: 3,
                preReq: ["CISC210"]
            }
        ],
        totalCredits: 6,
        season: "Spring 2023"
    },
    {
        id: 3,
        fullTime: true,
        classList: [
            {
                code: "CISC108",
                title: "Introduction to Computer Science I",
                credits: 3,
                preReq: []
            },
            {
                code: "CISC181",
                title: "Introduction to Computer Science II",
                credits: 3,
                preReq: ["CISC108"]
            }
        ],
        totalCredits: 6,
        season: "Winter 2023"
    }
];

const newClass: classes = {
    code: "ACCT166",
    title: "SPECIAL PROBLEM",
    credits: 3,
    preReq: ["No prerequisites."]
};
let currentSemester = plan[0];

function setCurrentSemester(newSem: semester): void {
    currentSemester = { ...newSem };
}
describe("AddClass Component tests", () => {
    beforeEach(() => {
        currentSemester = plan[0];
        render(
            <AddClass
                schedule={currentSemester}
                newClass={newClass}
                onAddClass={function (updatedSchedule: semester): void {
                    setCurrentSemester(updatedSchedule);
                }}
            />
        );
    });
    test("Button says Add Class", () => {
        // getByRole to tell if it's a button that shows up
        const valueText = screen.getByRole("button", { name: /Add Class/i });
        expect(valueText).toBeInTheDocument();
    });

    test("Button adds class to semester", () => {
        // Checks if the classlist now contains the new class
        const valueText = screen.getByRole("button", {
            name: /Add Class/i
        });
        valueText.click();
        expect(currentSemester.classList).toContain(newClass);
    });
});
