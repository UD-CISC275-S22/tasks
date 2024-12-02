import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday =
    | "SpringFestival"
    | "DragonBoatFestival"
    | "Thanksgiving"
    | "Christmas"
    | "WhateverHasAbreak";
const byAlpha: Record<Holiday, Holiday> = {
    Christmas: "DragonBoatFestival",
    DragonBoatFestival: "SpringFestival",
    SpringFestival: "Thanksgiving",
    Thanksgiving: "WhateverHasAbreak",
    WhateverHasAbreak: "Christmas"
};
const byTime: Record<Holiday, Holiday> = {
    SpringFestival: "DragonBoatFestival",
    DragonBoatFestival: "WhateverHasAbreak",
    WhateverHasAbreak: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "SpringFestival"
};
const Emoji: Record<Holiday, string> = {
    SpringFestival: "Holiday: 🧨",
    DragonBoatFestival: "Holiday: 🐲",
    Thanksgiving: "Holiday: 🎃",
    Christmas: "Holiday: 🎄",
    WhateverHasAbreak: "Holiday: 😪"
};
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("SpringFestival");
    function ByAlpha(): void {
        setHoliday(byAlpha[holiday]);
    }
    function ByTime(): void {
        setHoliday(byTime[holiday]);
    }
    return (
        <div>
            <div>
                <Button onClick={() => ByAlpha()}>Advance by Alphabet</Button>
                {Emoji[holiday]}
                <Button onClick={() => ByTime()}>Advance by Year</Button>
            </div>
        </div>
    );
}
