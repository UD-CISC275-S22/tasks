import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidays =
    | "christmas"
    | "easter"
    | "halloween"
    | "valentines"
    | "thankgiving";

const year_trans: Record<holidays, holidays> = {
    christmas: "valentines",
    valentines: "easter",
    easter: "halloween",
    halloween: "thankgiving",
    thankgiving: "christmas"
};

const alpha_trans: Record<holidays, holidays> = {
    christmas: "easter",
    easter: "halloween",
    halloween: "thankgiving",
    thankgiving: "valentines",
    valentines: "christmas"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<holidays>("christmas");

    function advanceYear(): void {
        const nextYear = year_trans[holiday];
        setHoliday(nextYear);
    }

    function advanceAlpha(): void {
        const nextAlpha = alpha_trans[holiday];
        setHoliday(nextAlpha);
    }

    return (
        <>
            <div>
                <Button onClick={advanceYear}>Advance by Time of Year</Button>
                <Button onClick={advanceAlpha}>Advance by Alphabet</Button>
            </div>
            <div>
                Holiday:{" "}
                {(holiday === "christmas" && "🎄") ||
                    (holiday === "valentines" && "❤️") ||
                    (holiday === "easter" && "🐇") ||
                    (holiday === "thankgiving" && "🐔") ||
                    (holiday === "halloween" && "🎃")}
            </div>
        </>
    );
}
