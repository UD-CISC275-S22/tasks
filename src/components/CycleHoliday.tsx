import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const ALPHAHOL: Record<string, string> = {
        "🎄": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🎉",
        "🎉": "☘️",
        "☘️": "🎄"
    };
    const DATEHOL: Record<string, string> = {
        "🎉": "☘️",
        "☘️": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🎄",
        "🎄": "🎉"
    };
    const [holiday, setHoliday] = useState<string>("🎉");
    function newAlphaHol(): void {
        const hol = ALPHAHOL[holiday];
        setHoliday(hol);
    }
    function newDateHol(): void {
        const hol = DATEHOL[holiday];
        setHoliday(hol);
    }
    return (
        <>
            <span>
                <Button onClick={newAlphaHol}>Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={newDateHol}>Advance by Year</Button>
            </span>
            <span>Holiday: {holiday}</span>
        </>
    );
}
