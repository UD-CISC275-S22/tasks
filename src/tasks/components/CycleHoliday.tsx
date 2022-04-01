import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Valentine's Day"
    | "Fourth of July"
    | "Halloween"
    | "Thanksgiving";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    function alphabetical(): void {
        if (holiday === "Christmas") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Valentine's Day");
        } else {
            setHoliday("Christmas");
        }
    }
    function chronological(): void {
        if (holiday === "Christmas") {
            setHoliday("Valentine's Day");
        } else if (holiday === "Valentine's Day") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }
    function emoji(): string {
        if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Valentine's Day") {
            return "❤️";
        } else if (holiday === "Fourth of July") {
            return "🎆";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Thanksgiving") {
            return "🍠";
        } else {
            return "🎄";
        }
    }

    return (
        <div>
            <span>Holiday: {emoji()}</span>
            <div>
                <Button onClick={alphabetical}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={chronological}>Advance by Year</Button>
            </div>
            Cycle Holiday
        </div>
    );
}
