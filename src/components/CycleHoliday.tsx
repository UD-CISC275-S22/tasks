import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type HolidayType =
        | "Christmas"
        | "Bastille Day"
        | "Epiphany"
        | "Chandeleur"
        | "Thanksgiving";
    const [holiday, setHoliday] = useState<HolidayType>("Christmas");

    function holidayToEmoji(): string {
        if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Bastille Day") {
            return "🇫🇷";
        } else if (holiday === "Epiphany") {
            return "👑";
        } else if (holiday === "Chandeleur") {
            return "🥞";
        } else {
            return "🦃";
        }
    }

    function myHolidayAlphabet(): void {
        if (holiday === "Bastille Day") {
            setHoliday("Chandeleur");
        } else if (holiday === "Chandeleur") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Epiphany");
        } else if (holiday === "Epiphany") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Bastille Day");
        }
    }

    function myHolidayChronology(): void {
        if (holiday === "Epiphany") {
            setHoliday("Chandeleur");
        } else if (holiday === "Chandeleur") {
            setHoliday("Bastille Day");
        } else if (holiday === "Bastille Day") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else {
            setHoliday("Epiphany");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={myHolidayAlphabet}>Advance by Alphabet</Button>
                <Button onClick={myHolidayChronology}>Advance by Year</Button>
            </div>
            <p>Holiday: {holidayToEmoji()}</p>
        </div>
    );
}
