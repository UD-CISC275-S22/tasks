import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    // ChineseNY, Christmas, Halloween, New Years, Thanksgiving
    // Alphabetical: 🧧🎄🎃🍾🦃
    // Time of year: 🍾🧧🎃🦃🎄
    const [holiday, setHoliday] = useState<string>("🧧");

    const alphabetical: Record<string, string> = {
        "🧧": "🎄",
        "🎄": "🎃",
        "🎃": "🍾",
        "🍾": "🦃",
        "🦃": "🧧"
    };
    const chronological: Record<string, string> = {
        "🍾": "🧧",
        "🧧": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "🍾"
    };
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <div>
                <Button
                    onClick={() =>
                        setHoliday((prevHoliday) => alphabetical[prevHoliday])
                    }
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() =>
                        setHoliday((prevHoliday) => chronological[prevHoliday])
                    }
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
