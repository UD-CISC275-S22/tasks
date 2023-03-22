import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Chinese New Year"
        | "Lantern Festival"
        | "Dragonboat Festival"
        | "Qixi Festival"
        | "Mid Autumn Festival";

    const [holiday, setHoliday] = useState<Holiday>("Chinese New Year");

    const alphabetical: Record<Holiday, Holiday> = {
        "Chinese New Year": "Dragonboat Festival",
        "Dragonboat Festival": "Mid Autumn Festival",
        "Mid Autumn Festival": "Lantern Festival",
        "Lantern Festival": "Qixi Festival",
        "Qixi Festival": "Chinese New Year"
    };

    const chronoligcal: Record<Holiday, Holiday> = {
        "Chinese New Year": "Lantern Festival",
        "Lantern Festival": "Dragonboat Festival",
        "Dragonboat Festival": "Qixi Festival",
        "Qixi Festival": "Mid Autumn Festival",
        "Mid Autumn Festival": "Chinese New Year"
    };

    const emoji: Record<Holiday, string> = {
        "Chinese New Year": "🐲",
        "Lantern Festival": "🏮",
        "Dragonboat Festival": "🎏",
        "Qixi Festival": "💕",
        "Mid Autumn Festival": "🥮"
    };

    return (
        <div>
            <Button onClick={() => setHoliday(alphabetical[holiday])}>
                Cycle by Alphabet
            </Button>
            <Button onClick={() => setHoliday(chronoligcal[holiday])}>
                Cycle by time of the Year
            </Button>
            <div>
                <span>Holiday: {emoji[holiday]}</span>
            </div>
        </div>
    );
}
