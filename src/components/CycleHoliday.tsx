import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Spring_Festival,
    Mid_Autumn_Festival,
    Dragon_Boat_Festival,
    Halloween,
    Christmas
}

function getEmojiForHoliday(holiday: Holiday): string {
    if (holiday === Holiday.Spring_Festival) {
        return "🏮";
    } else if (holiday === Holiday.Mid_Autumn_Festival) {
        return "🥮";
    } else if (holiday === Holiday.Dragon_Boat_Festival) {
        return "🐲";
    } else if (holiday === Holiday.Halloween) {
        return "🎃";
    } else if (holiday === Holiday.Christmas) {
        return "🎄";
    } else {
        return "";
    }
}

function NextHolidayByYear(holiday: Holiday): Holiday {
    if (holiday === Holiday.Spring_Festival) {
        return Holiday.Mid_Autumn_Festival;
    } else if (holiday === Holiday.Mid_Autumn_Festival) {
        return Holiday.Dragon_Boat_Festival;
    } else if (holiday === Holiday.Dragon_Boat_Festival) {
        return Holiday.Halloween;
    } else if (holiday === Holiday.Halloween) {
        return Holiday.Christmas;
    } else if (holiday === Holiday.Christmas) {
        return Holiday.Spring_Festival;
    } else {
        return Holiday.Spring_Festival;
    }
}

function NextHolidayByAlphabet(holiday: Holiday): Holiday {
    if (holiday === Holiday.Spring_Festival) {
        return Holiday.Christmas;
    } else if (holiday === Holiday.Mid_Autumn_Festival) {
        return Holiday.Spring_Festival;
    } else if (holiday === Holiday.Dragon_Boat_Festival) {
        return Holiday.Halloween;
    } else if (holiday === Holiday.Halloween) {
        return Holiday.Mid_Autumn_Festival;
    } else if (holiday === Holiday.Christmas) {
        return Holiday.Dragon_Boat_Festival;
    } else {
        return Holiday.Spring_Festival;
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState(Holiday.Spring_Festival);

    return (
        <>
            <Button onClick={() => setHoliday(NextHolidayByAlphabet(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(NextHolidayByYear(holiday))}>
                Advance by Year
            </Button>
            <div>Holiday: {getEmojiForHoliday(holiday)}</div>
        </>
    );
}
