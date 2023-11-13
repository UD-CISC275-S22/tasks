/* eslint-disable @typescript-eslint/no-unused-vars */

// I will remove linter later before submitting for final
import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddSemesterModal } from "./addSemesterModal";
import { classes } from "../Interface/classes";
import sample from "../data/data.json";
import { semester } from "../Interface/semester";

describe("FilteringSearchTests", () => {
    beforeEach(() => {
        render(
            <AddSemesterModal
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                show={false}
                semesterExamples={[]}
                addSemester={function (
                    id: number,
                    fullTime: boolean,
                    classList: classes[],
                    totalCredits: number,
                    season: string
                ): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });

    test("Buttons Present", () => {
        expect(screen.queryByLabelText("Done")).not.toBeInTheDocument();
        expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    test("Buttons Present", () => {
        expect(
            screen.queryByLabelText("Semester Name:")
        ).not.toBeInTheDocument();
        expect(screen.queryByLabelText("Course:")).not.toBeInTheDocument();
    });
});
