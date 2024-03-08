import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🌲");

    function alphabeticalChange(): void {
        if (holiday === "🌲") {
            setHoliday("🎃");
        } else if (holiday === "🎃") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🌲");
        }
        // Christmas, Halloween, New Year's, St. Patrick's Day, Valentine's Day
    }

    function byDate(): void {
        if (holiday === "🎃") {
            setHoliday("🌲");
        } else if (holiday === "🌲") {
            setHoliday("🎆");
        } else if (holiday === "🎆") {
            setHoliday("❤️");
        } else if (holiday === "❤️") {
            setHoliday("🍀");
        } else if (holiday === "🍀") {
            setHoliday("🎃");
        }

        // Halloween, Christmas,  New Year's, Valentine's Day, St. Patrick's Day
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <br></br>
            <Button onClick={alphabeticalChange}>Advance by Alphabet</Button>
            <Button onClick={byDate}>Advance by Year</Button>
        </div>
    );
}
