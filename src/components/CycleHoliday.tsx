/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { isConstructorTypeNode } from "typescript";

export function CycleHoliday(): JSX.Element {
    interface Holiday {
        Name: string;
        Month: number;
        Day: number;
        Emogi: string;
    }

    const HolidayList: Holiday[] = [
        { Name: "New Years Day", Month: 1, Day: 1, Emogi: "🥳" },
        { Name: "Valentines Day", Month: 2, Day: 14, Emogi: "💖" },
        { Name: "St. Patricks Day", Month: 3, Day: 17, Emogi: "☘️" },
        { Name: "National Cat Day", Month: 1, Day: 29, Emogi: "🐱" },
        { Name: "Christmas Day", Month: 12, Day: 25, Emogi: "🎄" }
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    function cycleByName() {
        // this list checks to see which element of holiday we are on and will adjust the date accordingly
        setCurrentHolidayIndex(
            currentHolidayIndex === 4
                ? 3
                : currentHolidayIndex === 3
                ? 0
                : currentHolidayIndex === 0
                ? 2
                : currentHolidayIndex === 2
                ? 1
                : 4
        );
    }

    function cycleByDate() {
        // this list checks which holiday date we are on and goes to the next one in the list
        setCurrentHolidayIndex(
            currentHolidayIndex === 4 ? 0 : currentHolidayIndex + 1
        );
    }

    return (
        <div>
            <div>Cycle Holiday</div>;
            <Button onClick={cycleByName}>Cycle by Alphabet</Button>
            <Button onClick={cycleByDate}>Cycle by Year</Button>
            {<div>Holiday: {HolidayList[currentHolidayIndex].Emogi}</div>}
        </div>
    );
}
