import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New_Years_Eve"
    | "Thanksgiving";

const ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "New_Years_Eve",
    New_Years_Eve: "Thanksgiving",
    Thanksgiving: "Christmas"
};

const DATE_TRANSITIONS: Record<Holiday, Holiday> = {
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New_Years_Eve",
    New_Years_Eve: "Easter"
};

const EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    New_Years_Eve: "🎉",
    Thanksgiving: "🦃"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function toEmoji(): string {
        const emoji = EMOJIS[holiday];
        return emoji;
    }

    function byAlphabetical(): void {
        const next = ALPHABET_TRANSITIONS[holiday];
        setHoliday(next);
    }

    function byYear(): void {
        const next = DATE_TRANSITIONS[holiday];
        setHoliday(next);
    }

    return (
        <span>
            <div>Holiday: {toEmoji()}</div>
            <div>
                <Button onClick={byAlphabetical}>Advance by Alphabet</Button>
                <Button onClick={byYear}>Advance by Year</Button>
            </div>
        </span>
    );
}
