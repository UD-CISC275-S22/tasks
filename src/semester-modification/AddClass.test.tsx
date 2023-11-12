import { semester } from "../Interface/semester";
import { AddClass } from "./AddClass";
import React from "react";
import { render, screen } from "@testing-library/react";

const base: semester[] = [
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

let planHolder = base;
let currentSemester = base[0];

function updatedSchedule(updatedSchedule: semester[]): void {
    planHolder = updatedSchedule;
}

describe("AddClass Component tests", () => {
    beforeEach(() => {
        // Reset the base state before each test
        currentSemester = base[0];
        planHolder = base;
    });

    test("Button says Add Class", () => {
        render(
            <AddClass
                schedule={planHolder}
                semester={currentSemester}
                newClass={{
                    code: "ACCT208",
                    title: "Accounting II",
                    credits: 3,
                    preReq: ["ACCT207", " ACCT207"]
                }}
                onAddClass={updatedSchedule}
            />
        );
        const valueText = screen.getByRole("button", { name: /Add Class/i });
        expect(valueText).toBeInTheDocument();
    });

    test("Button adds class to semester", () => {
        render(
            <AddClass
                schedule={planHolder}
                semester={currentSemester}
                newClass={{
                    code: "ACCT208",
                    title: "Accounting II",
                    credits: 3,
                    preReq: ["ACCT207", " ACCT207"]
                }}
                onAddClass={updatedSchedule}
            />
        );
        const valueText = screen.getByRole("button", { name: /Add Class/i });
        valueText.click();
        expect(planHolder[0].classList).toContainEqual({
            code: "ACCT208",
            title: "Accounting II",
            credits: 3,
            preReq: ["ACCT207", " ACCT207"]
        });
        expect(planHolder[0].classList.length).toEqual(3);
    });

    test("Button adds class to second semester", () => {
        currentSemester = planHolder[1];
        render(
            <AddClass
                schedule={planHolder}
                semester={currentSemester}
                newClass={{
                    code: "ACCT208",
                    title: "Accounting II",
                    credits: 3,
                    preReq: ["ACCT207", " ACCT207"]
                }}
                onAddClass={updatedSchedule}
            />
        );
        const valueText = screen.getByRole("button", { name: /Add Class/i });
        valueText.click();
        expect(planHolder[1].classList).toContainEqual({
            code: "ACCT208",
            title: "Accounting II",
            credits: 3,
            preReq: ["ACCT207", " ACCT207"]
        });
        expect(planHolder[1].classList.length).toEqual(3);
    });
});
