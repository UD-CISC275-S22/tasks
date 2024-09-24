import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = {
    name: string;
    emoji: string;
};

const holidays: Holiday[] = [
    { name: "Halloween", emoji: "🎃" },
    { name: "Thanksgiving", emoji: "🦃" },
    { name: "New Year", emoji: "🎉" },
    { name: "Christmas", emoji: "🎄" },
    { name: "Valentine's Day", emoji: "❤️" },
];

const getNextHolidayAlphabetically = (current: Holiday): Holiday => {
    const currentIndex = holidays.findIndex((h) => h.name === current.name);
    const nextIndex = (currentIndex + 1) % holidays.length;
    return holidays[nextIndex];
};

const getNextHolidayByYear = (current: Holiday): Holiday => {
    const holidayOrder = [
        holidays[2],
        holidays[4],
        holidays[0],
        holidays[1],
        holidays[3],
    ];
    const currentIndex = holidayOrder.findIndex((h) => h.name === current.name);
    const nextIndex = (currentIndex + 1) % holidayOrder.length;
    return holidayOrder[nextIndex];
};

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(holidays[0]);

    return (
        <div>
            <h2>
                Holiday: {currentHoliday.emoji} {currentHoliday.name}
            </h2>
            <div>
                <Button
                    onClick={() => {
                        const nextHoliday =
                            getNextHolidayAlphabetically(currentHoliday);
                        setCurrentHoliday(nextHoliday);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        const nextHoliday =
                            getNextHolidayByYear(currentHoliday);
                        setCurrentHoliday(nextHoliday);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
