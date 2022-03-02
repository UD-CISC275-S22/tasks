import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays =
    | "Chinese New Year"
    | "New Years Eve"
    | "Pi Day"
    | "Whale's Day"
    | "World Sleep Day";

const ALPH: Record<Holidays, Holidays> = {
    "Chinese New Year": "New Years Eve",
    "New Years Eve": "Pi Day",
    "Pi Day": "Whale's Day",
    "Whale's Day": "World Sleep Day",
    "World Sleep Day": "Chinese New Year"
};
const YEAR: Record<Holidays, Holidays> = {
    "Chinese New Year": "Whale's Day",
    "Whale's Day": "Pi Day",
    "Pi Day": "World Sleep Day",
    "World Sleep Day": "New Years Eve",
    "New Years Eve": "Chinese New Year"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("Chinese New Year");
    const dict = {
        "Chinese New Year": "🐲",
        "New Years Eve": "🎄",
        "Pi Day": "🥧",
        "Whale's Day": "🐳",
        "World Sleep Day": "😴"
    };
    function advanceAlph(): void {
        setHoliday(ALPH[holiday]);
    }
    function advanceYear(): void {
        setHoliday(YEAR[holiday]);
    }
    return (
        <div>
            <div>Holiday: {dict[holiday]}</div>
            <div>
                <Button onClick={advanceAlph}>Advance by Alphabet</Button>
                <Button onClick={advanceYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
