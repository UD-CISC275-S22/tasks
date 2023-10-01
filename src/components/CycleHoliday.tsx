/* eslint-disable indent */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        "Dragon Boat Festival"
    );

    const advanceAlphabetically = () => {
        setCurrentHoliday(getNextHolidayAlphabetically(currentHoliday));
    };

    const advanceByYear = () => {
        setCurrentHoliday(getNextHolidayByYear(currentHoliday));
    };

    return (
        <div>
            <h1>Cycle Holidays</h1>
            <p>Holiday: {holidayEmojis[currentHoliday]}</p>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
type Holiday =
    | "Dragon Boat Festival"
    | "Halloween"
    | "Diwali"
    | "Christmas"
    | "Thanksgiving";

const holidayEmojis: Record<Holiday, string> = {
    "Dragon Boat Festival": "🎏",
    Halloween: "🎃",
    Diwali: "🪔",
    Christmas: "🎄",
    Thanksgiving: "🦃"
};

const holidaysInOrder: Holiday[] = [
    "Diwali",
    "Dragon Boat Festival",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

function getNextHolidayAlphabetically(current: Holiday): Holiday {
    const currentIndex = holidaysInOrder.indexOf(current);
    const nextIndex = (currentIndex + 1) % holidaysInOrder.length;
    return holidaysInOrder[nextIndex];
}
function getNextHolidayByYear(current: Holiday): Holiday {
    switch (current) {
        case "Dragon Boat Festival":
            return "Diwali";
        case "Diwali":
            return "Halloween";
        case "Halloween":
            return "Thanksgiving";
        case "Thanksgiving":
            return "Christmas";
        case "Christmas":
            return "Dragon Boat Festival";
        default:
            return current;
    }
}
