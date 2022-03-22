import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");
    const switchHolidayDate = (): void => {
        if (holiday == "🐲") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🦃");
        } else if (holiday == "🦃") {
            setHoliday("🎄");
        } else if (holiday == "🎄") {
            setHoliday("🎆");
        } else if (holiday == "🎆") {
            setHoliday("🐲");
        }
    };
    const switchHolidayAlpha = (): void => {
        if (holiday == "🐲") {
            setHoliday("🎄");
        } else if (holiday == "🎄") {
            setHoliday("🎃");
        } else if (holiday == "🎃") {
            setHoliday("🎆");
        } else if (holiday == "🎆") {
            setHoliday("🦃");
        } else if (holiday == "🦃") {
            setHoliday("🐲");
        }
    };

    return (
        <div>
            <div>
                Holiday: <span>{holiday}</span>;
            </div>
            <Button onClick={switchHolidayDate}>Advance by Year</Button>
            <Button onClick={switchHolidayAlpha}>Advance by Alphabet</Button>
        </div>
    );
}
