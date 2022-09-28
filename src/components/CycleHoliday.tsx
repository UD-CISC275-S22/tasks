import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Superbowl Sunday"
    | "Thanksgiving"
    | "Festivus"
    | "Christmas"
    | "New Years Eve";

const holidaysByAlphabet: Holiday[] = [
    "Christmas",
    "Festivus",
    "New Years Eve",
    "Superbowl Sunday",
    "Thanksgiving"
];

const holidaysByDate: Holiday[] = [
    "Superbowl Sunday",
    "Thanksgiving",
    "Festivus",
    "Christmas",
    "New Years Eve"
];

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Festivus");

    const emojis: Record<Holiday, string> = {
        "Superbowl Sunday": "🏈",
        Thanksgiving: "🦃",
        Festivus: "⚖️",
        Christmas: "🎄",
        "New Years Eve": "🎆"
    };

    const getNextAlphabetically = () => {
        const currentIndex = holidaysByAlphabet.indexOf(holiday);
        const nextIndex =
            currentIndex + 1 === holidaysByAlphabet.length
                ? 0
                : currentIndex + 1;
        setHoliday(holidaysByAlphabet[nextIndex]);
    };

    const getNextByDate = () => {
        const currentIndex = holidaysByDate.indexOf(holiday);
        const nextIndex =
            currentIndex + 1 === holidaysByDate.length ? 0 : currentIndex + 1;
        setHoliday(holidaysByDate[nextIndex]);
    };

    return (
        <div>
            <p>Holiday: {emojis[holiday]}</p>
            <Button onClick={() => getNextAlphabetically()}>By Alphabet</Button>
            <Button onClick={() => getNextByDate()}>By Year</Button>
        </div>
    );
}
