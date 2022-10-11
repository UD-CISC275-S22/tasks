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
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    const newAlphaHoliday = ALPHABET_HOLIDAYS[holiday];
    const newYearHoliday = YEAR_HOLIDAYS[holiday];
    return (
        <div>
            <Button onClick={() => setHoliday(newAlphaHoliday)}>
                Alphabet Advance
            </Button>
            <Button onClick={() => setHoliday(newYearHoliday)}>
                Year Advance
            </Button>
            <div>
                Holiday: <span>{holiday}</span>
            </div>
        </div>
    );
}
