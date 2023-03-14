import React, { useState } from "react";
import { Button } from "react-bootstrap";

{
    /* 1/4 test cases passed*/
}

export function CycleHoliday(): JSX.Element {
    // eslint-disable-next-line prefer-const
    let [holiday, setHoliday] = useState<string>("Christmas🎄");
    const [visible, setVisible] = useState<boolean>(true);
    type holiday =
        | "4thofJuly 🎆"
        | "St Patty's Day ☘️"
        | "Christmas 🎄"
        | "New Year's ✨"
        | "Birthday 🎁";
    function holidayChronological(): void {
        // first holiday of the year(from the list)
        if (holiday === "St Patty's Day ☘️") {
            holiday = "4thofJuly 🎆";
        } else if (holiday === "4thofJuly 🎆") {
            holiday = "Birthday 🎁";
        } else if (holiday === "Birthday 🎁") {
            holiday = "Christmas 🎄";
        } else {
            holiday = "New Year's ✨";
        }
        setHoliday(holiday);
    }
    function holidayAlphabetical(): void {
        if (holiday === "Birthday 🎁") {
            holiday = "Christmas 🎄";
        } else if (holiday === "Christmas 🎄") {
            holiday = "4thofJuly 🎆";
        } else if (holiday === "4thofJuly 🎆") {
            holiday = "New Year's ✨";
        } else {
            holiday = "St Patty's Day ☘️";
        }
        setHoliday(holiday);
    }
    return (
        <>
            <div>
                <Button
                    onClick={() => setHoliday("Christmas 🎄")}
                    disabled={visible}
                ></Button>
            </div>
            <div>
                Holiday: <span>{holiday}</span>
                <Button onClick={holidayChronological}>
                    Holiday Through the Year
                </Button>
            </div>
            <div>
                Holiday: <span>{holiday}</span>
                <Button onClick={holidayAlphabetical}>
                    Holiday in Alphabetical Order
                </Button>
            </div>
        </>
    );
}
