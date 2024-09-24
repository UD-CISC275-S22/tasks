import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { ChangeType } from "./ChangeType";

describe("ChangeType Component tests", () => {
    beforeEach(() => {
        render(<ChangeType />);
    });
    test("(1 pts) The initial type is Short Answer", () => {
        // We use `getByText` because the text MUST be there
        const typeText = screen.getByText(/Short Answer/i);
        expect(typeText).toBeInTheDocument();
    });
    test("(1 pts) The initial type is not Multiple Choice", () => {
        // We use `queryByText` because the text might not be there
        const typeText = screen.queryByText(/Multiple Choice/i);
        expect(typeText).toBeNull();
    });

    test("(1 pts) There is a button labeled Change Type", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });

    test("(1 pts) Clicking the button changes the type.", async () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        await act(async () => {
            changeTypeButton.click();
        });
        // Should be Multiple Choice
        const typeTextMC = screen.getByText(/Multiple Choice/i);
        expect(typeTextMC).toBeInTheDocument();
        // Should NOT be Short Answer
        const typeTextSA = screen.queryByText(/Short Answer/i);
        expect(typeTextSA).toBeNull();
    });

    test("(1 pts) Clicking the button twice keeps the type the same.", async () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Change Type/i
        });
        await act(async () => {
            changeTypeButton.click();
        });
        await act(async () => {
            changeTypeButton.click();
        });
        // Should be Short Answer
        const typeTextSA = screen.getByText(/Short Answer/i);
        expect(typeTextSA).toBeInTheDocument();
        // Should NOT be Multiple Choice
        const typeTextMC = screen.queryByText(/Multiple Choice/i);
        expect(typeTextMC).toBeNull();
    });
});
