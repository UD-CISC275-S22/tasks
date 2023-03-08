import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    valentines_day,
    halloween,
    christmas,
    saint_pattys_day,
    birthday
}

function getEmojiForHoliday(holiday: Holiday): string {
    // I refuse to make these nested ternaries, sorry!
    // I can't use switches because eslint and prettier fight
    if (holiday === Holiday.valentines_day) {
        return "❣️";
    } else if (holiday === Holiday.halloween) {
        return "👻";
    } else if (holiday === Holiday.christmas) {
        return "❄️";
    } else if (holiday === Holiday.saint_pattys_day) {
        return "🍀";
    } else if (holiday === Holiday.birthday) {
        return "🎂";
    } else {
        return "";
    }
}

function getNextHolidayByYear(holiday: Holiday): Holiday {
    // Ditto
    if (holiday === Holiday.valentines_day) {
        return Holiday.saint_pattys_day;
    } else if (holiday === Holiday.halloween) {
        return Holiday.christmas;
    } else if (holiday === Holiday.christmas) {
        return Holiday.valentines_day;
    } else if (holiday === Holiday.saint_pattys_day) {
        return Holiday.birthday;
    } else if (holiday === Holiday.birthday) {
        return Holiday.halloween;
    } else {
        return Holiday.birthday;
    }
}

function getNextHolidayByAlphabet(holiday: Holiday): Holiday {
    // Ditto
    if (holiday === Holiday.valentines_day) {
        return Holiday.birthday;
    } else if (holiday === Holiday.halloween) {
        return Holiday.saint_pattys_day;
    } else if (holiday === Holiday.christmas) {
        return Holiday.halloween;
    } else if (holiday === Holiday.saint_pattys_day) {
        return Holiday.valentines_day;
    } else if (holiday === Holiday.birthday) {
        return Holiday.christmas;
    } else {
        return Holiday.birthday;
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState(Holiday.valentines_day);

    return (
        <>
            <Button
                onClick={() => setHoliday(getNextHolidayByAlphabet(holiday))}
            >
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(getNextHolidayByYear(holiday))}>
                Advance by Year
            </Button>
            <div>Holiday: {getEmojiForHoliday(holiday)}</div>
        </>
    );
}
