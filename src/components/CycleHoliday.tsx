import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎏" | "🎃" | "🪔" | "🌲" | "🎄";

//type NextHolidayFunc = (currentHoliday: Holiday) => Holiday;

const nextHolidayInYear: Record<Holiday, Holiday> = {
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🌲",
    "🌲": "🎏"
};

const nextHolidayAlphabetically: Record<Holiday, Holiday> = {
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🌲",
    "🌲": "🎏"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🎏");

    const nextHolidayYear = (currentHoliday: Holiday) =>
        nextHolidayInYear[currentHoliday];

    const nextHolidayAlphabetical = (currentHoliday: Holiday) =>
        nextHolidayAlphabetically[currentHoliday];

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextHolidayAlphabetical(currentHoliday))
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextHolidayYear(currentHoliday))
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
