import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "☘️" | "🦃";

const NEXT_BY_ALPHABET: Record<Holiday, Holiday> = {
    "☘️": "🎄",
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "☘️",
};

const NEXT_BY_YEAR: Record<Holiday, Holiday> = {
    "☘️": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "☘️",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(NEXT_BY_ALPHABET[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(NEXT_BY_YEAR[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
