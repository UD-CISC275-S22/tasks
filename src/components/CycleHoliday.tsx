import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");
    function emojiOutput(): string {
        if (holiday === "Valentine's Day") {
            return "💘";
        } else if (holiday === "St. Patrick's Day") {
            return "☘️";
        } else if (holiday === "My Birthday") {
            return "🎂";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "Christmas") {
            return "🎄";
        } else {
            return "";
        }
    }
    function changeYear() {
        if (holiday === "Valentine's Day") {
            setHoliday("St. Patrick's Day");
        } else if (holiday === "St. Patrick's Day") {
            setHoliday("My Birthday");
        } else if (holiday === "My Birthday") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Valentine's Day");
        }
    }
    function changeAlphabetical() {
        if (holiday === "Valentine's Day") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("My Birthday");
        } else if (holiday === "My Birthday") {
            setHoliday("St. Patrick's Day");
        } else if (holiday === "St. Patrick's Day") {
            setHoliday("Valentine's Day");
        }
    }

    return (
        <div>
            Holiday: {emojiOutput()}
            <Button onClick={() => changeAlphabetical()}>
                Advance By Alphabet
            </Button>
            <Button onClick={() => changeYear()}>Advance By Year</Button>
        </div>
    );
}
