import React, { useState } from "react";

// Define the Holiday enum
const Holidays = {
    NewYear: "🎆",
    Valentine: "💘",
    Halloween: "🎃",
    Christmas: "🎄",
    Independence: "🎇"
};

type HolidayType = typeof Holidays[keyof typeof Holidays];


// Function to get the next holiday alphabetically
const nextHolidayAlphabetically = (currentHoliday: HolidayType) => {
    const holidays = Object.values(Holidays).sort();
    const currentIndex = holidays.indexOf(currentHoliday);
    return holidays[(currentIndex + 1) % holidays.length];
};

// Function to get the next holiday by year
const nextHolidayByYear = (currentHoliday: HolidayType) => {
    const holidaysInYear = ["🎆", "💘", "🎇", "🎃", "🎄"]; // Ordered by date in the year
    const currentIndex = holidaysInYear.indexOf(currentHoliday);
    return holidaysInYear[(currentIndex + 1) % holidaysInYear.length];
};

export function CycleHoliday() {
    const [holiday, setHoliday] = useState(Holidays.NewYear);

    const cycleAlphabetically = () => {
        setHoliday(nextHolidayAlphabetically(holiday));
    };

    const cycleByYear = () => {
        setHoliday(nextHolidayByYear(holiday));
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <button onClick={cycleAlphabetically}>Advance by Alphabet</button>
            <button onClick={cycleByYear}>Advance by Year</button>
        </div>
    );
}
