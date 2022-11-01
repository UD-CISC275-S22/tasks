import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "New Year's Day"
        | "Valentine's Day"
        | "Independence Day"
        | "Halloween"
        | "Christmas";

    const HOLIDAY_BY_YEAR: Record<Holiday, Holiday> = {
        "New Year's Day": "Valentine's Day",
        "Valentine's Day": "Independence Day",
        "Independence Day": "Halloween",
        Halloween: "Christmas",
        Christmas: "New Year's Day"
    };
    const HOLIDAY_BY_ALPHABET: Record<Holiday, Holiday> = {
        Christmas: "Halloween",
        Halloween: "Independence Day",
        "Independence Day": "New Year's Day",
        "New Year's Day": "Valentine's Day",
        "Valentine's Day": "Christmas"
    };

    const [Date, setDate] = useState<Holiday>("New Year's Day");

    function setEmoji(holiday: Holiday): string {
        let emoji = "";
        if (holiday === "New Year's Day") {
            emoji = "🎊";
        } else if (holiday === "Valentine's Day") {
            emoji = "💖";
        } else if (holiday === "Independence Day") {
            emoji = "🎆";
        } else if (holiday === "Halloween") {
            emoji = "🎃";
        } else {
            emoji = "🎄";
        }
        return emoji;
    }

    return (
        <div>
            <Button onClick={() => setDate(HOLIDAY_BY_ALPHABET[Date])}>
                Advance By Alphabet
            </Button>
            <Button onClick={() => setDate(HOLIDAY_BY_YEAR[Date])}>
                Advance By Year
            </Button>
            <br></br>
            <span>Current Holiday: {setEmoji(Date)}</span>
        </div>
    );
}
