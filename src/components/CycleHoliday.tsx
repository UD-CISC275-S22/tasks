import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type HolidayType =
    | "Christmas"
    | "Thanksgiving"
    | "New Years Day"
    | "Fourth of July"
    | "Halloween";

const nextHolidayDate: Record<HolidayType, HolidayType> = {
    "New Years Day": "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "New Years Day"
};

const nextHolidayABC: Record<HolidayType, HolidayType> = {
    Christmas: "Fourth of July",
    "Fourth of July": "Halloween",
    Halloween: "New Years Day",
    "New Years Day": "Thanksgiving",
    Thanksgiving: "Christmas"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayType>("Christmas");

    function changeHolidayDate(): void {
        const newHoliday = nextHolidayDate[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayAlpha(): void {
        const newHoliday = nextHolidayABC[holiday];
        setHoliday(newHoliday);
    }

    function setHolidayEmoji(holidayType: HolidayType): string {
        let emojiString = "";
        if (holidayType === "Christmas") {
            emojiString = "🎅";
        } else if (holidayType === "Thanksgiving") {
            emojiString = "🦃";
        } else if (holidayType === "New Years Day") {
            emojiString = "🎆";
        } else if (holidayType === "Fourth of July") {
            emojiString = "🦅";
        } else {
            emojiString = "🎃";
        }
        return emojiString;
    }

    return (
        <div>
            <h1>Cycle Holiday</h1>
            <div>
                <span> Holiday: {setHolidayEmoji(holiday)} </span>
            </div>
            <Button onClick={() => changeHolidayAlpha()}>
                <div>Advance by Alphabet</div>
            </Button>
            <Button onClick={() => changeHolidayDate()}>Advance by Year</Button>
        </div>
    );
}
