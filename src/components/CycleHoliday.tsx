import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎃" | "🦃" | "💘" | "🌎" | "🥂";
export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    const alphabet: Record<Holiday, Holiday> = {
        "🎃": "🥂",
        "🦃": "💘",
        "💘": "🌎",
        "🌎": "🎃",
        "🥂": "🦃",
    };
    const year: Record<Holiday, Holiday> = {
        "🎃": "🦃",
        "🦃": "🥂",
        "💘": "🌎",
        "🌎": "🎃",
        "🥂": "💘",
    };
    function advAlphabet(currHoliday: Holiday): Holiday {
        return alphabet[currHoliday];
    }
    function advYear(currHoliday: Holiday): Holiday {
        return year[currHoliday];
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button
                    onClick={() => {
                        setHoliday(advAlphabet(holiday));
                    }}
                >
                    Advance Alphabetically
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(advYear(holiday));
                    }}
                >
                    Advance by Date in the Year
                </Button>
            </div>
            ;
        </div>
    );
}
