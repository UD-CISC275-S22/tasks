import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "❄️" | "🦃" | "🎄" | "🇺🇸" | "🪖";

const NEXT_HOLIDAY_1: Record<Holiday, Holiday> = {
    "🎄": "🇺🇸",
    "🇺🇸": "🪖",
    "🪖": "❄️",
    "❄️": "🦃",
    "🦃": "🎄"
};
const NEXT_HOLIDAY_2: Record<Holiday, Holiday> = {
    "❄️": "🪖",
    "🪖": "🇺🇸",
    "🇺🇸": "🦃",
    "🦃": "🎄",
    "🎄": "❄️"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🦃");

    function alphabetically(): void {
        const nextHoliday = NEXT_HOLIDAY_1[holiday];
        setHoliday(nextHoliday);
    }

    function yearly(): void {
        const nextHoliday = NEXT_HOLIDAY_2[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={alphabetically}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={yearly}>Advance by Year</Button>
            </div>
        </div>
    );
}
