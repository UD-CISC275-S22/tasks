/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    Thanksgiving = "🦃",
    NewYear = "🎉",
    Easter = "🐰"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );

    const getNextHolidayAlphabetically = (current: Holiday): Holiday => {
        const holidaysArray = Object.keys(Holiday) as Holiday[];
        const currentIndex = holidaysArray.indexOf(current);
        const nextIndex = (currentIndex + 1) % holidaysArray.length;
        return holidaysArray[nextIndex];
    };

    const getNextHolidayInYear = (current: Holiday): Holiday => {
        switch (current) {
            case Holiday.NewYear:
                return Holiday.Easter;
            case Holiday.Easter:
                return Holiday.Halloween;
            case Holiday.Halloween:
                return Holiday.Thanksgiving;
            case Holiday.Thanksgiving:
                return Holiday.Christmas;
            case Holiday.Christmas:
                return Holiday.NewYear;
            default:
                return Holiday.Christmas;
        }
    };

    return (
        <div>
            {/* Render current holiday */}
            <p>Holiday: {currentHoliday}</p>
            {/* Button to advance alphabetically */}
            <Button
                onClick={() =>
                    setCurrentHoliday(
                        getNextHolidayAlphabetically(currentHoliday)
                    )
                }
            >
                Advance by Alphabet
            </Button>
            {/* Button to advance by year */}
            <Button
                onClick={() =>
                    setCurrentHoliday(getNextHolidayInYear(currentHoliday))
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
