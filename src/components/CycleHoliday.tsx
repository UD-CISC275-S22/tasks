import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Halloween");
    function changeAlphabet(): void {
        if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("St Patrick's Day");
        } else {
            setHoliday("Halloween");
        }
    }
    function changeYear() {
        if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Fourth of July");
        } else if (holiday === "Fourth of July") {
            setHoliday("Saint Patrick's Day");
        } else {
            setHoliday("Halloween");
        }
    }
    function emojis(): string {
        if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Saint Patrick's Day") {
            return "☘️";
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
            <Button onClick={() => changeAlphabet()}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => changeYear()}>Advance by Year</Button>
        </div>
    );
}
