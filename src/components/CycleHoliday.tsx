import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("💘");

    const holidaysByDate: Record<string, string> = {
        "💘": "☘️",
        "☘️": "🤱",
        "🤱": "🎂",
        "🎂": "🎃",
        "🎃": "💘"
    };

    const holidaysByAlpha: Record<string, string> = {
        "🎂": "🎃",
        "🎃": "🤱",
        "🤱": "☘️",
        "☘️": "💘",
        "💘": "🎂"
    };

    function changeByDate(): void {
        const newHoliday = holidaysByDate[holiday];
        setHoliday(newHoliday);
    }

    function changeByAlpha(): void {
        const newHoliday = holidaysByAlpha[holiday];
        setHoliday(newHoliday);
    }

    return (
        <>
            <div>
                <Button onClick={changeByDate}>Advance by Year</Button>
            </div>
            <div>
                <Button onClick={changeByAlpha}>Advance by Alphabet</Button>
            </div>
            <div>Holiday: {holiday}</div>
        </>
    );
}
