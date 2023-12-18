import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SeeAuditPage } from "./SeeAuditPage";
import { semester } from "../Interface/semester";
import { classes } from "../Interface/classes";
//Used Chat GPT to generate basic tests for component
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

describe("SeeAuditPage component", () => {
    const mockProps = {
        canView: true,
        reqList: ["Requirement1", "Requirement2"],
        plan: semesterExample,
        prevUsedClasses: [[]],
        creditList: [6, 7],
        major: "basic test",
        resetCurrList: jest.fn(),
        stopView: jest.fn()
    };

    test("renders component with provided props", () => {
        const { getByText, getByLabelText } = render(
            <SeeAuditPage {...mockProps} />
        );

        // Check if the component renders with the provided requirements
        expect(getByText("Requirement1")).toBeInTheDocument();
        expect(getByText("Requirement2")).toBeInTheDocument();

        // Check if the "Add Class" button is present
        const addButton = getByText("Add Class");
        expect(addButton).toBeInTheDocument();

        // Simulate clicking the "Add Class" button
        fireEvent.click(addButton);

        // Check if the modal appears
        const modalTitle = getByText("Choose Class to Fill Requirement");
        expect(modalTitle).toBeInTheDocument();

        // Simulate closing the modal
        fireEvent.click(getByLabelText("Close"));

        // Check if the "hide" button is present
        expect(getByText("hide")).toBeInTheDocument();
    });
});
