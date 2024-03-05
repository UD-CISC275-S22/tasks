import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState(10);
    const Doubler = () => {
        setDhValue(2 * dhValue);
    };

    const Halver = () => {
        setDhValue(0.5 * dhValue);
    };
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
