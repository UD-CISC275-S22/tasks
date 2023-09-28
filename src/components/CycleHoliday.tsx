import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<string>("🎅");
    const holidayByDate: string[] = ["🪩", "🌚", "🥚", "🦃", "🎅"];

    const holidayByName: string[] = ["🎅", "🥚", "🌚", "🪩", "🦃"];

    let currIDX: number;

    function getHolidayDate() {
        currIDX = holidayByDate.indexOf(holiday);
        currIDX++;
        if (currIDX == holidayByDate.length) {
            currIDX = 0;
        }
        changeHoliday(holidayByDate[currIDX]);
    }
    function getHolidayName() {
        currIDX = holidayByName.indexOf(holiday);
        currIDX++;
        if (currIDX == holidayByName.length) {
            currIDX = 0;
        }
        changeHoliday(holidayByName[currIDX]);
    }

    return (
        <div>
            <div>holiday: {holiday}</div>
            <Button onClick={getHolidayDate}>Advance by Year</Button>
            <Button onClick={getHolidayName}>Advance by Alphabet</Button>
        </div>
    );
}
