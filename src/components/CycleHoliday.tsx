import React, { useState } from "react";

const holidays = [
    { name: "Christmas", emoji: "🎄" },
    { name: "Easter", emoji: "🐰" },
    { name: "Halloween", emoji: "🎃" },
    { name: "New Year", emoji: "🎆" },
    { name: "Thanksgiving", emoji: "🦃" },
];
const alphabetOrder = holidays.map((holiday) => holiday.emoji).sort();
const yearOrder = [
    "🎆", // New Year
    "🐰", // Easter
    "🎃", // Halloween
    "🦃", // Thanksgiving
    "🎄", // Christmas
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<string>(
        holidays[0].emoji,
    );

    function getNextHoliday(current: string, order: string[]): string {
        const currentIndex = order.indexOf(current);
        const nextIndex = (currentIndex + 1) % order.length;
        return order[nextIndex];
    }
    function advanceAlphabetically(): void {
        setCurrentHoliday(getNextHoliday(currentHoliday, alphabetOrder));
    }

    function advanceByYear(): void {
        setCurrentHoliday(getNextHoliday(currentHoliday, yearOrder));
    }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <div>
                <button onClick={advanceAlphabetically}>
                    Advance by Alphabet
                </button>
                <button onClick={advanceByYear}>Advance by Year</button>
            </div>
        </div>
    );
}
