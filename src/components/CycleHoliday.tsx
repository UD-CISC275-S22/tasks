import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎉" | "🍀" | "🎆" | "🦃" | "🎄";

const ALPHABETICAL: Record<Holiday, Holiday> = {
    "🎄": "🎆",
    "🎆": "🎉",
    "🎉": "🍀",
    "🍀": "🦃",
    "🦃": "🎄"
};

const CHRONOLOGICAL: Record<Holiday, Holiday> = {
    "🎉": "🍀",
    "🍀": "🎆",
    "🎆": "🦃",
    "🦃": "🎄",
    "🎄": "🎉"
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("🍀");

    function changeAlphabetically(): void {
        const newHoliday = ALPHABETICAL[currentHoliday];
        setCurrentHoliday(newHoliday);
    }

    function changeChronologically(): void {
        const newHoliday = CHRONOLOGICAL[currentHoliday];
        setCurrentHoliday(newHoliday);
    }
    return (
        <div>
            <div>
                <span>Holiday: {currentHoliday}</span>
            </div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Advance by Alphabet
                </Button>
                <Button onClick={changeChronologically}>Advance by Year</Button>
            </div>
        </div>
    );
}
