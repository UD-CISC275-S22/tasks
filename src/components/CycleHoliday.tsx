import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Rakhri"
        | "Christmas"
        | "Halloween"
        | "Vaisakhi"
        | "New_Years";
    const [Holiday, setHoliday] = useState<Holiday>("Rakhri");
    const alphaHoliday: Record<Holiday, Holiday> = {
        Christmas: "Halloween",
        Halloween: "New_Years",
        New_Years: "Rakhri",
        Rakhri: "Vaisakhi",
        Vaisakhi: "Christmas"
    };
    const yearHoliday: Record<Holiday, Holiday> = {
        New_Years: "Vaisakhi",
        Vaisakhi: "Rakhri",
        Rakhri: "Halloween",
        Halloween: "Christmas",
        Christmas: "New_Years"
    };
    function switchHolidayA() {
        const newH = alphaHoliday[Holiday];
        setHoliday(newH);
    }
    function switchHolidayY() {
        const newH1 = yearHoliday[Holiday];
        setHoliday(newH1);
    }
    return (
        <div>
            <div>
                <Button onClick={switchHolidayA}>Advance by Alphabet</Button>
            </div>
            <div>
                <Button onClick={switchHolidayY}>Advance by Year</Button>
            </div>
            <div>
                {Holiday === "Rakhri" ? (
                    <span>Holiday: 👫</span>
                ) : Holiday === "Vaisakhi" ? (
                    <span>Holiday: 👳‍♂️</span>
                ) : Holiday === "Halloween" ? (
                    <span>Holiday: 🎃</span>
                ) : Holiday === "Christmas" ? (
                    <span>Holiday: 🎄</span>
                ) : Holiday === "New_Years" ? (
                    <span>Holiday: 🎉</span>
                ) : (
                    <span>Holiday: </span>
                )}
            </div>
        </div>
    );
}
