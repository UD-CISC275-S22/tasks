import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../App.css";
// 🏖️ 🌸 ❄️ 🥟 🥮
enum Holiday {
    AutumnFestival = "🥮",
    CherryBlossomFestival = "🌸",
    FourthOfJuly = "🏖️",
    Honukkah = "❄️",
    SpringFestival = "🥟"
}
export function nextAlphabetical(current: Holiday): Holiday {
    const alph_ordering = [
        Holiday.AutumnFestival,
        Holiday.CherryBlossomFestival,
        Holiday.FourthOfJuly,
        Holiday.Honukkah,
        Holiday.SpringFestival
    ];
    return current === Holiday.SpringFestival
        ? Holiday.AutumnFestival
        : alph_ordering[alph_ordering.findIndex((x) => x === current) + 1];
}
export function nextTemporally(current: Holiday): Holiday {
    const temporal_ordering = [
        Holiday.CherryBlossomFestival,
        Holiday.SpringFestival,
        Holiday.FourthOfJuly,
        Holiday.AutumnFestival,
        Holiday.Honukkah
    ];
    // to make eslint happy
    const next_index = temporal_ordering.findIndex((x) => x === current) + 1;
    return current === Holiday.Honukkah
        ? Holiday.CherryBlossomFestival
        : temporal_ordering[next_index];
}
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>(
        Holiday.CherryBlossomFestival
    );
    return (
        <div className="body">
            <div className="card">Holiday: {holiday}</div>
            <Button onClick={() => setHoliday(nextTemporally(holiday))}>
                Next Holiday in the Year
            </Button>
            <Button onClick={() => setHoliday(nextAlphabetical(holiday))}>
                Next Holiday Alphabetically
            </Button>
        </div>
    );
}
