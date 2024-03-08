import React, { useState } from "react";
import { Button } from "react-bootstrap";

const holidays = [
    { emoji: "🌸", name: "Cherry Blossom Festival", month: 4 }, // April
    { emoji: "🎆", name: "New Year's Eve", month: 1 }, // January
    { emoji: "🎃", name: "Halloween", month: 10 }, // October
    { emoji: "🎄", name: "Christmas", month: 12 }, // December
    { emoji: "🏖️", name: "Summer Solstice", month: 6 } // June
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    const nextAlphabetically = () => {
        const sortedByAlphabet = [...holidays].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const currentIndexInAlphabeticalOrder = sortedByAlphabet.findIndex(
            (_, index) =>
                sortedByAlphabet[index].emoji ===
                holidays[currentHolidayIndex].emoji
        );
        setCurrentHolidayIndex(
            holidays.indexOf(
                sortedByAlphabet[
                    (currentIndexInAlphabeticalOrder + 1) % holidays.length
                ]
            )
        );
    };

    const nextByYear = () => {
        const sortedByYear = [...holidays].sort((a, b) => a.month - b.month);
        const currentIndexInYearOrder = sortedByYear.findIndex(
            (_, index) =>
                sortedByYear[index].emoji ===
                holidays[currentHolidayIndex].emoji
        );
        setCurrentHolidayIndex(
            holidays.indexOf(
                sortedByYear[(currentIndexInYearOrder + 1) % holidays.length]
            )
        );
    };

    return (
        <div>
            <div>Holiday: {holidays[currentHolidayIndex].emoji}</div>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextByYear}>Advance by Year</Button>
        </div>
    );
}
