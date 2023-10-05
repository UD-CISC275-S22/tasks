import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday = "🎃" | "🎅" | "🍗" | "🎉" | "🕎";

const Date_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎉": "🎃",
    "🎃": "🍗",
    "🍗": "🕎",
    "🕎": "🎅",
    "🎅": "🎉"
};
const Alphabet_TRANSITIONS: Record<Holiday, Holiday> = {
    "🎅": "🎉",
    "🎉": "🕎",
    "🕎": "🎃",
    "🎃": "🍗",
    "🍗": "🎅"
};

export function CycleHoliday(): JSX.Element {
    const [current, next_Holiday] = useState<Holiday>("🎃");

    function Date(): void {
        const next = Date_TRANSITIONS[current];
        next_Holiday(next);
    }
    function Alphabet(): void {
        const next = Alphabet_TRANSITIONS[current];
        next_Holiday(next);
    }

    return (
        <div>
            <div>Holiday: {current}</div>
            <div>
                <Button onClick={() => Alphabet()}>Advance by Alphabet</Button>
                <Button onClick={() => Date()}>Advance by Year</Button>
            </div>
        </div>
    );
}
