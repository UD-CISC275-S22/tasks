import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎁");

    function cycleByAlphabet(): void {
        if (holiday == "🎁") {
            setHoliday("🐰");
        } else if (holiday == "🐰") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🍀");
        } else if (holiday == "🍀") {
            setHoliday("💘");
        } else {
            setHoliday("🎁");
        }
    }

    function cycleByYear(): void {
        if (holiday == "💘") {
            setHoliday("🍀");
        } else if (holiday == "🍀") {
            setHoliday("🐰");
        } else if (holiday == "🐰") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🎁");
        } else {
            setHoliday("💘");
        }
    }

    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
            <span>
                {"Holiday: "}
                {holiday}
            </span>
        </div>
    );
}
