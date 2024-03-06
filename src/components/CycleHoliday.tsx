import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Halloween = "🎃",
    NewYears = "🎆",
    Thanksgiving = "🦃",
    Easter = "🐣"
}

const alphabeticalOrder = [
    Holiday.Christmas,
    Holiday.Easter,
    Holiday.Halloween,
    Holiday.NewYears,
    Holiday.Thanksgiving
];

const yearlyOrder = [
    Holiday.NewYears,
    Holiday.Easter,
    Holiday.Thanksgiving,
    Holiday.Halloween,
    Holiday.Christmas
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.NewYears
    );

    function nextAlphabetical(holiday: Holiday): Holiday {
        const currentIndex = alphabeticalOrder.indexOf(holiday);
        return alphabeticalOrder[(currentIndex + 1) % alphabeticalOrder.length];
    }

    function nextInYear(holiday: Holiday): Holiday {
        const currentIndex = yearlyOrder.indexOf(holiday);
        return yearlyOrder[(currentIndex + 1) % yearlyOrder.length];
    }

    return (
        <div>
            <div>Cycle Holiday</div>
            <div>Holiday: {currentHoliday}</div>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextAlphabetical(currentHoliday))
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => setCurrentHoliday(nextInYear(currentHoliday))}
            >
                Advance by Year
            </Button>
        </div>
    );
}
