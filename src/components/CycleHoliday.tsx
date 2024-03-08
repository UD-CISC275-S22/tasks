import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday =
    | "Christmas: 🎄"
    | "Garba: 🕺"
    | "Halloween: 🎃"
    | "Diwali: 🪔"
    | "Thanksgiving: 🦃";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas: 🎄");
    const alphabet = () => {
        if (holiday === "Christmas: 🎄") {
            setHoliday("Diwali: 🪔");
        } else if (holiday === "Diwali: 🪔") {
            setHoliday("Garba: 🕺");
        } else if (holiday === "Garba: 🕺") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("Thanksgiving: 🦃");
        } else {
            setHoliday("Christmas: 🎄");
        }
    };
    const year = () => {
        if (holiday === "Christmas: 🎄") {
            setHoliday("Garba: 🕺");
        } else if (holiday === "Garba: 🕺") {
            setHoliday("Halloween: 🎃");
        } else if (holiday === "Halloween: 🎃") {
            setHoliday("Diwali: 🪔");
        } else if (holiday === "Diwali: 🪔") {
            setHoliday("Thanksgiving: 🦃");
        } else if (holiday === "Thanksgiving: 🦃") {
            setHoliday("Christmas: 🎄");
        }
    };
    return (
        <div>
            <h1>Holiday: {holiday}</h1>
            <Button onClick={alphabet}>Advance by Alphabet</Button>;
            <Button onClick={year}>Advance by Year</Button>;
        </div>
    );
}
