import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RevealAnswer } from "./RevealAnswer";

describe("RevealAnswer Component tests", () => {
    test("(1 pts) The answer '42' is not visible initially", () => {
        render(<RevealAnswer />);
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });

    test("(1 pts) There is a Reveal Answer button", () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        expect(revealButton).toBeInTheDocument();
    });

    test("(1 pts) Clicking Reveal Answer button reveals the '42'", () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        fireEvent.click(revealButton);
        const answerText = screen.getByText(/42/);
        expect(answerText).toBeInTheDocument();
    });

    test("(1 pts) Clicking Reveal Answer button twice hides the '42'", () => {
        render(<RevealAnswer />);
        const revealButton = screen.getByRole("button", {
            name: /Reveal Answer/i,
        });
        fireEvent.click(revealButton); // First click
        fireEvent.click(revealButton); // Second click
        const answerText = screen.queryByText(/42/);
        expect(answerText).toBeNull();
    });
});
