import React, { useState } from "react";
import { Button } from "react-bootstrap";
enum Holidays {
    NewYears = "🕰️",
    ValentinesDay = "💕",
    Halloween = "🎃",
    Thanksgiving = "🦃",
    Christmas = "🎅"
}
export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holidays>(
        Holidays.NewYears
    );
    function nextHolidayAlphabetical(holiday: Holidays): Holidays {
        const arrayOfHolidays = Object.values(Holidays).sort();
        const index = arrayOfHolidays.indexOf(holiday);
        if (index === arrayOfHolidays.length - 1) {
            return arrayOfHolidays[0] as Holidays;
        }
        return arrayOfHolidays[index + 1] as Holidays;
    }
    function nextHolidayByYear(holiday: Holidays): Holidays {
        if (holiday === Holidays.NewYears) {
            return Holidays.ValentinesDay;
        } else if (holiday === Holidays.ValentinesDay) {
            return Holidays.Halloween;
        } else if (holiday === Holidays.Halloween) {
            return Holidays.Thanksgiving;
        } else if (holiday === Holidays.Thanksgiving) {
            return Holidays.Christmas;
        } else if (holiday === Holidays.Christmas) {
            return Holidays.NewYears;
        } else {
            return holiday;
        }
    }
    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextHolidayAlphabetical(currentHoliday))
                }
            >
                Alphabet
            </Button>
            <Button
                onClick={() =>
                    setCurrentHoliday(nextHolidayByYear(currentHoliday))
                }
            >
                Year
            </Button>
        </div>
    );
}
