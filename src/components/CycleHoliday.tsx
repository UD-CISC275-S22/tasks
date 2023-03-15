import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "💖" | "☘️" | "🎃" | "🦃" | "🎁";

const HOLIDAY_TRANSITIONS_YEAR: Record<Holidays, Holidays> = {
    "💖": "☘️",
    "☘️": "🎃",
    "🎃": "🦃",
    "🦃": "🎁",
    "🎁": "💖"
};

const HOLIDAY_TRANSITIONS_ALPH: Record<Holidays, Holidays> = {
    "🎁": "🎃",
    "🎃": "☘️",
    "☘️": "🦃",
    "🦃": "💖",
    "💖": "🎁"
};

export function CycleHoliday(): JSX.Element {
    const [Holidays, setHoliday] = useState<Holidays>("💖");
    function holidayByYear(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_YEAR[Holidays];
        setHoliday(newHoliday);
    }
    function holidayByAlph(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_ALPH[Holidays];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>Holiday: {Holidays}</span>
            <div>
                <Button onClick={holidayByAlph}>Advance by Alphabet</Button>
                <Button onClick={holidayByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
