import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎄" | "🎆" | "🎃" | "☘️" | "🦃";
const ALPHABET_ORDER: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "☘️",
    "☘️": "🦃",
    "🦃": "🎄"
};

const DATE_ORDER: Record<Holiday, Holiday> = {
    "☘️": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "☘️"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function changeAlphabet(): void {
        setHoliday(ALPHABET_ORDER[holiday]);
    }

    function changeDate(): void {
        setHoliday(DATE_ORDER[holiday]);
    }
    return (
        <div>
            Cycle Holiday
            <br />
            <p>Holiday: {holiday}</p>
            <Button onClick={changeAlphabet}>Change Alphabet</Button>
            <Button onClick={changeDate}>Change Year</Button>
        </div>
    );
}
