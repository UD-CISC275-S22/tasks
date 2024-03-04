import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas"
        | "Thanksgiving"
        | "Halloween"
        | "Easter"
        | "Independence Day";
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function nextByDate(): void {
        if (holiday === "Christmas") setHoliday("Easter");
        else if (holiday === "Easter") setHoliday("Independence Day");
        else if (holiday === "Independence Day") setHoliday("Halloween");
        else if (holiday === "Halloween") setHoliday("Thanksgiving");
        else setHoliday("Christmas");
    }

    function nextByAlphabet(): void {
        if (holiday === "Christmas") setHoliday("Easter");
        else if (holiday === "Easter") setHoliday("Halloween");
        else if (holiday === "Halloween") setHoliday("Independence Day");
        else if (holiday === "Independence Day") setHoliday("Thanksgiving");
        else setHoliday("Christmas");
    }

    function holidayToEmoji(): string {
        if (holiday === "Christmas") return "🎄";
        else if (holiday === "Thanksgiving") return "🦃";
        else if (holiday === "Halloween") return "🎃";
        else if (holiday === "Easter") return "🐇";
        else return "🎆";
    }

    return (
        <div>
            <Button onClick={() => nextByDate()}>Year</Button>
            <Button onClick={() => nextByAlphabet()}>Alphabet</Button>
            <div>Holiday: {holidayToEmoji()}</div>
        </div>
    );
}
