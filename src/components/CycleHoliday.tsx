import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");
    function emojis(): string {
        if (holiday === "Christmas") {
            return "🎁️";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "St. Patrick's Day") {
            return "☘️";
        } else if (holiday === "Valentine's Day") {
            return "💖";
        } else if (holiday === "Thanksgiving") {
            return "🦃";
        } else {
            return "";
        }
    }
    function changeYear() {
        if (holiday === "Valentine's Day") {
            setHoliday("St. Patrick's Day");
        } else if (holiday === "St. Patrick's Day") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Valentine's Day");
        }
    }
    function changeAlphabetically() {
        if (holiday === "Valentine's Day") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("St. Patrick's Day");
        } else if (holiday === "St. Patrick's Day") {
            setHoliday("Valentine's Day");
        }
    }
    return (
        <div>
            <Button onClick={() => changeYear()}>Advance by Year</Button>
            <Button onClick={() => changeAlphabetically()}>
                Advance by Alphabet
            </Button>
            Holiday: {emojis()}
        </div>
    );
}
