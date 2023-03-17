//eslint - disable - next - line;
import React, { useState } from "react";
//eslint - disable - next - line;
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setState] = useState<string>("🎄");
    const changeByAlphabet = () => {
        let newHoliday;
        if (holiday === "🎄") {
            newHoliday = "👻";
        } else if (holiday === "👻") {
            newHoliday = "🎆";
        } else if (holiday === "🎆") {
            newHoliday = "🦃";
        } else if (holiday === "🦃") {
            newHoliday = "💖";
        } else {
            newHoliday = "🎄";
        }
        setState(newHoliday);
    };
    const changeByYear = () => {
        let newHoliday;
        if (holiday === "💖") {
            newHoliday = "🎆";
        } else if (holiday === "🎆") {
            newHoliday = "👻";
        } else if (holiday === "👻") {
            newHoliday = "🦃";
        } else if (holiday === "🦃") {
            newHoliday = "🎄";
        } else {
            newHoliday = "💖";
        }
        setState(newHoliday);
    };
    return (
        <span>
            <Button onClick={changeByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={changeByYear}>Advance by Year</Button>
            Holiday: {holiday}
        </span>
    );
}
