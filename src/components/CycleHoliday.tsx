import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    valentines,
    halloween,
    stpatricks,
    christmas,
    earthday
}

function emojiHoliday(holiday: Holiday): string {
    if (holiday === Holiday.valentines) {
        return "💖";
    } else if (holiday === Holiday.halloween) {
        return "🎃";
    } else if (holiday === Holiday.stpatricks) {
        return "🍀";
    } else if (holiday === Holiday.christmas) {
        return "🎁";
    } else if (holiday === Holiday.earthday) {
        return "🌱";
    } else {
        return "";
    }
}

function alphabeticalSort(holiday: Holiday): Holiday {
    // CEHSV
    if (holiday === Holiday.christmas) {
        return Holiday.earthday;
    } else if (holiday === Holiday.earthday) {
        return Holiday.halloween;
    } else if (holiday === Holiday.halloween) {
        return Holiday.stpatricks;
    } else if (holiday === Holiday.stpatricks) {
        return Holiday.valentines;
    } else if (holiday === Holiday.valentines) {
        return Holiday.christmas;
    } else {
        return Holiday.christmas;
    }
}

function yearSort(holiday: Holiday): Holiday {
    // VSEHC
    if (holiday === Holiday.valentines) {
        return Holiday.stpatricks;
    } else if (holiday === Holiday.stpatricks) {
        return Holiday.earthday;
    } else if (holiday === Holiday.earthday) {
        return Holiday.halloween;
    } else if (holiday === Holiday.halloween) {
        return Holiday.christmas;
    } else if (holiday === Holiday.christmas) {
        return Holiday.valentines;
    } else {
        return Holiday.valentines;
    }
}

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState(Holiday.halloween);
    // CEHSV
    // VSEHC
    // 💖🎃🍀🎁🌱
    return (
        <>
            <div>Current Holiday: {emojiHoliday(holiday)}</div>
            <Button onClick={() => setHoliday(alphabeticalSort(holiday))}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(yearSort(holiday))}>
                Advance by Year
            </Button>
        </>
    );
}
