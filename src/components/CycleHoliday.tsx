import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Chinese newyears, earthday, halloween, ST. Paddys

export type Holiday = "🪁" | "🎄" | "🥳" | "🎂" | "🪔";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎂");
    const alph = ["🎂", "🎄", "🪔", "🥳", "🪁"];
    const date = ["🥳", "🪁", "🎂", "🪔", "🎄"];

    function alphNext(curr_hol: string): string {
        const index = alph.findIndex(
            (act_hol: string): boolean => curr_hol === act_hol
        );
        if (index !== 4) {
            return alph[index + 1];
        } else {
            return alph[0];
        }
    }

    function dateNext(curr_hol: string): string {
        const index = date.findIndex(
            (act_hol: string): boolean => curr_hol === act_hol
        );
        if (index !== 4) {
            return date[index + 1];
        } else {
            return date[0];
        }
    }

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={() => setHoliday(alphNext(holiday))}>
                    Advance by Alphabet
                </Button>
                <Button onClick={() => setHoliday(dateNext(holiday))}>
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
