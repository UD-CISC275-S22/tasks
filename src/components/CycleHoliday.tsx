import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holidays = "🧧" | "🎃" | "🎅🏻" | "🦃" | "🌎";
    const [currHoliday, cycleHoliday] = useState<holidays>("🧧");
    function chronoHoliday(): void {
        if (currHoliday === "🧧") {
            cycleHoliday("🌎");
        } else if (currHoliday === "🌎") {
            cycleHoliday("🎃");
        } else if (currHoliday === "🎃") {
            cycleHoliday("🦃");
        } else if (currHoliday === "🦃") {
            cycleHoliday("🎅🏻");
        } else {
            cycleHoliday("🧧");
        }
    }
    function alphabeticHoliday(): void {
        // Chinese New Year, Christmas, Earth Day, Halloween, Thanksgiving
        if (currHoliday === "🧧") {
            cycleHoliday("🎅🏻");
        } else if (currHoliday === "🎅🏻") {
            cycleHoliday("🌎");
        } else if (currHoliday === "🌎") {
            cycleHoliday("🎃");
        } else if (currHoliday === "🎃") {
            cycleHoliday("🦃");
        } else {
            cycleHoliday("🧧");
        }
    }
    return (
        <>
            <p>Holiday: {currHoliday}</p>
            <Button onClick={alphabeticHoliday}>Advance by Alphabet</Button>
            <Button onClick={chronoHoliday}>Advance by Year</Button>
        </>
    );
}
