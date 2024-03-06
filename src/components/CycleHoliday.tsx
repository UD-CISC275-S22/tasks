import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎃" | "🎅" | "🦅" | "🎂" | "🌌";
export function CycleHoliday(): JSX.Element {
    // 1) Halloween, October 31st, Pumpkin 🎃
    // 2) Christmas, December 25th, Santa 🎅
    // 3) Independance Day, July 4th, Eagle 🦅
    // 4) My Birthday :), September 30th, Cake 🎂
    // 5) May the 4th, May 4th, Space 🌌
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    function advanceA(): void {
        if (holiday === "🎅") setHoliday("🎃");
        else if (holiday === "🎃") setHoliday("🦅");
        else if (holiday === "🦅") setHoliday("🌌");
        else if (holiday === "🌌") setHoliday("🎂");
        else setHoliday("🎅");
    }
    function advanceY(): void {
        if (holiday === "🌌") setHoliday("🦅");
        else if (holiday === "🦅") setHoliday("🎂");
        else if (holiday === "🎂") setHoliday("🎃");
        else if (holiday === "🎃") setHoliday("🎅");
        else setHoliday("🌌");
    }
    return (
        <div>
            <div>
                Holiday: <span>{holiday}</span>
            </div>
            <div>
                <Button onClick={advanceA}>Next by Alphabet(ically)</Button>
                <Button onClick={advanceY}>Next by Year</Button>
            </div>
        </div>
    );
}
