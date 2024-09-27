import React, { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { GiveAttempts } from "./GiveAttempts";
import userEvent from "@testing-library/user-event";

describe("GiveAttempts Component tests", () => {
    beforeEach(() => {
        render(<GiveAttempts />);
    });

    test("(2 pts) There is a number entry box and two buttons", () => {
        expect(screen.getByRole("spinbutton")).toBeInTheDocument();
        expect(screen.getAllByRole("button")).toHaveLength(2);
    });

    test("(2 pts) There is are initially 3 attempts", () => {
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });

    test("(2 pts) You can use attempts", async () => {
        const use = screen.getByRole("button", { name: /use/i });
        await act(async () => {
            use.click();
        });
        expect(screen.getByText(/2/i)).toBeInTheDocument();
        await act(async () => {
            use.click();
        });
        await act(async () => {
            use.click();
        });
        expect(screen.getByText(/0/i)).toBeInTheDocument();
        expect(use).toBeDisabled();
    });
    test("(2 pts) You can gain arbitrary attempts", async () => {
        const gain = screen.getByRole("button", { name: /gain/i });
        const amountToGive = screen.getByRole("spinbutton");
        await act(async () => {
            userEvent.type(amountToGive, "10");
        });
        await act(async () => {
            gain.click();
        });
        expect(screen.getByText(/13/i)).toBeInTheDocument();
        await act(async () => {
            userEvent.type(amountToGive, "100");
        });
        await act(async () => {
            gain.click();
        });
        expect(screen.getByText(/113/i)).toBeInTheDocument();
    });
    test("(2 pts) Cannot gain blank amounts", async () => {
        const gain = screen.getByRole("button", { name: /gain/i });
        const amountToGive = screen.getByRole("spinbutton");
        await act(async () => {
            fireEvent.change(amountToGive, { target: { value: "" } });
        });
        await act(async () => {
            gain.click();
        });
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
});
