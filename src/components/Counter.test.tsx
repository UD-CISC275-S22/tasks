import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter Component tests", () => {
    beforeEach(() => {
        render(<Counter />);
    });
    test("(1 pts) The initial value is 0", () => {
        // We use `getByText` because the text MUST be there
        const valueText = screen.getByText(/0/i);
        expect(valueText).toBeInTheDocument();
    });
    test("(1 pts) The initial value is not 1", () => {
        // We use `queryByText` because the text might not be there
        const valueText = screen.queryByText(/1/i);
        expect(valueText).toBeNull();
    });

    test("(1 pts) There is a button named Add One", () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        expect(addOneButton).toBeInTheDocument();
    });

    test("(1 pts) Clicking the button once adds one", async () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        await act(async () => {
            addOneButton.click();
        });
        const valueText = screen.getByText(/1/i);
        expect(valueText).toBeInTheDocument();
    });

    test("(1 pts) Clicking the button twice adds two", async () => {
        const addOneButton = screen.getByRole("button", { name: /Add One/i });
        await act(async () => {
            addOneButton.click();
        });
        await act(async () => {
            addOneButton.click();
        });
        const valueText = screen.getByText(/2/i);
        expect(valueText).toBeInTheDocument();
    });
});
