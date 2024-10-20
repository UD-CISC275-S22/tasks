import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const holidays = [
        { name: "New Years", emoji: "🥂", orderInYr: 1 },
        { name: "Easter", emoji: "🐇", orderInYr: 2 },
        { name: "Fourth of July", emoji: "🎆", orderInYr: 3 },
        { name: "Halloween", emoji: "🎃", orderInYr: 4 },
        { name: "Thanksgiving", emoji: "🦃", orderInYr: 5 },
    ];

    const [holiday, setHoliday] = useState(holidays[1]);

    function holidayAlphabetical(): void {
        const alphOrder = holidays.sort((a, b) => a.name.localeCompare(b.name));
        const index = alphOrder.findIndex((hol) => hol.name === holiday.name);
        setHoliday(alphOrder[index !== alphOrder.length - 1 ? index + 1 : 0]);
    }

    function holidayTimeOfYr(): void {
        const timeOrder = holidays.sort((a, b) => a.orderInYr - b.orderInYr);
        const index = timeOrder.findIndex((hol) => hol.name === holiday.name);
        setHoliday(timeOrder[index !== timeOrder.length - 1 ? index + 1 : 0]);
    }

    return (
        <div>
            <Button onClick={holidayAlphabetical}>Advance by Alphabet</Button>
            <Button onClick={holidayTimeOfYr}>Advance by Year</Button>
            <p>Holiday: {holiday.emoji}</p>
        </div>
    );
}
