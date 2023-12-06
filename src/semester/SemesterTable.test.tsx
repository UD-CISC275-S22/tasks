import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { render, screen } from "@testing-library/react";
import sample from "../data/data.json";
import { SemesterTable } from "./SemesterTable";

const semesterExamples = sample.map(
    (sem): semester => ({
        ...sem,
        classList: sem.classList.map(
            (c): classes => ({
                ...c
            })
        )
    })
);

const currentPlan = "dildo";

describe("SemesterTable", () => {
    beforeEach(() => {
        const mockSetSemesters = jest.fn();
        render(
            <SemesterTable
                semesters={semesterExamples}
                setSemesters={mockSetSemesters}
                currentPlan={currentPlan}
            />
        );
    });
    test("SemesterTable renders a heading to test to make sure it is properly rendering.", () => {
        screen.getByRole("heading", { name: "Semester Schedule" });
    });
    test("SemesterTable renders all the seasons, and classes for the file", () => {
        for (let i = 0; i < semesterExamples.length; i++) {
            expect(
                screen.queryByText(semesterExamples[i].season)
            ).toBeInTheDocument();
        }
    });
});
