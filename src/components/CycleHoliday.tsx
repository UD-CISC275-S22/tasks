import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎂" | "🎃" | "🐰" | "🎄" | "🎆";

export function CycleHoliday(): JSX.Element {
    const holidays: Holiday[] = ["🎂", "🎃", "🐰", "🎄", "🎆"];
    const holidaysAlphabetical: Holiday[] = ["🎂", "🎆", "🎄", "🐰", "🎃"];
    const [holiday, setHoliday] = useState<Holiday>("🎂");

    const nextAlphabet = () => {
        const index = holidaysAlphabetical.indexOf(holiday);
        setHoliday(
            holidaysAlphabetical[(index + 1) % holidaysAlphabetical.length],
        );
    };

    const nextYear = () => {
        const index = holidays.indexOf(holiday);
        setHoliday(holidays[(index + 1) % holidays.length]);
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button variant="primary" onClick={nextAlphabet} className="m-1">
                Advance by Alphabet
            </Button>
            <Button variant="success" onClick={nextYear} className="m-1">
                Advance by Year
            </Button>
        </div>
    );
}


