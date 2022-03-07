import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, nextholiday] = useState<string>("🐰");
    const alphabeticalOrder: Record<string, string> = {
        "🎄": "🐰",
        "🐰": "🎆",
        "🎆": "🇺🇸",
        "🇺🇸": "🦃",
        "🦃": "🎄"
    };
    const yearOrder: Record<string, string> = {
        "🐰": "🇺🇸",
        "🇺🇸": "🎆",
        "🎆": "🦃",
        "🦃": "🎄",
        "🎄": "🐰"
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <div>
                <Button
                    onClick={() =>
                        nextholiday(
                            (previousHoliday) =>
                                alphabeticalOrder[previousHoliday]
                        )
                    }
                >
                    Advance by Alphabet
                </Button>
                :::
                <Button
                    onClick={() =>
                        nextholiday(
                            (previousHoliday) => yearOrder[previousHoliday]
                        )
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}

/*
### Holidays in order of year
Easter 🐰
Memorial Day 🇺🇸
Forth of July 🎆
Thanksgiving 🦃
Christmas 🎄

### Holidays in order of alphabet
Christmas 🎄
Easter 🐰
Forth of July 🎆
Memorial Day 🇺🇸
Thanksgiving 🦃
*/
