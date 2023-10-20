import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "Dragon Boat Festival", emoji: "🎏" },
        { name: "Diwali", emoji: "🪔" },
        { name: "Halloween", emoji: "🎃" },
        { name: "Christmas", emoji: "🎄" },
        { name: "New Year's Day", emoji: "🎉" }
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    const getNextHolidayAlphabetically = () => {
        const newIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(newIndex);
    };

    const getHolidayByYear = () => {
        const newIndex = (currentHolidayIndex + 1) % holidays.length;
        setCurrentHolidayIndex(newIndex);
    };

    const currentHoliday = holidays[currentHolidayIndex];

    return (
        <div>
            <p> Current Holiday: {currentHoliday.emoji}</p>
            <Button onClick={getNextHolidayAlphabetically}>
                {" "}
                Next Holiday
            </Button>
            <Button onClick={getHolidayByYear}> Previous Holiday</Button>
        </div>
    );
}
