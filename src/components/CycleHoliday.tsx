import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Valentine's Day"
    | "Fourth of July"
    | "Halloween"
    | "Thanksgiving";
export function CycleHoliday(): JSX.Element {
    const [holiday1, setHoliday] = useState<Holiday>("Christmas");
    function alphabetitical(): void {
        if (holiday1 === "Christmas") {
            setHoliday("Fourth of July");
        } else if (holiday1 === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday1 === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday1 === "Thanksgiving") {
            setHoliday("Valentine's Day");
        } else {
            setHoliday("Christmas");
        }
    }
    function chronological(): void {
        if (holiday1 === "Christmas") {
            setHoliday("Valentine's Day");
        } else if (holiday1 === "Valentine's Day") {
            setHoliday("Fourth of July");
        } else if (holiday1 === "Fourth of July") {
            setHoliday("Halloween");
        } else if (holiday1 === "Halloween") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }
    function emoji(): string {
        if (holiday1 === "Christmas") {
            return "🎄";
        } else if (holiday1 === "Valentine's Day") {
            return "❤️";
        } else if (holiday1 === "Fourth of July") {
            return "🎆";
        } else if (holiday1 === "Halloween") {
            return "🎃";
        } else if (holiday1 === "Thanksgiving") {
            return "🍠";
        } else {
            return "🎄";
        }
    }

    return (
        <div>
            <span>Holiday: {emoji()}</span>
            <div>
                <Button onClick={alphabetitical}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={chronological}>Advance by Year</Button>
            </div>
            Cycle Holiday
        </div>
    );
}
