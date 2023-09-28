import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = {
    name: string;
    emoji: string;
    orderInYear: number;
};

const holidays: Holiday[] = [
    { name: "Dragon Boat Festival", emoji: "🎏", orderInYear: 3 },
    { name: "Halloween", emoji: "🎃", orderInYear: 2 },
    { name: "Diwali", emoji: "🪔", orderInYear: 1 },
    { name: "Christmas", emoji: "🎄", orderInYear: 4 },
    { name: "Easter", emoji: "🐰", orderInYear: 5 }
];

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(holidays[0]);

    const getNextHolidayByYear = (holiday: Holiday): Holiday => {
        const nextOrder = (holiday.orderInYear % holidays.length) + 1;
        return holidays.find((h) => h.orderInYear === nextOrder) || holidays[0];
    };

    const getNextHolidayAlphabetically = (holiday: Holiday): Holiday => {
        const sortedHolidays = [...holidays].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const currentIndex = sortedHolidays.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        return sortedHolidays[nextIndex];
    };

    return (
        <div>
            <p>
                Holiday: {currentHoliday.name} {currentHoliday.emoji}
            </p>{" "}
            {/* changed */}
            <Button
                onClick={() =>
                    setCurrentHoliday(
                        getNextHolidayAlphabetically(currentHoliday)
                    )
                }
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday(getNextHolidayByYear(currentHoliday))
                }
            >
                Advance by Year
            </Button>
        </div>
    );
}
