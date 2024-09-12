import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type holiday =
        | "Christmas_Day"
        | "New_Years_Day"
        | "Thanksgiving"
        | "Juneteenth"
        | "Presidents_Day";

    const [day, setday] = useState<holiday>("Christmas_Day");

    const alphabet: Record<holiday, holiday> = {
        Christmas_Day: "Juneteenth",
        Juneteenth: "New_Years_Day",
        New_Years_Day: "Presidents_Day",
        Presidents_Day: "Thanksgiving",
        Thanksgiving: "Christmas_Day"
    };

    const year: Record<holiday, holiday> = {
        New_Years_Day: "Presidents_Day",
        Presidents_Day: "Juneteenth",
        Juneteenth: "Thanksgiving",
        Thanksgiving: "Christmas_Day",
        Christmas_Day: "New_Years_Day"
    };

    const emoji: Record<holiday, string> = {
        Christmas_Day: "Christmas Day 🎄",
        New_Years_Day: "New Years Day🕛",
        Thanksgiving: "Thanksgiving 🦃",
        Juneteenth: "Juneteenth 🧑🏿‍🦱",
        Presidents_Day: "Presidents Day 👨‍💼"
    };
    return (
        <div>
            <Button onClick={() => setday(alphabet[day])}>
                Holiday by Alphabet
            </Button>
            <Button onClick={() => setday(year[day])}>
                Holuday by time of the Year
            </Button>
            <div>
                <span>Holiday: {emoji[day]}</span>
            </div>
        </div>
    );
}
