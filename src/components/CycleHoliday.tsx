import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<string>("🥂");

    function nextAlphabetical(): void {
        if (holiday === "🦃") {
            changeHoliday("🎄");
        } else if (holiday === "🎄") {
            changeHoliday("🎆");
        } else if (holiday === "🎆") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🥂");
        } else if (holiday === "🥂") {
            changeHoliday("🦃");
        }
    }

    function nextYear(): void {
        if (holiday === "🥂") {
            changeHoliday("🎆");
        } else if (holiday === "🎆") {
            changeHoliday("🎃");
        } else if (holiday === "🎃") {
            changeHoliday("🦃");
        } else if (holiday === "🦃") {
            changeHoliday("🎄");
        } else if (holiday === "🎄") {
            changeHoliday("🥂");
        }
    }
    return (
        <div>
            <Button onClick={nextAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
            <div>Holiday: ${holiday}</div>
        </div>
    );
}
