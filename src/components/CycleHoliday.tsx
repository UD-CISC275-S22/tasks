import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<string>("🎇");

    //to get next holiday alphabetically
    function getHolidayAlphabet(current: string): string {
        const holidaysArr = ["🎇", "🐣", "👻", "🦃", "🎄"];

        const currentIndex = holidaysArr.indexOf(current);

        return holidaysArr[(currentIndex + 1) % 5];
    }

    function getHolidayMonth(current: string): string {
        const holidaysArr = ["🐣", "🎇", "🦃", "👻", "🎄"];

        const currentIndex = holidaysArr.indexOf(current);

        return holidaysArr[(currentIndex + 1) % 5];
    }

    // function arrangeAlphabet(): void {
    //     const nextHoliday = getHolidayAlphabet(currentHoliday);
    //     setHoliday(nextHoliday);
    // }

    // function arrangeMonthly(): void {
    //     const nextHoliday = getHolidayMonth(currentHoliday);
    //     setHoliday(nextHoliday);
    // }

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button
                onClick={() => setHoliday(getHolidayAlphabet(currentHoliday))}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(getHolidayMonth(currentHoliday))}>
                Advance by Year
            </Button>
        </div>
    );
}
