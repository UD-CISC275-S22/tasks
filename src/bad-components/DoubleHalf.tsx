import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <span>
            <h4>DoubleHalf</h4>
            {<div>{dhValue}</div>}
            <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>
            <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>
        </span>
    );
}
