import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "🎄" | "🎃" | "🦃" | "🧧" | "🎇";
const alphabet_order: Record<Holidays, Holidays> = {
    "🎄": "🎃",
    "🎃": "🎇",
    "🎇": "🧧",
    "🧧": "🦃",
    "🦃": "🎄"
};
const yearly_order: Record<Holidays, Holidays> = {
    "🧧": "🎇",
    "🎇": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🧧"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");
    function changeHolidayAlphabet(): void {
        const newHoliday = alphabet_order[holiday as Holidays];
        setHoliday(newHoliday);
    }
    function changeHolidayYear(): void {
        const newHoliday = yearly_order[holiday as Holidays];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <Button onClick={changeHolidayAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
        </div>
    );
}
