import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Thanksgiving"
    | "Labor Day"
    | "DST Begins";

const ALPHABETICAL: Record<Holiday, Holiday> = {
    Christmas: "DST Begins",
    Halloween: "Labor Day",
    Thanksgiving: "Christmas",
    "Labor Day": "Thanksgiving",
    "DST Begins": "Halloween"
};

const CHRONOLOGICAL: Record<Holiday, Holiday> = {
    Christmas: "DST Begins",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    "Labor Day": "Halloween",
    "DST Begins": "Labor Day"
};

const EMOJIS: Record<Holiday, string> = {
    Christmas: "🎄",
    Halloween: "🎃",
    Thanksgiving: "🦃",
    "Labor Day": "🔧",
    "DST Begins": "🕑"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    return (
        <span>
            <Button onClick={() => setHoliday(ALPHABETICAL[holiday])}>
                {" "}
                Advance by Alphabet{" "}
            </Button>{" "}
            <Button onClick={() => setHoliday(CHRONOLOGICAL[holiday])}>
                {" "}
                Advance by Year{" "}
            </Button>
            <br></br>
            Holiday: {EMOJIS[holiday]}
        </span>
    );
}
