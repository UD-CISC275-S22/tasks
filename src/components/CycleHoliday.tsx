import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const byYear = [
        "Holiday: 🎃",
        "Holiday: 🎄",
        "Holiday: 🐇",
        "Holiday: 🦍",
        "Holiday: 🎆"
    ];
    const byAlphabet = [
        "Holiday: 🦍",
        "Holiday: 🎄",
        "Holiday: 🐇",
        "Holiday: 🎃",
        "Holiday: 🎆"
    ];
    const [holiday, setHoliday] = useState<string>(byYear[0]);

    function changeAlphabet(): void {
        const alphabetIndex = byAlphabet.findIndex(
            (day: string): boolean => day === holiday
        );
        setHoliday(byAlphabet[(alphabetIndex + 1) % 5]);
    }
    function changeYear(): void {
        const yearIndex = byYear.findIndex(
            (day: string): boolean => day === holiday
        );
        setHoliday(byYear[(yearIndex + 1) % 5]);
    }

    return (
        <div>
            <Button onClick={() => changeAlphabet()}>Cycle by Alphabet</Button>
            <Button onClick={() => changeYear()}>Cycle by Year</Button>
            <div>{holiday}</div>
        </div>
    );
}
