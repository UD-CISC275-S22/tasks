import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const Holiday: string[] = [
        "New Years: 🎆",
        "Valentines Day: 💘",
        "Easter: 🐰",
        "Halloween: 🎃",
        "Christmas: 🎄"
    ];
    const [holiday, setHoliday] = useState<string>(Holiday[0]);
    function byDate(): void {
        if (holiday === "New Years: 🎆") {
            setHoliday(Holiday[1]);
        } else if (holiday === "Valentines Day: 💘") {
            setHoliday(Holiday[2]);
        } else if (holiday === "Easter: 🐰") {
            setHoliday(Holiday[3]);
        } else if (holiday === "Halloween: 🎃") {
            setHoliday(Holiday[4]);
        } else if (holiday === "Christmas: 🎄") {
            setHoliday(Holiday[0]);
        }
    }
    function byAlphabet(): void {
        if (holiday === "New Years: 🎆") {
            setHoliday(Holiday[1]);
        } else if (holiday === "Valentines Day: 💘") {
            setHoliday(Holiday[4]);
        } else if (holiday === "Easter: 🐰") {
            setHoliday(Holiday[3]);
        } else if (holiday === "Halloween: 🎃") {
            setHoliday(Holiday[0]);
        } else if (holiday === "Christmas: 🎄") {
            setHoliday(Holiday[2]);
        }
    }
    return (
        <div>
            Cycle Holiday
            <div>
                <Button onClick={byDate}>Advance through Year</Button>
            </div>
            <div>
                <Button onClick={byAlphabet}>Advance through Alphabet</Button>
            </div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
        </div>
    );
}
