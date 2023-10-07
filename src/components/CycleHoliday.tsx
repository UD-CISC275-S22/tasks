import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Holiday: 🎄"
    | "Holiday: 🎃"
    | "Holiday: 🇺🇸"
    | "Holiday: 🎆"
    | "Holiday: 🦃";

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    "Holiday: 🎄": "Holiday: 🎃",
    "Holiday: 🎃": "Holiday: 🇺🇸",
    "Holiday: 🇺🇸": "Holiday: 🎆",
    "Holiday: 🎆": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄"
};
const YEAR_TRANSITIONS: Record<Holiday, Holiday> = {
    "Holiday: 🎃": "Holiday: 🦃",
    "Holiday: 🦃": "Holiday: 🎄",
    "Holiday: 🎄": "Holiday: 🎆",
    "Holiday: 🎆": "Holiday: 🇺🇸",
    "Holiday: 🇺🇸": "Holiday: 🎃"
};

export function CycleHoliday(): JSX.Element {
    //alphabet: Christmas, Halloween, IndependenceDay, NewYears, ThanksGiving
    //next: Halloween, ThanksGiving, Christmas, newYears ,IndependenceDay
    const [holidayAlphabet, setHolidayAlphabet] =
        useState<Holiday>("Holiday: 🎄");
    const [holidayNext, setHolidayNext] = useState<Holiday>("Holiday: 🎃");

    function cycleAlphabet(): void {
        const newHAlpha = ALPHABET_TRANSITIONS[holidayAlphabet];
        setHolidayAlphabet(newHAlpha);
    }

    function cycleHolidayNext(): void {
        const newHYear = YEAR_TRANSITIONS[holidayNext];
        setHolidayNext(newHYear);
    }
    return (
        <div>
            {holidayAlphabet}
            <Button onClick={cycleAlphabet}>Advance By Alphabet</Button>
            {holidayNext}
            <Button onClick={cycleHolidayNext}>Advance By Year</Button>
        </div>
    );
}
