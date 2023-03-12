import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🐲" | "🎄" | "🎃" | "🏮" | "🦃";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🐲");

    function chooseByLetter(): Holiday {
        if (holiday === "🐲") {
            return "🎃";
        } else if (holiday === "🎃") {
            return "🏮";
        } else if (holiday === "🏮") {
            return "🎄";
        } else if (holiday === "🎄") {
            return "🦃";
        } else {
            return "🐲";
        }
    }

    function chooseByTime(): Holiday {
        if (holiday === "🎄") {
            return "🐲";
        } else if (holiday === "🐲") {
            return "🏮";
        } else if (holiday === "🏮") {
            return "🎃";
        } else if (holiday === "🎃") {
            return "🦃";
        } else {
            return "🎄";
        }
    }

    return (
        <div>
            <span>Holiday: {holiday}</span>
            <br></br>
            <Button onClick={() => setHoliday(chooseByLetter)}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(chooseByTime)}>
                Advance by Year
            </Button>
        </div>
    );
}
