import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holidays =
        | "New Years: 🍷"
        | "Valentine: ❤️"
        | "Halloween: 🎃"
        | "Thanksgiving: 🦃"
        | "Christmas: 🌲";

    const HOLIDAY_TRANSITIONS_YEAR: Record<Holidays, Holidays> = {
        "New Years: 🍷": "Valentine: ❤️",
        "Valentine: ❤️": "Halloween: 🎃",
        "Halloween: 🎃": "Thanksgiving: 🦃",
        "Thanksgiving: 🦃": "Christmas: 🌲",
        "Christmas: 🌲": "New Years: 🍷"
    };

    const HOLIDAY_TRANSITIONS_ALPHA: Record<Holidays, Holidays> = {
        "Christmas: 🌲": "Halloween: 🎃",
        "Halloween: 🎃": "New Years: 🍷",
        "New Years: 🍷": "Thanksgiving: 🦃",
        "Thanksgiving: 🦃": "Valentine: ❤️",
        "Valentine: ❤️": "Christmas: 🌲"
    };

    const [holiday, setHoliday] = useState<Holidays>("New Years: 🍷");
    const [driving, setDriving] = useState<boolean>(false);

    function changeHolidayYear(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_YEAR[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayAlpha(): void {
        const newHoliday = HOLIDAY_TRANSITIONS_ALPHA[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={changeHolidayAlpha}>Advance by Alphabet</Button>
            <Button onClick={changeHolidayYear}>Advance by Year</Button>
        </div>
    );
}
