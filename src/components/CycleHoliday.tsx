import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    /*
    type holiday = {
        name: string;
        emoji: string;
        date: number;
    };

    const holidays = [
        { name: "Christmas", emoji: "🎄", date: 12 },
        { name: "Thanksgiving", emoji: "🦃", date: 11 },
        { name: "Halloween", emoji: "🎃", date: 10 },
        { name: "Fourth of July", emoji: "🧨", date: 7 },
        { name: "Easter", emoji: "🐰", date: 4 }
    ];
    */

    type holiday =
        | "Christmas"
        | "Birthday"
        | "CyberMonday"
        | "Halloween"
        | "Thanksgiving";

    const [holli, setHoliday] = useState<holiday>("Christmas");

    const alphaOrder: Record<holiday, holiday> = {
        Christmas: "CyberMonday",
        Birthday: "Christmas",
        CyberMonday: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Birthday"
    };

    const chronOrder: Record<holiday, holiday> = {
        Christmas: "Birthday",
        Birthday: "Halloween",
        CyberMonday: "Christmas",
        Halloween: "Thanksgiving",
        Thanksgiving: "CyberMonday"
    };

    function nextAlpha(): void {
        setHoliday(alphaOrder[holli]);
    }

    function nextChron(): void {
        setHoliday(chronOrder[holli]);
    }

    return (
        <div>
            <Button onClick={nextAlpha}> Next by Alphabet</Button>
            <Button onClick={nextChron}> Next by Year</Button>
            <div>
                {holli == "Christmas" ? (
                    <span>Holiday: 🎄</span>
                ) : holli == "Birthday" ? (
                    <span>Holiday: 🎂</span>
                ) : holli == "Thanksgiving" ? (
                    <span>Holiday: 🦃</span>
                ) : holli == "CyberMonday" ? (
                    <span>Holiday: 💻</span>
                ) : holli == "Halloween" ? (
                    <span>Holiday: 🎃</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
