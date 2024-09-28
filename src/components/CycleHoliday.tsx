import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎄");
    const CycleA: string[] = ["🎄", "🎃", "😁", "☹️", "🛌"];
    const CycleB: string[] = ["🛌", "😁", "☹️", "🎃", "🎄"];

    const cycleA = (): void => {
       setHoliday(CycleA[(CycleA.indexOf(holiday) + 1) % 5]);
    };

    const cycleb = (): void => {
        setHoliday(CycleB[(CycleB.indexOf(holiday)+1)%5]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={cycleA}>Advance by Alphabet</Button>
                <Button onClick={cycleb}>Advance by Year</Button>
            </div>
        </div>
    );
}
