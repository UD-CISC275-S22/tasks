import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    function changeAlphabetical(): void {
        const newHoliday = ALPHABETICAL[holiday];
        setHoliday(newHoliday);
    }
    function changeYear(): void {
        const newHoliday = YEAR[holiday];
        setHoliday(newHoliday);
    }
    function toEmoji(str: string): string {
        if (str.includes("Christmas")) {
            return "🎄";
        } else if (str.includes("Fourth of July")) {
            return "🎆";
        } else if (str.includes("Halloween")) {
            return "👻";
        } else if (str.includes("St. Patrick's Day")) {
            return "🍀";
        } else {
            return "🦃";
        }
    }

    type Holidays =
        | "St. Patrick's Day"
        | "Fourth of July"
        | "Halloween"
        | "Thanksgiving"
        | "Christmas";
    /*
    const holidays: string[] = [
        "St. Patrick's Day",
        "Fourth of July",
        "Halloween",
        "Thanksgiving",
        "Christmas"
    ];
    */
    const ALPHABETICAL: Record<Holidays, Holidays> = {
        Christmas: "Fourth of July",
        "Fourth of July": "Halloween",
        Halloween: "St. Patrick's Day",
        "St. Patrick's Day": "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const YEAR: Record<Holidays, Holidays> = {
        Christmas: "St. Patrick's Day",
        "St. Patrick's Day": "Fourth of July",
        "Fourth of July": "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    const [holiday, setHoliday] = useState<Holidays>("St. Patrick's Day");
    return (
        <>
            <div>
                <Button onClick={() => changeAlphabetical()}>
                    Alphabetical
                </Button>
                <Button onClick={() => changeYear()}>Year</Button>
            </div>
            Holiday: {toEmoji(holiday)}
        </>
    );
}
