import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { AddToSemester } from "./AddToSemester";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";

describe("AddToSemester", () => {
    const handleClose = jest.fn();
    const onAddClass = jest.fn();

    const classExamples: classes[] = [
        {
            code: "CISC181",
            title: "Introduction to Computer Science II",
            credits: 3,
            preReq: ["CISC108"]
        },
        {
            code: "CISC220",
            title: "Data Structures",
            credits: 3,
            preReq: ["CISC210"]
        }
    ];

    const semesterExample: semester[] = [
        {
            id: 1,
            fullTime: true,
            classList: classExamples,
            totalCredits: 6,
            season: "Fall 2023"
        }
    ];

    test("renders without errors", () => {
        render(
            <AddToSemester
                handleClose={handleClose}
                show={true}
                semesters={semesterExample}
                onAddClass={onAddClass}
                currentPlan="Computer Science"
            />
        );
    });

    test("calls handleClose when Close button is clicked", () => {
        const { getByText } = render(
            <AddToSemester
                handleClose={handleClose}
                show={true}
                semesters={semesterExample}
                onAddClass={onAddClass}
                currentPlan="Computer Science"
            />
        );

        fireEvent.click(getByText("Close"));
        expect(handleClose).toHaveBeenCalled();
    });

    test("calls onAddClass when AddClass button is clicked", () => {
        const { getByText } = render(
            <AddToSemester
                handleClose={handleClose}
                show={true}
                semesters={semesterExample}
                onAddClass={onAddClass}
                currentPlan="Computer Science"
            />
        );

        fireEvent.click(getByText("AddClass"));
        expect(onAddClass).toHaveBeenCalled();
    });
});
