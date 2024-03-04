import React, { useState } from "react";
import { Button } from "react-bootstrap";
type holiday = "🎏" | "🎃" | "🎅" | "🌏" | "👷‍♀️";
const holiday_transition: Record<holiday, holiday> = {
    "🎅": "🎏",
    "🎏": "🎃",
    "🎃": "👷‍♀️",
    "👷‍♀️": "🌏",
    "🌏": "🎅"
};
const holiday_order: Record<holiday, holiday> = {
    "🌏": "🎏",
    "🎏": "👷‍♀️",
    "👷‍♀️": "🎃",
    "🎃": "🎅",
    "🎅": "🌏"
};

export function CycleHoliday(): JSX.Element {
    const [Holiday, setHoliday] = useState<holiday>("🎏");

    function nextHoliday_a(): void {
        const newHoliday = holiday_transition[Holiday];
        setHoliday(newHoliday);
    }
    function nextHoliday_d(): void {
        const newHoliday = holiday_order[Holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            Cycle Holiday
            <div>Holiday: {Holiday}</div>
            <Button onClick={nextHoliday_a}>Alphabet</Button>
            <Button onClick={nextHoliday_d}>Year</Button>
        </div>
    );
}
