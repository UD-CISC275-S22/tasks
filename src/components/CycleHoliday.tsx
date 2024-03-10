import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Enumeration for the holidays
enum Holiday {
    NewYear = "🎉",
    Valentines = "💖",
    Halloween = "🎃",
    Christmas = "🎄",
    Independence = "🎆"
}

// Function to get the next holiday alphabetically
const nextHolidayAlphabetically = (currentHoliday: Holiday): Holiday => {
    const order = [
        Holiday.Christmas,
        Holiday.Halloween,
        Holiday.Independence,
        Holiday.NewYear,
        Holiday.Valentines
    ];
    const currentIndex = order.indexOf(currentHoliday);
    return order[(currentIndex + 1) % order.length]; // Cycle through the array
};

// Function to get the next holiday by year
const nextHolidayByYear = (currentHoliday: Holiday): Holiday => {
    const order = [
        Holiday.NewYear,
        Holiday.Valentines,
        Holiday.Independence,
        Holiday.Halloween,
        Holiday.Christmas
    ];
    const currentIndex = order.indexOf(currentHoliday);
    return order[(currentIndex + 1) % order.length]; // Cycle through the array
};

export function CycleHoliday(): JSX.Element {
    // State to manage the current holiday
    const [currentHoliday, setCurrentHoliday] = useState(Holiday.NewYear);

    // Handler for advancing alphabetically
    const advanceAlphabetically = () =>
        setCurrentHoliday((current) => nextHolidayAlphabetically(current));

    // Handler for advancing by year
    const advanceByYear = () =>
        setCurrentHoliday((current) => nextHolidayByYear(current));

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
