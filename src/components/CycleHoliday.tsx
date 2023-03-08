/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Alphabetic: 🎄🇺🇸🎃🍀🦃
// Date: 🍀🇺🇸🎃🦃🎄

type Holiday = "🎄" | "🦃" | "🎃" | "🇺🇸" | "🍀";

const ALPHABETIC_ORDER: Record<Holiday, Holiday> = {
    "🎄": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "🎄"
};

const YEAR_ORDER: Record<Holiday, Holiday> = {
    "🍀": "🇺🇸",
    "🇺🇸": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🍀"
};
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, changeHoliday] = useState<Holiday>("🎄");

    function changeAlphabetically(): void {
        const newHoliday = ALPHABETIC_ORDER[currentHoliday];
        changeHoliday(newHoliday);
    }
    function changeDatewise(): void {
        const newHoliday = YEAR_ORDER[currentHoliday];
        changeHoliday(newHoliday);
    }
    return (
        <div>
            <div>
                <Button onClick={changeAlphabetically}>Alphabet Order</Button>
                <Button onClick={changeDatewise}>Year Order</Button>
            </div>
            <div>Holiday: {currentHoliday}</div>
        </div>
    );
}
