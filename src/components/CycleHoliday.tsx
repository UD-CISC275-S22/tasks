import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holidays =
        | "Holiday: 🥮"
        | "Holiday: 🎃"
        | "Holiday: 🎏"
        | "Holiday: 🪔"
        | "Holiday: 🐲";
    const Year: Record<Holidays, Holidays> = {
        "Holiday: 🎏": "Holiday: 🥮",
        "Holiday: 🥮": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 🐲",
        "Holiday: 🐲": "Holiday: 🎏"
    };
    const Alphabet: Record<Holidays, Holidays> = {
        "Holiday: 🐲": "Holiday: 🪔",
        "Holiday: 🪔": "Holiday: 🎏",
        "Holiday: 🎏": "Holiday: 🥮",
        "Holiday: 🥮": "Holiday: 🎃",
        "Holiday: 🎃": "Holiday: 🐲"
    };
    const [holiday, setHoliday] = useState<Holidays>("Holiday: 🥮");
    function switchinAlphabet(): void {
        const newAlphabet = Alphabet[holiday];
        setHoliday(newAlphabet);
    }
    function switchinYear(): void {
        const newYear = Year[holiday];
        setHoliday(newYear);
    }
    return (
        <div>
            <span>{holiday}</span>
            <div>
                <Button onClick={switchinAlphabet}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={switchinYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
