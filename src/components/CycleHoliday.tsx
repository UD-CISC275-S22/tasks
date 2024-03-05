import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //🎃 Halloween 🎄Christmas 🎆July 4th 🦃Thanksgiving 🐥Greek Easter
    const [Holiday, setHoliday] = useState<string>("🎃");
    const holidaysAlphabetical: Record<string, string> = {
        "🎄": "🐥",
        "🐥": "🎃",
        "🎃": "🎆",
        "🎆": "🦃",
        "🦃": "🎄"
    };
    const holidaysByDate: Record<string, string> = {
        "🐥": "🎆",
        "🎆": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🐥"
    };
    return (
        <div>
            <Button onClick={() => setHoliday(holidaysAlphabetical[Holiday])}>
                Alphabet
            </Button>
            <div>Holiday: {Holiday}</div>
            <Button onClick={() => setHoliday(holidaysByDate[Holiday])}>
                Year
            </Button>
        </div>
    );
}
