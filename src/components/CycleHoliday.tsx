import React, { useState } from "react";
import { Button } from "react-bootstrap";

type HolidayName =
    | "NewYear"
    | "Valentines"
    | "Halloween"
    | "Christmas"
    | "Independence";

const holidays: Record<HolidayName, string> = {
    NewYear: "🎆",
    Valentines: "❤️",
    Halloween: "🎃",
    Christmas: "🎄",
    Independence: "🎇"
};

const orderByYear: HolidayName[] = [
    "NewYear",
    "Valentines",
    "Independence",
    "Halloween",
    "Christmas"
];
const alphabeticalOrder: HolidayName[] = [
    "Christmas",
    "Halloween",
    "Independence",
    "NewYear",
    "Valentines"
];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayName>("NewYear");

    const nextByYear = () => {
        const currentIndex = orderByYear.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % orderByYear.length;
        setHoliday(orderByYear[nextIndex]);
    };
    const nextAlphabetically = () => {
        const currentIndex = alphabeticalOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % alphabeticalOrder.length;
        setHoliday(alphabeticalOrder[nextIndex]);
    };

    return (
        <div>
            <h3>Cycle Holiday</h3>
            <div>Holiday: {holidays[holiday]}</div>{" "}
            <Button onClick={nextByYear}>Advance by Year</Button>
            <Button onClick={nextAlphabetically}>Advance Alphabetically</Button>
        </div>
    );
}
