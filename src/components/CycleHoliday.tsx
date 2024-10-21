import React, { useState } from "react";
import { Button } from "react-bootstrap";

/*enum Holiday {
    NewYear = "🎉 New Year",
    Eid_al_Adha = "🐑 Islamic holiday",
    MotherDay = "😍 Mother's Day",
    Eid_al_fitr = "🌙 Breaking Fast",
    Nowruz = "🌸 Islamic New Year",
}*/
const Holiday = [
    { name: "NewYear", emoji: "🎉", month: 1 },
    { name: "Eid_al_Adha", emoji: "🐑", month: 3 },
    { name: "MotherDay", emoji: "😍", month: 4 },
    { name: "Eid_al_fitr", emoji: "🌙", month: 5 },
    { name: "Nowruz", emoji: "🌸", month: 8 },
];

const holidayAlph = [
    Holiday[1],
    Holiday[3],
    Holiday[2],
    Holiday[0],
    Holiday[4],
];

const holidayNew = [Holiday[0], Holiday[1], Holiday[2], Holiday[3], Holiday[4]];

export function CycleHoliday(): React.JSX.Element {
    const [currentHolidayIndex, setCurrentHoldayIndex] = useState<number>(1);

    const getNextHolidayAlph = (): void => {
        setCurrentHoldayIndex(
            (prevIndex) => (prevIndex + 2) % holidayAlph.length,
        );
    };

    const getNextHolidayNew = (): void => {
        setCurrentHoldayIndex(
            (prevIndex) => (prevIndex + 2) % holidayNew.length,
        );
    };

    return (
        <div>
            <h2>
                Holiday: {holidayAlph[currentHolidayIndex].emoji}{" "}
                {holidayAlph[currentHolidayIndex].name}
            </h2>

            <Button onClick={getNextHolidayAlph}>Advance by Alphabet</Button>

            <Button onClick={getNextHolidayNew}>Advance by Year</Button>
        </div>
    );
}
