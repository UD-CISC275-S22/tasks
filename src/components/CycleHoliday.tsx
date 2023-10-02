import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Holidays ["Easter", "Thanksgiving", "Halloween", "Christmas", "New Years"]
type Holiday =
    | "Easter"
    | "Thanksgiving"
    | "Halloween"
    | "Christmas"
    | "New Years";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");
    /*
    const HOLIDAYS_ALPHABET: string[] = [
        "Christmas",
        "Easter",
        "Halloween",
        "New Years",
        "Thanksgiving"
    ];
    const HOLIDAYS_YEARLY: string[] = [
        "Easter",
        "Halloween",
        "Thanksgiving",
        "Christmas",
        "New Years"
    ];
    */
    let currHoliday = holiday;
    function changeAlphabetically(): void {
        if (holiday === "Christmas") {
            currHoliday = "Easter";
        } else if (holiday === "Easter") {
            currHoliday = "Halloween";
        } else if (holiday === "Halloween") {
            currHoliday = "New Years";
        } else if (holiday === "New Years") {
            currHoliday = "Thanksgiving";
        } else {
            currHoliday = "Christmas";
        }
        setHoliday(currHoliday);
    }

    function changeYearly(): void {
        if (holiday === "Easter") {
            currHoliday = "Halloween";
        } else if (holiday === "Halloween") {
            currHoliday = "Thanksgiving";
        } else if (holiday === "Thanksgiving") {
            currHoliday = "Christmas";
        } else if (holiday === "Christmas") {
            currHoliday = "New Years";
        } else {
            currHoliday = "Easter";
        }
        setHoliday(currHoliday);
    }

    return (
        <div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={changeYearly}>Advance by Year</Button>
                <div>
                    {holiday === "Easter" && <span>Holiday: 🥚</span>}
                    {holiday === "Thanksgiving" && <span>Holiday: 🦃</span>}
                    {holiday === "Halloween" && <span>Holiday: 🎃</span>}
                    {holiday === "Christmas" && <span>Holiday: 🎁</span>}
                    {holiday === "New Years" && <span>Holiday: 🎉</span>}
                </div>
            </div>
        </div>
    );
}
