import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas 🎁");

    function cycleByAlphabet(): void {
        if (holiday == "Christmas 🎁") {
            setHoliday("Easter 🐰");
        } else if (holiday == "Easter 🐰") {
            setHoliday("Halloween 🎃");
        } else if (holiday == "Halloween 🎃") {
            setHoliday("St. Patricks Day 🍀");
        } else if (holiday == "St. Patricks Day 🍀") {
            setHoliday("Valentines Day 💘");
        } else {
            setHoliday("Christmas 🎁");
        }
    }

    function cycleByYear(): void {
        if (holiday == "Valentines Day 💘") {
            setHoliday("St. Patricks Day 🍀");
        } else if (holiday == "St. Patricks Day 🍀") {
            setHoliday("Easter 🐰");
        } else if (holiday == "Easter 🐰") {
            setHoliday("Halloween 🎃");
        } else if (holiday == "Halloween 🎃") {
            setHoliday("Christmas 🎁");
        } else {
            setHoliday("Valentines Day 💘");
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
