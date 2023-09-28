import React, { useState } from "react";
import { Button } from "react-bootstrap";
enum Holiday {
    Thanksgiving = "🦃",
    Christmas = "🎄",
    Halloween = "🎃",
    NewYear = "🎉",
    IndependenceDay = "🇺🇸"
}
export function CycleHoliday(): JSX.Element {
    const holidaysInAlphabeticalOrder: Holiday[] =
        Object.values(Holiday).sort();
    const holidaysByYear: Holiday[] = [
        Holiday.NewYear,
        Holiday.IndependenceDay,
        Holiday.Halloween,
        Holiday.Christmas,
        Holiday.Thanksgiving
    ];

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Christmas
    );

    const advanceByAlphabet = () => {
        const currentIndex =
            holidaysInAlphabeticalOrder.indexOf(currentHoliday);
        const nextIndex =
            (currentIndex + 1) % holidaysInAlphabeticalOrder.length;
        setCurrentHoliday(holidaysInAlphabeticalOrder[nextIndex]);
    };
    const advanceByYear = () => {
        const currentIndex = holidaysByYear.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysByYear.length;
        setCurrentHoliday(holidaysByYear[nextIndex]);
    };
    return (
        <div>
            <h2>Cycle Holiday</h2>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
