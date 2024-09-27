import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

describe("RevealAnswer Component tests", () => {
    beforeEach(() => {
        render(<RevealAnswer />);
    });
    test("(1 pts) The answer '42' is not visible initially", () => {
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });
    test("(1 pts) There is a Reveal Answer button", () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        expect(revealButton).toBeInTheDocument();
    });
    test("(1 pts) Clicking Reveal Answer button reveals the '42'", async () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        await act(async () => {
            revealButton.click();
        });
        const answerText = screen.getByText(/42/);
        expect(answerText).toBeInTheDocument();
    });
    test("(1 pts) Clicking Reveal Answer button twice hides the '42'", async () => {
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i
        });
        await act(async () => {
            revealButton.click();
        });
        await act(async () => {
            revealButton.click();
        });
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });
});
