import React, { useState } from "react";
import { Button } from "react-bootstrap";
//Spring Festival 🐲
//Dragon Boat Festival 🎏
//Diiwali 🪔
//Halloween 🎃
//Christmas 🎄
export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Spring Festival");
    function checkAlphabet(): void {
        if (holiday === "Spring Festival") {
            setHoliday("Christmas");
        } else if (holiday === "Christmas") {
            setHoliday("Diiwali");
        } else if (holiday === "Diiwali") {
            setHoliday("Dragon Boat Festival");
        } else if (holiday === "Dragon Boat Festival") {
            setHoliday("Halloween");
        } else setHoliday("Spring Festival");
    }
    function checkYear(): void {
        if (holiday === "Spring Festival") {
            setHoliday("Dragon Boat Festival");
        } else if (holiday === "Dragon Boat Festival") {
            setHoliday("Diiwali");
        } else if (holiday === "Diiwali") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Christmas");
        } else setHoliday("Spring Festival");
    }
    function setEmojis(): string {
        if (holiday === "Spring Festival") {
            return "🐲";
        } else if (holiday === "Dragon Boat Festival") {
            return "🎏";
        } else if (holiday === "Diiwali") {
            return "🪔";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else {
            return "🎄";
        }
    }
    return (
        <div>
            Current Holiday: {holiday} {setEmojis()}
            <div>
                <Button onClick={checkAlphabet}>Advance by Alphabet</Button>
                <Button onClick={checkYear}>Advance by Year</Button>
            </div>
        </div>
    );
}
