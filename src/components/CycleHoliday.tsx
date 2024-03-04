import React, { useState } from "react";
import { Button } from "react-bootstrap";

//July Fourth, St.Patrick's Day, New Year's Eve, Easter, Thanksgiving
//Alphabetical: Easter, July Fourth, New Year's Eve, St. Patrick's Day, Thanksgiving
//Date Order: St.Patrick's Day, Easter, July Fourth, Thanksgiving, New Year's Eve

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Easter");

    const emojis: Record<string, string> = {
        Easter: "🐣",
        "July Fourth": "🎇",
        "New Year's Eve": "🎉",
        "St.Patrick's Day": "☘",
        Thanksgiving: "🍗"
    };

    function alphabet(holiday: string): string {
        const holidaysA: string[] = [
            "Easter",
            "July Fourth",
            "New Year's Eve",
            "St.Patrick's Day",
            "Thanksgiving"
        ];
        const index = holidaysA.indexOf(holiday);
        const nextI = (index + 1) % holidaysA.length;
        if (index !== -1) {
            const nextI = (index + 1) % holidaysA.length;
            setHoliday(holidaysA[nextI]);
        }
        return holidaysA[nextI];
    }

    function date(holiday: string): string {
        const holidaysD: string[] = [
            "St.Patrick's Day",
            "Easter",
            "July Fourth",
            "Thanksgiving",
            "New Year's Eve"
        ];
        const index = holidaysD.indexOf(holiday);
        const nextI = (index + 1) % holidaysD.length;
        if (index !== -1) {
            const nextI = (index + 1) % holidaysD.length;
            setHoliday(holidaysD[nextI]);
        }
        return holidaysD[nextI];
    }

    function aClick(): void {
        const next = alphabet(holiday);
        setHoliday(next);
    }
    function dClick(): void {
        const next = date(holiday);
        setHoliday(next);
    }

    return (
        <div>
            Cycle Holiday
            <p>Holiday: {emojis[holiday]}</p>
            <button onClick={aClick}>Advance by Alphabet</button>
            <button onClick={dClick}>Advance by Year</button>
        </div>
    );
}
