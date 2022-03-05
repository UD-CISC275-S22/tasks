import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*
    Holidays (by date):
    🎊 - New Year's Day
    💘 - Valentines Day
    🍀 - St. Patrick's Day
    🇺🇸 - Fourth of July
    🦃 - Thanksgiving

    Holidays (alphabetical):
    🇺🇸 - Fourth of July
    🎊 - New Year's Day
    🍀 - St. Patrick's Day
    🦃 - Thanksgiving
    💘 - Valentines Day
*/
export type Holiday = "💘" | "🍀" | "🇺🇸" | "🦃" | "🎊";

export function CycleHoliday(): JSX.Element {
    const [currHoliday, setHoliday] = useState<Holiday>("🎊");
    const CHRON_TRANSITIONS: Record<Holiday, Holiday> = {
        "🎊": "💘",
        "💘": "🍀",
        "🍀": "🇺🇸",
        "🇺🇸": "🦃",
        "🦃": "🎊"
    };
    const ALPHA_TRANSITIONS: Record<Holiday, Holiday> = {
        "🇺🇸": "🎊",
        "🎊": "🍀",
        "🍀": "🦃",
        "🦃": "💘",
        "💘": "🇺🇸"
    };
    return (
        <div>
            <h3>Cycle Holiday</h3>
            <h5>Holiday: {currHoliday}</h5>
            <Button
                onClick={() => {
                    setHoliday(ALPHA_TRANSITIONS[currHoliday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(CHRON_TRANSITIONS[currHoliday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
