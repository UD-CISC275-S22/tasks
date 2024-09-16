import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holiState = "🎄" | "🦃" | "🐇" | "✨" | "🎃";
//const cycleByAlphabet = ["🎄", "🐇", "🎃", "✨", "🦃"];
//const cycleByYear = ["🎄", "🐇", "✨", "🎃", "🦃"];

export function CycleHoliday(): JSX.Element {
    const [holiState, setHoliday] = useState<holiState>("🎄");

    function changeAlpha() {
        if (holiState === "🎄") {
            setHoliday("🐇");
        }
        if (holiState === "🐇") {
            setHoliday("🎃");
        }
        if (holiState === "🎃") {
            setHoliday("✨");
        }
        if (holiState === "✨") {
            setHoliday("🦃");
        }
        if (holiState === "🦃") {
            setHoliday("🎄");
        }
    }
    function changeYear() {
        if (holiState === "🎄") {
            setHoliday("🐇");
        }
        if (holiState === "🐇") {
            setHoliday("✨");
        }
        if (holiState === "✨") {
            setHoliday("🎃");
        }
        if (holiState === "🎃") {
            setHoliday("🦃");
        }
        if (holiState === "🦃") {
            setHoliday("🎄");
        }
    }

    return (
        <div>
            <div>
                <Button onClick={() => changeAlpha()}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => changeYear()}>Advance by Year</Button>
            </div>
            <div>Holiday: {holiState}</div>
        </div>
    );
}
