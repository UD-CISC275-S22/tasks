import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const HolidaysAbc: string[] = [
        "Christmas: 🎄",
        "Diwali: 🪔",
        "Halloween: 🎃",
        "New Years: 🎉",
        "Thanksgiving: 🦃"
    ];
    const HolidaysTime: string[] = [
        "Diwali: 🪔",
        "Halloween: 🎃",
        "Thanksgiving: 🦃",
        "Christmas: 🎄",
        "New Years: 🎉"
    ];

    const [holiday, setHoliday] = useState<string>(HolidaysAbc[0]);

    function nextAbc(current: string) {
        const index = HolidaysAbc.indexOf(holiday);
        setHoliday(HolidaysAbc[(index + 1) % HolidaysAbc.length]);
    }

    function nextTime(current: string) {
        const index = HolidaysTime.indexOf(holiday);
        setHoliday(HolidaysTime[(index + 1) % HolidaysTime.length]);
    }

    return (
        <div>
            <Button onClick={() => nextAbc(holiday)}>Next in Alphabet</Button>
            <Button onClick={() => nextTime(holiday)}>Next in Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
