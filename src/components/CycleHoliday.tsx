import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHol, setcurrentHol] = useState<string>("Valentine_Day");

    const alphabetical: Record<string, string> = {
        Cyber_Monday: "New_Years_Day",
        New_Years_Day: "Pentecost",
        Pentecost: "Tax_Day",
        Tax_Day: "Valentine_Day",
        Valentine_Day: "Cyber_Monday"
    };

    const Holidate: Record<string, string> = {
        New_Years_Day: "Valentine_Day",
        Valentine_Day: "Tax_Day",
        Tax_Day: "Pentecost",
        Pentecost: "Cyber_Monday",
        Cyber_Monday: "New_Years_Day"
    };

    const HolidayToEmoji: Record<string, string> = {
        New_Years_Day: "🎆",
        Valentine_Day: "💘",
        Tax_Day: "💰",
        Pentecost: "⛪",
        Cyber_Monday: "💻"
    };

    return (
        <div>
            <Button onClick={() => setcurrentHol(alphabetical[currentHol])}>
                Advance by Alphabet
            </Button>{" "}
            Holiday: {HolidayToEmoji[currentHol]}
            <Button onClick={() => setcurrentHol(Holidate[currentHol])}>
                Advance by Year
            </Button>{" "}
            Holiday: {HolidayToEmoji[currentHol]}
        </div>
    );
}
