import React, { useState } from "react";
import { Button } from "react-bootstrap";
//
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");

    function changeAplhabet(): void {
        if (holiday === "Halloween") {
            setHoliday("Valintines Day");
        } else if (holiday === "Valintines Day") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else {
            setHoliday("Halloween");
        }
    }

    function changeYear(): void {
        if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Valintines Day") {
            setHoliday("Easter");
        } else if (holiday === "Christmas") {
            setHoliday("Valintines Day");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else {
            setHoliday("Halloween");
        }
    }
    function emojis(): string {
        if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Valintines Day") {
            return "💘";
        } else if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Easter") {
            return "🐰";
        } else {
            return "🎆";
        }
    }
    return (
        <div>
            Holiday: {emojis()} {holiday}
            <Button onClick={changeAplhabet}>Advance by Alphabet</Button>
            <Button onClick={changeYear}>Advance by Year</Button>
        </div>
    );
}
