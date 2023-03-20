import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [Hol, setHol] = useState<string>("New Years"); //worked with mbiet uko

    function In_order() {
        if (Hol === "New Years") {
            setHol("Juneteenth");
        } else if (Hol === "Juneteenth") {
            setHol("Independence day");
        } else if (Hol === "Independence day") {
            setHol("Thanksgiving");
        } else if (Hol === "Thanksgiving") {
            setHol("Christmas");
        } else {
            setHol("New Years");
        }
    }

    function Alphabetically(): void {
        if (Hol === "Christmas") {
            setHol("Independence day");
        } else if (Hol === "Independence day") {
            setHol("Juneteenth");
        } else if (Hol === "Juneteenth") {
            setHol("New Years");
        } else if (Hol === "New Years") {
            setHol("Thanksgiving");
        } else {
            setHol("Christmas");
        }
    }

    function emojis(): string {
        if (Hol === "Christmas") {
            return "🎄";
        }
        if (Hol === "Independence day") {
            return "🎆";
        }
        if (Hol === "Juneteenth") {
            return "✊";
        }
        if (Hol === "New Years") {
            return "🎊";
        } else {
            return "🦃";
        }
    }
    return (
        <div>
            Holiday: {emojis()} {Hol}
            <Button onClick={() => Alphabetically()}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => In_order()}>Advance by Year</Button>
        </div>
    );
}
