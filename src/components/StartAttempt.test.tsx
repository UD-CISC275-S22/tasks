import React, { act } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { StartAttempt } from "./StartAttempt";

/***
 * Helper function to extract a number from an HTMLElement's textContent.
 *
 * If you aren't familiar with Regular Expressions:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
export function extractDigits(element: HTMLElement): number | null {
    const attemptNumberText = element.textContent || "";
    // We use a "regular expression" to find digits and extract them as text
    const attemptNumberDigitsMatched = attemptNumberText.match(/\d+/);
    // Provides a Matched Regular Expression or null
    if (attemptNumberDigitsMatched === null) {
        // Should never be possible, since then there was no number to have found.
        // But TypeScript is cautious and demands we provide SOMETHING.
        return null;
    } else {
        // Not null, get the first matched value and convert to number
        return parseInt(attemptNumberDigitsMatched[0]);
    }
}

describe("StartAttempt Component tests", () => {
    beforeEach(() => {
        render(<StartAttempt />);
    });
    afterEach(() => {
        cleanup();
    });
    test("(1 pts) The Number of attempts is displayed initially, without other numbers", () => {
        const attemptNumber = screen.getByText(/(\d+)/);
        expect(attemptNumber).toBeInTheDocument();
    });
    test("(1 pts) The Number of attempts is more than 0", () => {
        const attemptNumber = extractDigits(screen.getByText(/(\d+)/));
        expect(attemptNumber).toBeGreaterThan(0);
    });
    test("(1 pts) The Number of attempts is less than 10", () => {
        const attemptNumber = extractDigits(screen.getByText(/(\d+)/));
        expect(attemptNumber).toBeLessThan(10);
    });
    test("(1 pts) There is an initially enabled Start Quiz button", () => {
        const startButton = screen.getByRole("button", { name: /Start Quiz/i });
        expect(startButton).toBeInTheDocument();
        expect(startButton).toBeEnabled();
    });
    test("(1 pts) There is an initially disabled Stop Quiz button", () => {
        const stopButton = screen.getByRole("button", { name: /Stop Quiz/i });
        expect(stopButton).toBeInTheDocument();
        expect(stopButton).toBeDisabled();
    });
    test("(1 pts) There is an initially enabled Mulligan button", () => {
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        expect(mulliganButton).toBeInTheDocument();
        expect(mulliganButton).toBeEnabled();
    });
    test("(1 pts) Clicking Mulligan increases attempts", async () => {
        const attemptNumber: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        await act(async () => {
            mulliganButton.click();
        });
        const attemptNumberLater = extractDigits(screen.getByText(/(\d+)/));
        expect(attemptNumber + 1).toEqual(attemptNumberLater);
    });
    test("(1 pts) Clicking Mulligan twice increases attempts by two", async () => {
        const attemptNumber: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        await act(async () => {
            mulliganButton.click();
        });
        await act(async () => {
            mulliganButton.click();
        });
        const attemptNumberLater = extractDigits(screen.getByText(/(\d+)/));
        expect(attemptNumber + 2).toEqual(attemptNumberLater);
    });
    test("(1 pts) Clicking Start Quiz decreases attempts", async () => {
        const attemptNumber: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        const startButton = screen.getByRole("button", {
            name: /Start Quiz/i
        });
        await act(async () => {
            startButton.click();
        });
        const attemptNumberLater =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        expect(attemptNumber - 1).toEqual(attemptNumberLater);
    });
    test("(1 pts) Clicking Start Quiz changes enabled buttons", async () => {
        // Given the buttons...
        const startButton = screen.getByRole("button", {
            name: /Start Quiz/i
        });
        const stopButton = screen.getByRole("button", { name: /Stop Quiz/i });
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        // When the start button is clicked
        await act(async () => {
            startButton.click();
        });
        // Then the start is disabled, stop is enabled, and mulligan is disabled
        expect(startButton).toBeDisabled();
        expect(stopButton).toBeEnabled();
        expect(mulliganButton).toBeDisabled();
    });
    test("(1 pts) Clicking Start and Stop Quiz changes enabled buttons", async () => {
        // Given the buttons and initial attempt number...
        const startButton = screen.getByRole("button", {
            name: /Start Quiz/i
        });
        const stopButton = screen.getByRole("button", { name: /Stop Quiz/i });
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        // When we click the start button and then the stop button
        await act(async () => {
            startButton.click();
        });
        await act(async () => {
            stopButton.click();
        });
        // Then the start is enabled, stop is disabled, and mulligan is enabled
        expect(startButton).toBeEnabled();
        expect(stopButton).toBeDisabled();
        expect(mulliganButton).toBeEnabled();
    });
    test("(1 pts) Clicking Start, Stop, Mulligan sets attempts to original", async () => {
        // Given the buttons and initial attempt number...
        const startButton = screen.getByRole("button", {
            name: /Start Quiz/i
        });
        const stopButton = screen.getByRole("button", { name: /Stop Quiz/i });
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        const attemptNumber: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        // When we click the start button and then the stop button
        await act(async () => {
            startButton.click();
        });
        await act(async () => {
            stopButton.click();
        });
        // Then the attempt is decreased
        const attemptNumberLater: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        expect(attemptNumber - 1).toEqual(attemptNumberLater);
        // And when we click the mulligan button
        await act(async () => {
            mulliganButton.click();
        });
        // Then the attempt is increased back to starting value
        const attemptNumberLatest: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        expect(attemptNumber).toEqual(attemptNumberLatest);
    });
    test("(1 pts) Cannot click start quiz when out of attempts", async () => {
        // Given the buttons and initial attempt number...
        const startButton = screen.getByRole("button", {
            name: /Start Quiz/i
        });
        const stopButton = screen.getByRole("button", { name: /Stop Quiz/i });
        const mulliganButton = screen.getByRole("button", {
            name: /Mulligan/i
        });
        let attemptNumber = extractDigits(screen.getByText(/(\d+)/)) || 0;
        const initialAttempt = attemptNumber;
        // Arbitrary number of times to try clicking; assume we do not have more than that number of attempts.
        let maxAttempts = 10;
        // While there are still attempts apparently available...
        while (attemptNumber > 0) {
            // Then the buttons
            expect(startButton).toBeEnabled();
            expect(stopButton).toBeDisabled();
            expect(mulliganButton).toBeEnabled();
            // And when we Start and then immediately stop the quiz...
            await act(async () => {
                startButton.click();
            });
            await act(async () => {
                stopButton.click();
            });
            // Then the number is going down, and doesn't go past 0 somehow
            attemptNumber = extractDigits(screen.getByText(/(\d+)/)) || 0;
            expect(attemptNumber).toBeGreaterThanOrEqual(0);
            expect(attemptNumber).not.toEqual(initialAttempt);
            // And then the maximum number of attempts does not exceed 10
            maxAttempts -= 1;
            expect(maxAttempts).toBeGreaterThanOrEqual(0);
        }
        // Then the attempt is at zero
        expect(attemptNumber).toEqual(0);
        // And then the stop button is disabled, the start button is disabled, and mulligan is enabled
        expect(startButton).toBeDisabled();
        expect(stopButton).toBeDisabled();
        expect(mulliganButton).toBeEnabled();
        // And when we click the mulligan button
        await act(async () => {
            mulliganButton.click();
        });
        // Then the attempt is increased back to 1
        const attemptNumberLatest: number =
            extractDigits(screen.getByText(/(\d+)/)) || 0;
        expect(attemptNumberLatest).toEqual(1);
        // And the start button is reenabled
        expect(startButton).toBeEnabled();
        expect(stopButton).toBeDisabled();
        expect(mulliganButton).toBeEnabled();
    });
});
