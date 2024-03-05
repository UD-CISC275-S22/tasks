import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Halloween = "🎃",
    Christmas = "🎄",
    Thanksgiving = "🦃",
    Easter = "🐰",
    ValentinesDay = "💘"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Halloween
    );

    const advanceByAlphabet = () => {
        const holidays = Object.values(Holiday);
        const currentIndex = holidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        setCurrentHoliday(holidays[nextIndex]);
    };

    const advanceByYear = () => {
        const holidaysInYearOrder: Holiday[] = [
            Holiday.Halloween,
            Holiday.Thanksgiving,
            Holiday.Christmas,
            Holiday.ValentinesDay,
            Holiday.Easter
        ];
        const currentIndex = holidaysInYearOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysInYearOrder.length;
        setCurrentHoliday(holidaysInYearOrder[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <button onClick={advanceByAlphabet}>Advance by Alphabet</button>
            <button onClick={advanceByYear}>Advance by Year</button>
        </div>
    );
}
