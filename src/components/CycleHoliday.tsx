import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function CycleHoliday(): JSX.Element {
    function alphabetical(): void {
        if (Holiday == "🎄") {
            setHoliday("🎃");
        }
        if (Holiday == "🎃") {
            setHoliday("🎆");
        }
        if (Holiday == "🎆") {
            setHoliday("🦃");
        }
        if (Holiday == "🦃") {
            setHoliday("🥂");
        }
        if (Holiday == "🥂") {
            setHoliday("🎄");
        }
    }
    function chronological(): void {
        if (Holiday == "🥂") {
            setHoliday("🎆");
        }
        if (Holiday == "🎆") {
            setHoliday("🎃");
        }
        if (Holiday == "🎃") {
            setHoliday("🦃");
        }
        if (Holiday == "🦃") {
            setHoliday("🎄");
        }
        if (Holiday == "🎄") {
            setHoliday("🥂");
        }
    }

    const [Holiday, setHoliday] = useState<string>("🎆");
    return (
        <div>
            <div>
                <h3>Holidays</h3>
                <Button onClick={() => alphabetical()}>Alphabet</Button>
                <Button onClick={() => chronological()}>Year</Button>
            </div>
            <div>Holiday: {Holiday}</div>
        </div>
    );
}
