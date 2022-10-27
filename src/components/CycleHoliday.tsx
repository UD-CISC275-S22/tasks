// import { constants } from "perf_hooks";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "Christmas" | "Easter" | "Halloween" | "StPaddys" | "JulyFourth";

const ALPHABET_HOLIDAYS: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "Halloween",
    Halloween: "JulyFourth",
    JulyFourth: "StPaddys",
    StPaddys: "Christmas"
};

const YEAR_HOLIDAYS: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Easter: "StPaddys",
    StPaddys: "JulyFourth",
    JulyFourth: "Halloween",
    Halloween: "Christmas"
};
export function CycleHoliday(): JSX.Element {
    //Code for Cycle Holiday
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    function byAlphabet(): void {
        const newAlphaHoliday = ALPHABET_HOLIDAYS[holiday];
        setHoliday(newAlphaHoliday);
    }
    function byYear(): void {
        const newYearHoliday = YEAR_HOLIDAYS[holiday];
        setHoliday(newYearHoliday);
    }
    return (
        <>
            <div>
                <Button onClick={byAlphabet}>Advance by Alphabet</Button>
                <Button onClick={byYear}>Advance by Year</Button>
            </div>
            <div>
                Holiday: <span>{holiday}</span>
            </div>
        </>
    );
}
