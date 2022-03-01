import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays =
    | "Chinese New Year"
    | "New Years Eve"
    | "Pi Day"
    | "Whale's Day"
    | "World Sleep Day";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holidays>("Pi Day");
    const alph: string[] = [
        "Chinese New Year🐲",
        "New Years Eve🎄",
        "Pi Day🥧",
        "Whale's Day🐳",
        "World Sleep Day😴"
    ];
    //Need to sort and remove stuff, change to record
    const year: string[] = [
        "Chinese New Year🐲",
        "New Years Eve🎄",
        "Pi Day🥧",
        "Whale's Day🐳",
        "World Sleep Day😴"
    ];
    return <div>Cycle Holiday</div>;
}
