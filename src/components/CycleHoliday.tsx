import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Holiday {
    name: string;
    emoji: string;
    date: Date;
}

const holidayNames: string[] = [
    "New Year's Day",
    "Halloween",
    "Veterans Day",
    "Christmas Day",
    "Thanksgiving Day"
];
const holidayEmojis: string[] = ["🆕", "🎃", "🪖", "🎄", "🦃"];
const holidayDateStrings: string[] = [
    "2024-01-1",
    "2024-10-31",
    "2024-11-11",
    "2024-12-25",
    "2024-11-28"
    "2024-11-23"
];
const holidayDates: Date[] = holidayDateStrings.map(
    (date: string): Date => new Date(date)
);

const holidays: Holiday[] = holidayNames.map((name: string, index: number) => ({
    name: holidayNames[index],
    emoji: holidayEmojis[index],
    date: holidayDates[index]
}));

const holidaysSortedByAlphabet: Holiday[] = [...holidays].sort((a, b) =>
    a.name.localeCompare(b.name)
);

const holidaysSortedByTime: Holiday[] = [...holidays].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
);

export function CycleHoliday(): JSX.Element {
    const [holidayName, setHolidayName] = useState<string>("Thanksgiving Day");

    const advanceByTimeHandler = () => {
        const currentIndex = holidaysSortedByTime.findIndex(
            (holiday: Holiday): boolean => holiday.name === holidayName
        );

        setHolidayName(
            holidaysSortedByTime[
                (currentIndex + 1) % holidaysSortedByTime.length
            ].name
        );
    };

    const advanceByAlphabetHandler = () => {
        const currentIndex = holidaysSortedByAlphabet.findIndex(
            (holiday: Holiday): boolean => holiday.name === holidayName
        );

        setHolidayName(
            holidaysSortedByAlphabet[
                (currentIndex + 1) % holidaysSortedByAlphabet.length
            ].name
        );
    };

    const currentHoliday: Holiday | undefined = holidays.find(
        (holiday: Holiday): boolean => holiday.name === holidayName
    );

    const emoji: string = currentHoliday ? currentHoliday.emoji : "no holiday";

    return (
        <div>
            <p>Holiday: {emoji}</p>
            <Button onClick={advanceByAlphabetHandler}>
                Advance By Alphabet
            </Button>
            <Button onClick={advanceByTimeHandler}>Advance By Year</Button>
        </div>
    );
}
