import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "April" | "Chist" | "new" | "st" | "Val";
    const calHol: Holiday[] = ["new", "Val", "st", "April", "Chist"];
    const alph: Holiday[] = ["April", "Chist", "new", "st", "Val"];
    const map = { April: "🌧️", Chist: "🎄", new: "🎊", st: "🍀", Val: "❤️" };
    const [curHoliday, updateHol] = useState<Holiday>("April");
    const alphaRotate = () => {
        updateHol(alph[(alph.indexOf(curHoliday) + 1) % alph.length]);
    };
    const calRotate = () => {
        updateHol(calHol[(calHol.indexOf(curHoliday) + 1) % alph.length]);
    };
    return (
        <div>
            <h3>Cycle Holiday</h3>
            <Button onClick={alphaRotate}>Advance by Alphabet</Button>
            <Button onClick={calRotate}>Advance by Year</Button>
            <p>Holiday: {map[curHoliday]}</p>
            <p>{curHoliday}</p>
        </div>
    );
}
