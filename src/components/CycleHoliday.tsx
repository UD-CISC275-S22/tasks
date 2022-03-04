/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { isConstructorTypeNode } from "typescript";

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
        { Name: "National Cat Day", Month: 1, Day: 29, Emogi: "🥳" },
        { Name: "Christmas Day", Month: 12, Day: 25, Emogi: "🎄" }
    ];

    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        HolidayList[0]
    );

    function cycleByName() {
        // this list checks to see which element of holiday we are on and will adjust the date accordingly
        setCurrentHoliday(
            currentHoliday === HolidayList[4]
                ? HolidayList[0]
                : currentHoliday === HolidayList[0]
                ? HolidayList[2]
                : currentHoliday === HolidayList[2]
                ? HolidayList[3]
                : currentHoliday === HolidayList[3]
                ? HolidayList[1]
                : HolidayList[4]
        );
    }

    function cycleByDate() {
        // this list checks which holiday name we are on and goes to the next one in the list
        setCurrentHoliday(
            //if the current holiday is new yars, make it valentines day
            currentHoliday === HolidayList[0]
                ? HolidayList[1]
                : // if the current holiday is valentines day, make it saint patricks day
                currentHoliday === HolidayList[1]
                ? HolidayList[2]
                : // if the current holiday is saint patricks day, make it National cat day
                currentHoliday === HolidayList[2]
                ? HolidayList[3]
                : // if the current holiday is National Cat Day, make it christmas eve, if not, make it new years eve
                currentHoliday === HolidayList[3]
                ? HolidayList[4]
                : HolidayList[0]
        );
    }

    return (
        <div>
            <div>Cycle Holiday</div>;
            <Button onClick={cycleByName}>Cycle by Alphabet</Button>
            <Button onClick={cycleByDate}>Cycle by Date</Button>
            {<div>{currentHoliday.Emogi}</div>}
        </div>
    );
}
