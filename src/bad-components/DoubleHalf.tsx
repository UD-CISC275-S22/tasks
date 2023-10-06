import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);

    function Doubler(): void {
        setDhValue((dhValue) => 2 * dhValue);
    }

    function Halver(): void {
        setDhValue((dhValue) => 0.5 * dhValue);
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
