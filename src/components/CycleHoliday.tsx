import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holidays = "🌛" | "🐐" | "❄️" | "🎃" | "🦃";
    const HOLIDAY_TRANSITION: Record<Holidays, Holidays> = {
        "🌛": "🐐",
        "🐐": "🎃",
        "🎃": "🦃",
        "🦃": "❄️",
        "❄️": "🌛"
    };

    const HOLIDAY_TRANSITION_ALPHA: Record<Holidays, Holidays> = {
        "❄️": "🐐",
        "🐐": "🌛",
        "🌛": "🎃",
        "🎃": "🦃",
        "🦃": "❄️"
    };
    const [currHoliday, setHoliday] = useState<Holidays>("🌛");
    function holidayByTime() {
        const nextHoliday = HOLIDAY_TRANSITION[currHoliday];
        setHoliday(nextHoliday);
    }
    function holidayByAlpha() {
        const nextHoliday = HOLIDAY_TRANSITION_ALPHA[currHoliday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <Button onClick={holidayByAlpha}>Advance by Alphabet</Button>
            <Button onClick={holidayByTime}>Advance by Year</Button>
            <hr></hr>
            <span>Holiday: {currHoliday}</span>
        </div>
    );
}
