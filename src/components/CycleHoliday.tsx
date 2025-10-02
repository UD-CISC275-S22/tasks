import React, { useState } from "react";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎁" | "🐇" | "🎃" | "🦃" | "🎄";
    const [holiday, setHoliday] = useState<Holiday>("🎁");
    
    const byAlphabet: Record<Holiday, Holiday> = {
        "🎁": "🐇",
        "🐇": "🎃", 
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🎁"
    };
    
    const byYear: Record<Holiday, Holiday> = {
        "🎁": "🐇",
        "🐇": "🎃",
        "🎃": "🦃", 
        "🦃": "🎄",
        "🎄": "🎁"
    };
    
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <button onClick={() => setHoliday(byAlphabet[holiday])}>
                Advance by Alphabet
            </button>
            <button onClick={() => setHoliday(byYear[holiday])}>
                Advance by Year
            </button>
        </div>
    );
}
