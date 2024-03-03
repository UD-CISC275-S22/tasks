import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { EnumType } from "typescript";

type Holiday = "🦃" | "🎄" | "🐣" | "🎃" | "🪖";

const HolidayTime: Record<Holiday, Holiday> = {
    "🐣": "🪖",
    "🪖": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🐣"
};

const HolidayAlph: Record<Holiday, Holiday> = {
    "🎄": "🐣",
    "🐣": "🎃",
    "🎃": "🪖",
    "🪖": "🦃",
    "🦃": "🎄"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐣");
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={() => setHoliday(HolidayAlph[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(HolidayTime[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}
