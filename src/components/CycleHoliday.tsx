import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Spring Festival"
    | "Latern Festival"
    | "Dragon Boat Festival"
    | "Mid-Autumn Festival"
    | "National Day";

const Holiday_Transitions_by_Alphbet: Record<Holiday, Holiday> = {
    "Dragon Boat Festival": "Latern Festival",
    "Latern Festival": "Mid-Autumn Festival",
    "Mid-Autumn Festival": "National Day",
    "National Day": "Spring Festival",
    "Spring Festival": "Dragon Boat Festival"
};

const Holiday_Transitions_by_Year: Record<Holiday, Holiday> = {
    "Spring Festival": "Latern Festival",
    "Latern Festival": "Dragon Boat Festival",
    "Dragon Boat Festival": "Mid-Autumn Festival",
    "Mid-Autumn Festival": "National Day",
    "National Day": "Spring Festival"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Spring Festival");

    function changeByAlphbet(): void {
        const followingHoliday = Holiday_Transitions_by_Alphbet[holiday];
        setHoliday(followingHoliday);
    }

    function changeByYear(): void {
        const nextHoliday = Holiday_Transitions_by_Year[holiday];
        setHoliday(nextHoliday);
    }

    return (
        <div>
            <Button onClick={changeByAlphbet}> Advance by Alphabet</Button>
            <Button onClick={changeByYear}> Advance by Year</Button>
            <div>
                {"Holiday" + ": "}
                {holiday}
                {holiday === "Spring Festival" ? (
                    <span>🧧</span>
                ) : holiday === "Latern Festival" ? (
                    <span>🏮</span>
                ) : holiday === "Dragon Boat Festival" ? (
                    <span>🎏</span>
                ) : holiday === "Mid-Autumn Festival" ? (
                    <span>🥮</span>
                ) : holiday === "National Day" ? (
                    <span>🇨🇳</span>
                ) : null}
            </div>
        </div>
    );
}
