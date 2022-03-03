import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");

    function advanceYear(): void {
        if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("New Years Eve");
        } else {
            setHoliday("Easter");
        }
    }

    function advanceAlpha(): void {
        if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("New Years Eve");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else {
            setHoliday("Christmas");
        }
    }

    function emoji(): string {
        if (holiday === "Easter") {
            return "🐇";
        } else if (holiday === "Fourth of July") {
            return "🎆";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Christmas") {
            return "🎁";
        } else {
            return "🥳";
        }
    }

    return (
        <div>
            <Button onClick={advanceYear}>Advance by Year</Button>
            <Button onClick={advanceAlpha}>Advance by Alphabet</Button>
            <div>
                Holiday: {emoji()} {holiday}
            </div>
        </div>
    );
}
