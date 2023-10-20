import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CycleHoliday } from "./CycleHoliday";

describe("CycleHoliday Component tests", () => {
    beforeEach(() => {
        render(<CycleHoliday />);
    });

    test("An initial holiday is displayed", () => {
        const initialHoliday = screen.getByText(/Current Holiday:/i);
        expect(initialHoliday).toBeInTheDocument();
    });

    test("There are two buttons", () => {
        const nextButton = screen.getByRole("button", {
            name: /Next Holiday/i
        });
        const previousButton = screen.getByRole("button", {
            name: /Previous Holiday/i
        });
        expect(nextButton).toBeInTheDocument();
        expect(previousButton).toBeInTheDocument();
    });

    test("Can cycle through 5 distinct holidays alphabetically", () => {
        const nextButton = screen.getByRole("button", {
            name: /Next Holiday/i
        });

        const holidays = [
            "Christmas",
            "Diwali",
            "Dragon Boat Festival",
            "Halloween",
            "New Year's Day"
        ];

        for (let i = 0; i < 5; i++) {
            nextButton.click();
            const currentHolidayText = screen.getByText(
                /Current Holiday: (.*)/i
            ).textContent;
            expect(currentHolidayText).toContain(holidays[i]);
        }
    });

    test("Can cycle through 5 distinct holidays in reverse order", () => {
        const previousButton = screen.getByRole("button", {
            name: /Previous Holiday/i
        });

        const holidays = [
            "New Year's Day",
            "Halloween",
            "Dragon Boat Festival",
            "Diwali",
            "Christmas"
        ];

        for (let i = 0; i < 5; i++) {
            previousButton.click();
            const currentHolidayText = screen.getByText(
                /Current Holiday: (.*)/i
            ).textContent;
            expect(currentHolidayText).toContain(holidays[i]);
        }
    });
});
