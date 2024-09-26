import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type HolidayType =
        | "Christmas: 🎁"
        | "Easter: 🐰"
        | "Halloween: 🎃"
        | "Thanksgiving: 🦃"
        | "New Years: 🎉";
    const [holiday, setHoliday] = useState<HolidayType>("Christmas: 🎁");

    function byAlphabetical(): void {
        if (holiday === "Christmas: 🎁") {
            setHoliday("Easter: 🐰");
        }
        if (holiday === "Easter: 🐰") {
            setHoliday("Halloween: 🎃");
        }
        if (holiday === "Halloween: 🎃") {
            setHoliday("New Years: 🎉");
        }
        if (holiday === "New Years: 🎉") {
            setHoliday("Thanksgiving: 🦃");
        }
        if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Christmas: 🎁");
        }
    }
    function byYear(): void {
        if (holiday === "New Years: 🎉") {
            setHoliday("Easter: 🐰");
        }
        if (holiday === "Easter: 🐰") {
            setHoliday("Halloween: 🎃");
        }
        if (holiday === "Halloween: 🎃") {
            setHoliday("Thanksgiving: 🦃");
        }
        if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Christmas: 🎁");
        }
        if (holiday === "Christmas: 🎁") {
            setHoliday("New Years: 🎉");
        }
    }

    return (
        <>
            <div>Cycle Holiday</div>
            <Button onClick={byAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
            <span>
                {"Holiday: "}
                {holiday}
            </span>
        </>
    );
}
