import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    //return <div>Cycle Holiday</div>;

    type Holidays =
        | "Christmas: 🎄"
        | "Diwali: 🪔"
        | "Halloween: 🎃"
        | "New Years: 🍾"
        | "Valentines Day: ❤️";

    const [holiday, setHoliday] = useState<Holidays>("Christmas: 🎄");

    function alpha(): void {
        if (holiday === "Christmas: 🎄") {
            setHoliday("Diwali: 🪔");
        } else if (holiday === "Diwali: 🪔") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("New Years: 🍾");
        } else if (holiday === "New Years: 🍾") {
            setHoliday("Valentines Day: ❤️");
        } else if (holiday === "Valentines Day: ❤️") {
            setHoliday("Christmas: 🎄");
        }
    }

    function years(): void {
        if (holiday === "New Years: 🍾") {
            setHoliday("Valentines Day: ❤️");
        } else if (holiday === "Valentines Day: ❤️") {
            setHoliday("Diwali: 🪔");
        } else if (holiday === "Diwali: 🪔") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("Christmas: 🎄");
        } else if (holiday === "Christmas: 🎄") {
            setHoliday("New Years: 🍾");
        }
    }

    return (
        <div>
            <div>
                <span>Holiday: {holiday}</span>
            </div>
            <Button onClick={alpha}>Advance by Alphabet</Button>
            <Button onClick={years}>Advance by Year</Button>
        </div>
    );
}
