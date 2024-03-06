import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    Thanksgiving = "🦃",
    NewYear = "🎉",
    Easter = "🐰"
}

const alphabeticallySortedHolidays: Holiday[] = [
    Holiday.Christmas,
    Holiday.Easter,
    Holiday.Halloween,
    Holiday.NewYear,
    Holiday.Thanksgiving
];

const yearSortedHolidays: Holiday[] = [
    Holiday.NewYear,
    Holiday.Easter,
    Holiday.Halloween,
    Holiday.Thanksgiving,
    Holiday.Christmas
];

export function CycleHoliday(): JSX.Element {
    // State variable to represent the current holiday
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);

    // Function to get the next holiday
    const getNextHoliday = (current: number, holidays: Holiday[]): number => {
        return (current + 1) % holidays.length;
    };

    return (
        <div>
            {/* Render current holiday */}
            <p>Holiday: {alphabeticallySortedHolidays[currentHolidayIndex]}</p>
            {/* Button to advance alphabetically */}
            <Button
                onClick={() =>
                    setCurrentHolidayIndex(
                        getNextHoliday(
                            currentHolidayIndex,
                            alphabeticallySortedHolidays
                        )
                    )
                }
            >
                Advance by Alphabet
            </Button>
            {/* Button to advance by year */}
            <Button
                onClick={() =>
                    setCurrentHolidayIndex(
                        getNextHoliday(currentHolidayIndex, yearSortedHolidays)
                    )
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
