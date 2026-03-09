import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Define the Holiday type using emoji strings.
 */
type Holiday = "🎃" | "🎄" | "🎆" | "🦃" | "🎁";

/**
 * Transitions for Alphabetical order:
 * Christmas (C), Halloween (H), New Years (N), Present (P), Thanksgiving (T)
 * 🎄 -> 🎃 -> 🎆 -> 🎁 -> 🦃 -> 🎄
 */
const ALPHABETICAL: Record<Holiday, Holiday> = {
    "🎄": "🎃",
    "🎃": "🎆",
    "🎆": "🎁",
    "🎁": "🦃",
    "🦃": "🎄",
};

/**
 * Transitions for Yearly order (approximate dates):
 * New Years (Jan), Present (anytime), Halloween (Oct), Thanksgiving (Nov), Christmas (Dec)
 * 🎆 -> 🎁 -> 🎃 -> 🦃 -> 🎄 -> 🎆
 */
const BY_YEAR: Record<Holiday, Holiday> = {
    "🎆": "🎁",
    "🎁": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    // Using helper functions to keep the JSX clean
    function advanceAlphabet(): void {
        setHoliday(ALPHABETICAL[holiday]);
    }

    function advanceYear(): void {
        setHoliday(BY_YEAR[holiday]);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button
                onClick={() => {
                    advanceAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    advanceYear();
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
