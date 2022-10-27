import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("St. Patricks Day: 🍀");

    function byAlphabetical(): void {
        if (holiday === "Christmas: 🎄") {
            setHoliday("Easter: 🐇");
        } else if (holiday === "Easter: 🐇") {
            setHoliday("Halloween: 👻");
        } else if (holiday === "Halloween: 👻") {
            setHoliday("St. Patricks Day: 🍀");
        } else if (holiday === "St. Patricks Day: 🍀") {
            setHoliday("Thanksgiving: 🦃");
        } else {
            setHoliday("Christmas: 🎄");
        }
    }

    function byYear(): void {
        if (holiday === "St. Patricks Day: 🍀") {
            setHoliday("Easter: 🐇");
        } else if (holiday === "Easter: 🐇") {
            setHoliday("Halloween: 👻");
        } else if (holiday === "Halloween: 👻") {
            setHoliday("Thanksgiving: 🦃");
        } else if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Christmas: 🎄");
        } else {
            setHoliday("St. Patricks Day: 🍀");
        }
    }
    return (
        <div>
            <Button onClick={byAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
            <span>
                {"Holiday: "}
                {holiday}
            </span>
        </div>
    );
}
