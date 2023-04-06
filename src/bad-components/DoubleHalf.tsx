import React, { useState } from "react";
import { Button } from "react-bootstrap";
// function Doubler(): JSX.Element {
//     return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
// }

// function Halver(): JSX.Element {
//     return <Button onClick={() => setDhValue(dhValue / 2)}>Halve</Button>;
// }

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function Doubler() {
        setDhValue(dhValue * 2);
    }

    function Halver() {
        setDhValue(dhValue / 2);
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={Doubler}>Double</Button>
            <Button onClick={Halver}>Halve</Button>
        </div>
    );
}
