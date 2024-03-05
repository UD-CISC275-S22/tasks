import React, { useState } from "react";
import { Button } from "react-bootstrap";
enum Holiday {
    DragonBoatFestival = "🎏",
    Halloween = "🎃",
    Diwali = "🪔",
    Christmas = "🎄",
    NewYears = "🎉"
}
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.DragonBoatFestival
    );
    const alphabeticallyOrderedHolidays: Holiday[] =
        Object.values(Holiday).sort();
    const advanceAlphabetically = () => {
        const currentIndex =
            alphabeticallyOrderedHolidays.indexOf(currentHoliday);
        const nextIndex =
            (currentIndex + 1) % alphabeticallyOrderedHolidays.length;
        setCurrentHoliday(alphabeticallyOrderedHolidays[nextIndex]);
    };
    const yearOrderedHolidays: Holiday[] = [
        Holiday.DragonBoatFestival,
        Holiday.Halloween,
        Holiday.Diwali,
        Holiday.Christmas,
        Holiday.NewYears
    ];
    const advanceByYear = () => {
        const currentIndex = yearOrderedHolidays.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % yearOrderedHolidays.length;
        setCurrentHoliday(yearOrderedHolidays[nextIndex]);
    };
    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
