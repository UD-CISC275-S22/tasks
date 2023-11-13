import React from "react";
import { classes } from "../Interface/classes";
import { semester } from "../Interface/semester";
import { render } from "@testing-library/react";
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

describe("SemesterTable", () => {
    beforeEach(() => {
        const mockSetSemesters = jest.fn();
        render(
            <SemesterTable
                semesters={semesterExamples}
                setSemesters={mockSetSemesters}
            />
        );
    });
});
