import React, { useState } from "react";
import { Button } from "react-bootstrap";


type Holiday = "🎄" | "🎃" | "🎆" | "🍀" | "🦃";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    
    function nextAlphabet(): void {
        if (holiday === "🎄") setHoliday("🎃");
        else if (holiday === "🎃") setHoliday("🎆");
        else if (holiday === "🎆") setHoliday("🍀");
        else if (holiday === "🍀") setHoliday("🦃");
        else setHoliday("🎄"); 
    }

  
    function nextYear(): void {
        if (holiday === "🍀") setHoliday("🎆");
        else if (holiday === "🎆") setHoliday("🎃");
        else if (holiday === "🎃") setHoliday("🦃");
        else if (holiday === "🦃") setHoliday("🎄");
        else setHoliday("🍀"); 
    }

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={nextAlphabet}>Advance by Alphabet</Button>
            <Button onClick={nextYear}>Advance by Year</Button>
        </div>
    );
}