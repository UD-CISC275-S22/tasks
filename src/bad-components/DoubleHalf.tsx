import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const handleDouble = () => {
        setDhValue(2 * dhValue);
    };

    const handleHalve = () => {
        setDhValue(0.5 * dhValue);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Button onClick={handleDouble}>Double</Button>
            <Button onClick={handleHalve}>Halve</Button>
        </div>
    );
}
