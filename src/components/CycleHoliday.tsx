import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //find 5 emojis to represent them
    //create 2 buttons that let you "cycle" through each holiday
    //alphabetically + time of year

    //view: current holdiay with the Holiday: {emoji}

    //first button: include the text "Alphabet" somewhere
    //second button: include the text year

    type Holiday =
        | "Halloween"
        | "Christmas"
        | "Thanksgiving"
        | "Valentines Day"
        | "Easter";

    const [holiday, setHoliday] = useState<Holiday>("Halloween");

    const alphabetical: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Valentines Day",
        "Valentines Day": "Christmas"
    };

    const chronoligcal: Record<Holiday, Holiday> = {
        "Valentines Day": "Easter",
        Easter: "Thanksgiving",
        Thanksgiving: "Halloween",
        Halloween: "Christmas",
        Christmas: "Valentines Day"
    };

    const emoji: Record<Holiday, string> = {
        Christmas: "🎅",
        Easter: "🐰",
        Halloween: "🎃",
        Thanksgiving: "🦃",
        "Valentines Day": "❣️"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(alphabetical[holiday])}>
                Advance Alphabetically
            </Button>
            <Button onClick={() => setHoliday(chronoligcal[holiday])}>
                Advance by Time of Year
            </Button>
            <div>
                <span>Holiday: {emoji[holiday]}</span>
            </div>
        </div>
    );
}
