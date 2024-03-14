import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "🎆" | "❤️" | "🎄" | "🎃";

const holidayAlphabet: Record<Holiday, Holiday> = {
    "🎉": "🎆",
    "🎆": "❤️",
    "❤️": "🎄",
    "🎄": "🎃",
    "🎃": "🎉"
};

const holidayYear: Record<Holiday, Holiday> = {
    "🎉": "🎆",
    "🎆": "❤️",
    "❤️": "🎄",
    "🎄": "🎃",
    "🎃": "🎉"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>("🎉");

    const advanceByAlphabet = (): void => {
        setHoliday(holidayAlphabet[currentHoliday] as Holiday);
    };

    const advanceByYear = (): void => {
        setHoliday(holidayYear[currentHoliday] as Holiday);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <div>
                <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
                <Button onClick={advanceByYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
