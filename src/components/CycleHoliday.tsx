import React, { useState } from "react";
import { Button } from "react-bootstrap";
const holidays = [
    "Dragon Boat Festival",
    "Halloween",
    "Diwali",
    "Mid Autumn",
    "Tet"
];

export function CycleHoliday(): JSX.Element {
    const [currentHolidayIndex, setCurrentHolidayIndex] = useState(0);
    const nextHolidayAlphabetically = () => {
        setCurrentHolidayIndex((prevIndex) =>
            prevIndex === holidays.length - 1 ? 0 : prevIndex + 1
        );
    };
    const nextHolidayByYear = () => {
        setCurrentHolidayIndex((prevIndex) =>
            prevIndex === holidays.length - 1 ? 0 : prevIndex + 1
        );
    };
    const currentHoliday = holidays[currentHolidayIndex];
    return (
        <div>
            <span>Holiday: {currentHoliday}</span>
            <br />
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
        </div>
    );
}
