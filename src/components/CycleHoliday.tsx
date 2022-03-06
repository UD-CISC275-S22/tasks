import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidayType = "☪️️" | "🎉" | "🦃" | "🎂" | "💖";

const MAP_BY_ALPH: Record<holidayType, holidayType> = {
    "🎂": "☪️️",
    "☪️️": "🎉",
    "🎉": "🦃",
    "🦃": "💖",
    "💖": "🎂"
};
const MAP_BY_DATE: Record<holidayType, holidayType> = {
    "💖": "☪️️",
    "☪️️": "🦃",
    "🦃": "🎂",
    "🎂": "🎉",
    "🎉": "💖"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setholiday] = useState<holidayType>("🎂");

    function changeEmojiAlph(): void {
        const newemoji = MAP_BY_ALPH[holiday];
        setholiday(newemoji);
    }
    function changeEmojiDate(): void {
        const newemoji = MAP_BY_DATE[holiday];
        setholiday(newemoji);
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <div>
                <Button onClick={changeEmojiAlph}> Advance by Alphabet</Button>
                <Button onClick={changeEmojiDate}>Advance by Year</Button>
            </div>
        </div>
    );
}
