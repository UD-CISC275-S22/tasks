import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Holiday: 🎃"
        | "Holiday: 🎏"
        | "Holiday: 🪔"
        | "Holiday: 🎁"
        | "Holiday: 🏮";

    const byAlphabet: Record<Holiday, Holiday> = {
        "Holiday: 🎏": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🏮",
        "Holiday: 🏮": "Holiday: 🎁",
        "Holiday: 🎁": "Holiday: 🎏"
    };

    const byyear: Record<Holiday, Holiday> = {
        "Holiday: 🏮": "Holiday: 🎏",
        "Holiday: 🎏": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🎁",
        "Holiday: 🎁": "Holiday: 🏮"
    };

    const [holiday, setholiday] = useState<Holiday>("Holiday: 🎃");
    function changebyAlphabet(): void {
        const newbyAlphabet = byAlphabet[holiday];
        setholiday(newbyAlphabet);
    }
    function changebyYear(): void {
        const newbyYear = byyear[holiday];
        setholiday(newbyYear);
    }

    return (
        <div>
            <div>
                <Button onClick={changebyAlphabet}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={changebyYear}>Advance by Year</Button>
            </div>
            <div>{holiday}</div>
        </div>
    );
}
