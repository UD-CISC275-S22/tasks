import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { name: "Easter", emoji: "🐰" },
        { name: "Fourth of July", emoji: "🧨" },
        { name: "Halloween", emoji: "🎃" },
        { name: "Thanksgiving", emoji: "🦃" },
        { name: "Christmas", emoji: "🎁" }
    ];
    //const [holiday, setHoliday] = useState(holidays[0]);

    /*function nextAlphabetical(holiday) {
        holiday.find((currentHoliday: Holiday): Holiday => currentHoliday.name <  )

    }
    function nextChronological(holiday) {
        setHoliday(holiday[]
    }

    function setAlphabetical() {
        setHoliday(nextAlphabetical(holiday));
    }
    function setChronological() {
        setHoliday(nextChronological(holiday));
    }*/

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "x-large" }}>Cycle Holiday</div>
        </div>
    );
}
