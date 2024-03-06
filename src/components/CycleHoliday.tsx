import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "Christmas",
    Halloween = "Halloween",
    Thanksgiving = "Thanksgiving",
    Easter = "Easter",
    NewYearsDay = "New Years Day"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setHoliday] = useState<Holiday>(Holiday.Christmas);
    function changeHolidayYear(): void {
        if (currentHoliday === Holiday.Christmas) {
            setHoliday(Holiday.NewYearsDay);
        }
        if (currentHoliday === Holiday.Halloween) {
            setHoliday(Holiday.Thanksgiving);
        }
        if (currentHoliday === Holiday.Thanksgiving) {
            setHoliday(Holiday.Christmas);
        }
        if (currentHoliday === Holiday.NewYearsDay) {
            setHoliday(Holiday.Easter);
        }
        if (currentHoliday === Holiday.Easter) {
            setHoliday(Holiday.Halloween);
        }
    }
    function changeHolidayAlphabet(): void {
        if (currentHoliday === Holiday.Christmas) {
            setHoliday(Holiday.Easter);
        }
        if (currentHoliday === Holiday.Easter) {
            setHoliday(Holiday.Halloween);
        }
        if (currentHoliday === Holiday.Halloween) {
            setHoliday(Holiday.NewYearsDay);
        }
        if (currentHoliday === Holiday.NewYearsDay) {
            setHoliday(Holiday.Thanksgiving);
        }
        if (currentHoliday === Holiday.Thanksgiving) {
            setHoliday(Holiday.Christmas);
        }
    }
    return (
        <div>
            <Button onClick={changeHolidayYear}>Advance By Year</Button>
            <Button onClick={changeHolidayAlphabet}>Advance By Alphabet</Button>
            <div>Holiday: {currentHoliday}</div>
            {currentHoliday === Holiday.Christmas && <div>Christmas:🎄</div>}
            {currentHoliday === Holiday.NewYearsDay && (
                <div>New Years Day: 🎆</div>
            )}
            {currentHoliday === Holiday.Thanksgiving && (
                <div>Thanksgiving: 🍗</div>
            )}
            {currentHoliday === Holiday.Easter && <div>Easter: 🐇</div>}
            {currentHoliday === Holiday.Halloween && <div>Halloween: 🎃</div>}
        </div>
    );
}
