import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h5>Double Half</h5>
            <span>
                <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
            </span>
            <span>
                <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
            </span>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
        </div>
    );
}
