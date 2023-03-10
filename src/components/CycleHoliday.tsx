import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type HolidayType =
    | "Christmas"
    | "Thanksgiving"
    | "Birthday"
    | "Fourth of July"
    | "Veteran's Day";

const Next_Holiday_DATE: Record<HolidayType, HolidayType> = {
    "Veteran's Day": "Fourth of July",
    Birthday: "Thanksgiving",
    Thanksgiving: "Thanksgiving",
    "Fourth of July": "Christmas",
    Christmas: "Birthday"
};

const Next_Holiday_ALPHA: Record<HolidayType, HolidayType> = {
    Birthday: "Christmas",
    Christmas: "Fourth of July",
    "Fourth of July": "Thanksgiving",
    Thanksgiving: "Veteran's Day",
    "Veteran's Day": "Christmas"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<HolidayType>("Christmas");

    function changeHolidayAlpha(): void {
        const newHoliday = Next_Holiday_ALPHA[holiday];
        setHoliday(newHoliday);
    }

    function changeHolidayDate(): void {
        const newHoliday = Next_Holiday_DATE[holiday];
        setHoliday(newHoliday);
    }

    function setHolidayEmoji(holidayType: HolidayType): string {
        let emojiString = "";
        if (holidayType === "Christmas") {
            emojiString = "🎅";
        } else if (holidayType === "Thanksgiving") {
            emojiString = "🦃";
        } else if (holidayType === "Birthday") {
            emojiString = "🎊";
        } else if (holidayType === "Fourth of July") {
            emojiString = "🇺🇸";
        } else {
            emojiString = "🪖";
        }
        return emojiString;
    }

    return (
        <div>
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
