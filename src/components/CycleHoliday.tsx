import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎂");

    function alphabetize(): void {
        if (holiday === "🎂") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("🐄");
        } else if (holiday === "🐄") {
            setHoliday("👩‍🍼");
        } else if (holiday === "👩‍🍼") {
            setHoliday("☪️");
        } else {
            setHoliday("🎂");
        }
    }
    function chronological(): void {
        if (holiday === "🎂") {
            setHoliday("🐄");
        } else if (holiday === "🐄") {
            setHoliday("🎄");
        } else if (holiday === "🎄") {
            setHoliday("☪️");
        } else if (holiday === "☪️") {
            setHoliday("👩‍🍼");
        } else {
            setHoliday("🎂");
        }
    }
    return (
        <div>
            <Button onClick={alphabetize}>Advance by Alphabet</Button>
            <span>Holiday: {holiday}</span>
            <Button onClick={chronological}>Advance by Year</Button>
        </div>
    );
}
