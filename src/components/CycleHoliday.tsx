import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidayEmoji = "🍀" | "🎆" | "🎃" | "🦃" | "🎄";

const ALPH_TRANS: Record<holidayEmoji, holidayEmoji> = {
    "🎄": "🎆",
    "🎆": "🎃",
    "🎃": "🍀",
    "🍀": "🦃",
    "🦃": "🎄"
};

const TIME_TRANS: Record<holidayEmoji, holidayEmoji> = {
    "🍀": "🎆",
    "🎆": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🍀"
};

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setCurrHoliday] = useState<holidayEmoji>("🎄");

    function changeByDate(): void {
        const newHol = TIME_TRANS[currHoliday];
        setCurrHoliday(newHol);
    }

    function changeByAlphabet(): void {
        const newHol = ALPH_TRANS[currHoliday];
        setCurrHoliday(newHol);
    }

    return (
        <div>
            <span>Holiday: {currHoliday}</span>
            <div>
                <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={changeByDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
