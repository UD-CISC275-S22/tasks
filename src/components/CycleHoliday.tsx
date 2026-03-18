import React from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "❤️";

const ALPHABET_NEXT: Record<Holiday, Holiday> = {
    "❤️": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🦃",
    "🦃": "❤️",
};

const YEAR_NEXT: Record<Holiday, Holiday> = {
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "❤️",
    "❤️": "🎆",
};

export function CycleHoliday(): React.ReactElement {
    const [holiday, setHoliday] = React.useState<Holiday>("🎃");

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    setHoliday(ALPHABET_NEXT[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(YEAR_NEXT[holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
