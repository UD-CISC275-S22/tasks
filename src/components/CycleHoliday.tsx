import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Holiday {
    name: string;
    date: string;
}

const holidays = [
    { name: "Valentine's Day", date: "2/14" },
    { name: "St. Patrick's Day", date: "03/17" },
    { name: "Fourth of July", date: "07/04" },
    { name: "Day of the Dead", date: "11/01" },
    { name: "Thanksgiving", date: "11/23" }
];

const emojis: Record<string, string> = {
    "Valentine's Day": "❤️",
    "St. Patrick's Day": "🍀",
    "Fourth of July": "🧨",
    "Day of the Dead": "💀",
    Thanksgiving: "🦃"
};

export function nextAlphabetical(holiday_name: string): string {
    const holidayNames = holidays.map((holiday: Holiday) => holiday.name);
    const sortedHolidayNames = holidayNames.slice().sort();
    const currentIndex = sortedHolidayNames.indexOf(holiday_name);
    const nextIndex = (currentIndex + 1) % sortedHolidayNames.length;
    const nextHoliday = sortedHolidayNames[nextIndex];
    return nextHoliday;
}

export function nextChronological(holiday_name: string): string {
    const currentIndex = holidays.findIndex(
        (holiday) => holiday.name === holiday_name
    );
    const sortedHolidays = holidays.sort((a, b) => {
        const [aMonth, aDay] = a.date.split("/");
        const [bMonth, bDay] = b.date.split("/");
        if (parseInt(aMonth) === parseInt(bMonth)) {
            return parseInt(aDay) - parseInt(bDay);
        } else {
            return parseInt(aMonth) - parseInt(bMonth);
        }
    });
    const nextIndex = (currentIndex + 1) % sortedHolidays.length;
    return sortedHolidays[nextIndex].name;
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>(holidays[0].name);

    /*const holiday_emoji = (
        holidays.find((holiday_e) => holiday_e.name === holiday) || {
            emoji: ""
        }
    ).emoji;*/

    function setAlphabetical() {
        setHoliday(nextAlphabetical(holiday));
    }
    function setChronological() {
        setHoliday(nextChronological(holiday));
    }

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Cycle Holiday</div>
            <Button onClick={setAlphabetical} variant={"outline-dark"}>
                Cycle by Alphabet
            </Button>
            <Button onClick={setChronological} variant={"outline-dark"}>
                Cycle by Year
            </Button>
            <div>Holiday: {emojis[holiday]}</div>
        </div>
    );
}
